import { notFound } from "next/navigation";
import { EXERCISES, bySlug } from "@/data/exercises";
import ExerciseDetail from "@/components/library/ExerciseDetail";

export function generateStaticParams() {
  return EXERCISES.map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const ex = bySlug(slug);
  if (!ex) return { title: "Exercise not found — PhysioFlow" };
  return {
    title: `${ex.name.en} — PhysioFlow`,
    description: ex.purpose.en,
  };
}

export default async function ExercisePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const exercise = bySlug(slug);
  if (!exercise) notFound();

  const related = [...exercise.progressions, ...exercise.regressions]
    .map((s) => bySlug(s))
    .filter((e): e is NonNullable<typeof e> => Boolean(e));

  return <ExerciseDetail exercise={exercise} related={related} />;
}
