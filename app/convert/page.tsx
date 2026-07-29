"use client";

import { useEffect, useState } from "react";
import * as THREE from "three";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader.js";
import { GLTFExporter } from "three/examples/jsm/exporters/GLTFExporter.js";

/**
 * Internal one-off tool: load the Mixamo FBX, list its bones, downscale its
 * textures and re-export as a compact GLB. An 87 MB FBX is far too heavy to
 * ship to patients on a phone; the GLB is what the site actually loads.
 * Delete this route once the models are converted.
 */
export default function ConvertPage() {
  const [log, setLog] = useState<string[]>([]);

  useEffect(() => {
    const say = (m: string) => setLog((l) => [...l, m]);

    new FBXLoader().load("/models/adam.fbx", (obj) => {
      const bones: string[] = [];
      obj.traverse((o) => {
        if ((o as THREE.Bone).isBone) bones.push(o.name);
      });
      say(`BONES ${bones.length}`);
      say(`BONELIST ${bones.join(",")}`);

      // Mixamo exports in centimetres; the rest of the scene is in metres.
      obj.scale.setScalar(0.01);

      // Every texture is rasterised onto a canvas before export. FBX embedded
      // images may still be decoding when the loader returns, and GLTFExporter
      // rejects an image that is not yet complete — hence the wait first.
      const texes = new Set<THREE.Texture>();
      obj.traverse((o) => {
        const mesh = o as THREE.Mesh;
        if (!mesh.isMesh) return;
        const mats = Array.isArray(mesh.material) ? mesh.material : [mesh.material];
        mats.forEach((m) => {
          const mat = m as THREE.MeshStandardMaterial;
          (["map", "normalMap", "roughnessMap", "metalnessMap", "aoMap", "emissiveMap", "specularMap"] as const).forEach((slot) => {
            const tex = mat[slot as keyof THREE.MeshStandardMaterial] as unknown as THREE.Texture | null;
            if (tex && (tex as THREE.Texture).isTexture) texes.add(tex as THREE.Texture);
          });
        });
      });
      say(`TEXTURES ${texes.size}`);

      // FBXLoader left every texture with an empty src: the embedded PNGs are
      // present in the file but it did not decode them. They were extracted
      // separately, so log the mesh/material layout and attach them by hand.
      obj.traverse((o) => {
        const mesh = o as THREE.Mesh;
        if (!mesh.isMesh) return;
        const mats = Array.isArray(mesh.material) ? mesh.material : [mesh.material];
        say(`MESH ${mesh.name} verts=${mesh.geometry.attributes.position.count} mats=${mats.map((m) => (m as THREE.Material).name).join("|")}`);
      });

      // Load the extracted PNGs and attach them by material. The groups map
      // cleanly: 1001 is skin, 1002 the hoodie/pants/sneakers, 1003 hair.
      const GROUPS: Record<string, string> = {
        Ch08_body: "1001",
        Ch08_body1: "1002",
        Ch08_hair: "1003",
      };

      const loadTex = (file: string) =>
        new Promise<THREE.Texture | null>((resolve) => {
          new THREE.TextureLoader().load(
            `/models/tex/${file}`,
            (t) => resolve(t),
            undefined,
            () => resolve(null)
          );
        });

      const FILES: Record<string, { diffuse: string; normal: string }> = {
        "1001": { diffuse: "0_Ch08_1001_Diffuse.png", normal: "3_Ch08_1001_Normal.png" },
        "1002": { diffuse: "4_Ch08_1002_Diffuse.png", normal: "7_Ch08_1002_Normal.png" },
        "1003": { diffuse: "8_Ch08_1003_Diffuse.png", normal: "9_Ch08_1003_Normal.png" },
      };

      /** Redraw at 1024 — 4K maps are far too heavy to send to a phone. */
      const shrink = (tex: THREE.Texture, max = 1024) => {
        const img = tex.image as HTMLImageElement;
        const w = img.naturalWidth || img.width;
        const h = img.naturalHeight || img.height;
        const scale = Math.min(1, max / Math.max(w, h));
        const c = document.createElement("canvas");
        c.width = Math.round(w * scale);
        c.height = Math.round(h * scale);
        c.getContext("2d")!.drawImage(img, 0, 0, c.width, c.height);
        tex.image = c;
        tex.needsUpdate = true;
        return `${w}->${c.width}`;
      };

      Promise.all(
        Object.entries(FILES).map(async ([group, f]) => {
          const [d, n] = await Promise.all([loadTex(f.diffuse), loadTex(f.normal)]);
          return [group, d, n] as const;
        })
      ).then((loaded) => {
        const byGroup = new Map<string, { d: THREE.Texture | null; n: THREE.Texture | null }>();
        loaded.forEach(([g, d, n]) => {
          if (d) say(`SHRINK ${g} diffuse ${shrink(d)}`);
          if (n) say(`SHRINK ${g} normal ${shrink(n)}`);
          byGroup.set(g, { d, n });
        });

        obj.traverse((o) => {
          const mesh = o as THREE.Mesh;
          if (!mesh.isMesh) return;
          const mats = Array.isArray(mesh.material) ? mesh.material : [mesh.material];
          mats.forEach((m) => {
            const mat = m as THREE.MeshStandardMaterial;
            const set = byGroup.get(GROUPS[mat.name] ?? "");
            // Clear the empty slots FBXLoader left behind first.
            mat.map = null;
            mat.normalMap = null;
            mat.roughnessMap = null;
            mat.metalnessMap = null;
            mat.aoMap = null;
            mat.emissiveMap = null;
            if (!set) return;
            if (set.d) {
              set.d.colorSpace = THREE.SRGBColorSpace;
              set.d.flipY = false;
              mat.map = set.d;
            }
            if (set.n) {
              set.n.flipY = false;
              mat.normalMap = set.n;
            }
            mat.roughness = 0.85;
            mat.metalness = 0;
            // Hair, beard and eyelashes are alpha-cut cards.
            if (mat.name === "Ch08_hair") {
              mat.transparent = true;
              mat.alphaTest = 0.5;
              mat.side = THREE.DoubleSide;
            }
            mat.needsUpdate = true;
            say(`ASSIGNED ${mat.name} <- group ${GROUPS[mat.name]}`);
          });
        });

        exportGlb();
      });

      function exportGlb() {
      new GLTFExporter().parse(
        obj,
        (result) => {
          const blob = new Blob([result as ArrayBuffer], { type: "model/gltf-binary" });
          const reader = new FileReader();
          reader.onload = () => {
            (window as unknown as { __GLB: string }).__GLB = reader.result as string;
            say(`GLB_READY ${(blob.size / 1048576).toFixed(2)}MB`);
          };
          reader.readAsDataURL(blob);
        },
        (err) => say(`ERROR ${String(err)}`),
        { binary: true }
      );
      }
    },
    undefined,
    (err) => say(`LOAD_ERROR ${String(err)}`));
  }, []);

  return (
    <pre id="log" style={{ padding: 24, fontSize: 12, whiteSpace: "pre-wrap" }}>
      {log.join("\n")}
    </pre>
  );
}
