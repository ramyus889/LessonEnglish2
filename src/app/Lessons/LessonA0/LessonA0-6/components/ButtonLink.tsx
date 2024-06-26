import Link from "next/link";
export default function MPage() {
  return (
    <div className="me-10 ms-5 mt-20 flex w-[160px] flex-col justify-start gap-5 sm:ms-10 sm:w-[900px] sm:flex-row lg:justify-center xl:justify-between xl:gap-0">
      <Link
        href="/Lessons/LessonA0/LessonA0-5"
        as={"/Lessons/LessonA0/LessonA0-5"}
        className="rounded-xl border-2 border-slate-500 px-5 py-2"
      >
        ← LessonA0-5
      </Link>
      <Link
        href="/Lessons/LessonA0/LessonA0-7"
        as={"/Lessons/LessonA0/LessonA0-7"}
        className="rounded-xl border-2 border-slate-500 px-5 py-2"
      >
        LessonA0-7 →
      </Link>
    </div>
  );
}
