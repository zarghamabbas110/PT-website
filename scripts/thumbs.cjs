/* Render a still of the 3D character for every exercise into public/thumbs.
 *
 * Library cards cannot each hold a live 3D canvas — a browser allows about
 * sixteen at once — so the grid shows these stills and only swaps in the
 * moving figure under the pointer. Re-run this after changing any animation:
 *
 *     npx next build && npx next start -p 4400 &
 *     node scripts/thumbs.cjs 4400
 */
const pw = require("/opt/node22/lib/node_modules/playwright/index.js");
const fs = require("fs");
const path = require("path");

const PORT = process.argv[2] || "4400";
const OUT = path.join(process.cwd(), "public", "thumbs");

(async () => {
  fs.mkdirSync(OUT, { recursive: true });
  const b = await pw.chromium.launch({
    executablePath: "/opt/pw-browsers/chromium",
    args: ["--proxy-bypass-list=<-loopback>", "--use-gl=swiftshader", "--enable-unsafe-swiftshader"],
  });
  const pg = await b.newPage({ viewport: { width: 520, height: 520 } });
  await pg.goto(`http://localhost:${PORT}/human3d`, { waitUntil: "domcontentloaded" });
  await pg.waitForTimeout(9000);

  const list = await pg.evaluate(() => window.__catalog.map((e) => e.slug));
  let done = 0, skipped = 0;
  for (const slug of list) {
    const file = path.join(OUT, `${slug}.png`);
    if (fs.existsSync(file)) { skipped++; continue; }
    try {
      // The middle frame of the movement reads better on a card than the
      // starting position, which for many exercises is just "lying still".
      await pg.evaluate((s) => {
        const ex = window.__catalog.find((e) => e.slug === s);
        window.__setShot(s, "threeQuarter", Math.min(1, (ex?.labels?.length ?? 2) - 1));
      }, slug);
      await pg.waitForTimeout(1400);
      // Scroll the canvas into the window and read its rect from the page.
      // Asking Playwright for the element's box waits for it to be stable and
      // times out on a canvas that is redrawing every frame.
      const box = await pg.evaluate(() => {
        const c = document.querySelector("canvas");
        if (!c) return null;
        window.scrollTo(0, c.getBoundingClientRect().top + window.scrollY - 8);
        const r = c.getBoundingClientRect();
        return { x: r.x, y: r.y, width: r.width, height: r.height };
      });
      if (!box || box.width < 10) continue;
      await pg.waitForTimeout(500);
      await pg.screenshot({ path: file, clip: box });
      done++;
      if (done % 20 === 0) console.log(`${done} rendered`);
    } catch (e) {
      console.log("FAILED", slug, String(e).split("\n")[0].slice(0, 80));
    }
  }
  console.log(`done: ${done} rendered, ${skipped} already present`);
  await b.close();
})();
