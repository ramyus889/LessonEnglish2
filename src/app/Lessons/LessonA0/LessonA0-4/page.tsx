"use client";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
import { rusEngText4 } from "./RusEngText4.js";
export default function Home() {
  const [blurEng, setBlurEng] = useState(true);
  const [blurRus, setBlurRus] = useState(false);
  const [blurFull, setBlurFull] = useState(true);
  useEffect(() => {
    AOS.init({
      duration: 700,
    });
  }, []);
  return (
    <div className="">
      <div className="inline-block">
        <div className="flex xl:justify-between md:justify-center  ms-5 justify-start w-[160px] sm:flex-row flex-col gap-5 lg:gap-0 sm:w-[900px] sm:ms-10 mt-20 me-10">
          <Link
            href="/Lessons/LessonA0/LessonA0-3"
            as={"/Lessons/LessonA0/LessonA0-3"}
            className="px-5 py-2 rounded-xl border-2 border-slate-500"
          >
            ← LessonA0-3
          </Link>
          <Link
            href="/Lessons/LessonA0/LessonA0-5"
            as={"/Lessons/LessonA0/LessonA0-5"}
            className="px-5 py-2 rounded-xl border-2 border-slate-500"
          >
            LessonA0-5 →
          </Link>
        </div>
      </div>
      <div className="flex gap-8  place-content-center xl:text-[20px] items-start lg:items-center lg:text-[18px] flex-col lg:flex-row border-b-2 border-white pb-10 mt-10 sm:ms-10 ms-5 w-[700px] lg:w-[900px]">
        <div className="text-[20px] sm:ps-2 lg:text-[40px]">A0 - lesson 4</div>
        <button
          onClick={() => setBlurEng(!blurEng)}
          className="px-5 py-3 border-2 border-slate-500 rounded-xl font-['Inter']"
        >
          Blur Eng.
        </button>
        <button
          onClick={() => setBlurRus(!blurRus)}
          className="px-5 py-3 border-2 border-slate-500 rounded-xl font-['Inter']"
        >
          Blur Rus.
        </button>
        <button
          onClick={() => setBlurFull(!blurFull)}
          className="px-5 py-3 border-2 border-slate-500 rounded-xl font-['Inter']"
        >
          Blur Full
        </button>
      </div>
      <div className="flex">
        <div className="xl:text-[25px] lg:text-[20px]  mt-10 sm:ms-10 mb-20 ms-5 flex flex-col gap-10 lg:w-[900px] w-[700px] font-['Inter']">
          {rusEngText4.map((item) => (
            <div key={item.engText} className="">
              <div
                data-aos="fade-right"
                className="flex gap-10 border-b-2 dark:border-white border-black  pb-10"
              >
                <div className="flex flex-col gap-5  border-r-4 w-[1000px] dark:border-white border-black">
                  <div
                    className={`flex-col flex sm:flex-row transition duration-500 ${
                      blurFull ? "blur-[0px]" : "blur-[10px] hover:blur-[0px]"
                    }`}
                  >
                    <div
                      className={`px-2 transition duration-500 lg:px-5 text-wrap ${
                        blurEng ? "blur-[0px]" : "blur-[10px] hover:blur-[0px]"
                      }`}
                    >
                      {item.engText}
                    </div>
                    <div className="lg:px-0 px-2">-</div>
                    <div
                      className={`px-2 transition duration-500 lg:px-5 text-wrap ${
                        blurRus ? "blur-[0px]" : "blur-[10px] hover:blur-[0px]"
                      }`}
                    >
                      {item.rusText}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
