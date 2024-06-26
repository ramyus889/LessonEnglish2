"use client";

import { useState } from "react";
import TextMap from "./TextMap";

export default function MPage() {
  const [blurEng, setBlurEng] = useState(true);
  const [blurRus, setBlurRus] = useState(false);
  const [blurFull, setBlurFull] = useState(true);
  return (
    <div className="">
      <div className="me-5 ms-5 mt-10 flex max-w-[900px] flex-col items-start gap-8 border-b-2 border-white pb-10 sm:ms-10 sm:flex-row sm:items-center lg:place-content-center lg:text-[18px] xl:text-[20px]">
        <div className="text-[20px] sm:ps-2 lg:text-[40px]">A0 - lesson 6</div>
        <div className="flex flex-col gap-5 max-[410px]:w-full min-[410px]:flex-row">
          <button
            onClick={() => setBlurEng(!blurEng)}
            className="rounded-xl border-2 border-slate-500 px-5 py-3 font-['Inter']"
          >
            Blur Eng.
          </button>
          <button
            onClick={() => setBlurRus(!blurRus)}
            className="rounded-xl border-2 border-slate-500 px-5 py-3 font-['Inter']"
          >
            Blur Rus.
          </button>
          <button
            onClick={() => setBlurFull(!blurFull)}
            className="rounded-xl border-2 border-slate-500 px-5 py-3 font-['Inter']"
          >
            Blur Full
          </button>
        </div>
      </div>
      <TextMap blurEng={blurEng} blurRus={blurRus} blurFull={blurFull} />
    </div>
  );
}
