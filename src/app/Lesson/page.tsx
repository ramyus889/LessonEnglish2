"use client";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
import { linksA0, linksA1 } from "./lessonHref.js";
export default function Lesson() {
  useEffect(() => {
    AOS.init({
      duration: 700,
    });
  }, []);
  return (
    <div className="mb-10">
      <div className="mt-10 ms-10 ">
        <div className="text-[40px] mb-10">Lesson-A0</div>
        <div className="grid grid-cols-10 gap-8 me-10">
          {linksA0.map((item) => (
            <Link
              key={item.text}
              href={item.href}
              className="px-4 py-3 border border-slate-500 text-center rounded-xl"
            >
              {item.text}
            </Link>
          ))}
        </div>
      </div>

      <div className="mt-10 ms-10 ">
        <div className="text-[40px] mb-10">Lesson-A1</div>
        <div className="grid grid-cols-10 gap-8 me-10">
          {linksA1.map((item) => (
            <Link
              key={item.text}
              href={item.href}
              className="px-4 py-3 border border-slate-500 text-center rounded-xl"
            >
              {item.text}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
