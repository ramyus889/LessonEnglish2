"use client";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
import ButtonBlur from "./components/ButtonBlur";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 700,
    });
  }, []);
  return (
    <div className="">
      <div className="inline-block">
        <div className="me-10 ms-5 mt-20 flex w-[900px] justify-start sm:ms-10 lg:justify-end">
          <Link
            href="/Lessons/LessonA0/LessonA0-2"
            as={"/Lessons/LessonA0/LessonA0-2"}
            className="rounded-xl border-2 border-slate-500 px-5 py-2"
          >
            LessonA0-2 →
          </Link>
        </div>
      </div>
      <ButtonBlur />
    </div>
  );
}
