import { Suspense } from "react";
import LibraryBrowser from "@/components/library/LibraryBrowser";

export const metadata = {
  title: "Exercise Library — PhysioFlow",
  description:
    "Filter a clinically structured exercise library by body region, joint, exercise type, contraction, load, equipment, patient position and difficulty.",
};

export default function ExercisesPage() {
  return (
    <main className="min-h-screen bg-cream-100 px-5 pb-24 pt-32 sm:px-8">
      {/* The browser reads the chosen region out of the URL, so it has to sit
          behind a boundary for the page to stay statically prerendered. */}
      <Suspense fallback={null}>
        <LibraryBrowser />
      </Suspense>
    </main>
  );
}
