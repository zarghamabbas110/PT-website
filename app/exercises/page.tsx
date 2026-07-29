import LibraryBrowser from "@/components/library/LibraryBrowser";

export const metadata = {
  title: "Exercise Library — PhysioFlow",
  description:
    "Filter a clinically structured exercise library by body region, contraction type, load, patient position and difficulty.",
};

export default function ExercisesPage() {
  return (
    <main className="min-h-screen bg-cream-100 px-5 pb-24 pt-32 sm:px-8">
      <LibraryBrowser />
    </main>
  );
}
