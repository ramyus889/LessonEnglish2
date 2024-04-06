"use client";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { rusEngText3 } from "./RusEngText3.js";
export default function Home() {
  const [blurEng, setBlurEng] = useState(true);
  const [blurRus, setBlurRus] = useState(true);
  const [blurFull, setBlurFull] = useState(true);
  useEffect(() => {
    AOS.init({
      duration: 700,
    });
  }, []);
  return (
    <div className="">
      <div className="flex gap-8 items-center max-[1350px]:text-[20px] max-[850px]:items-start max-[850px]:text-[18px] max-[850px]:flex-col border-b-2 border-white pb-10 mt-10 ms-10 max-[500px]:ms-5 max-[850px]:w-[700px] w-[900px]">
        <div className="text-[40px] max-[1350px]:text-[20px]">
          A0 - lesson 3
        </div>
        <button
          onClick={() => setBlurEng(!blurEng)}
          className="px-5 py-3 border-2 border-slate-500 rounded-xl font-['Inter']"
        >
          Заблюрить Анг.
        </button>
        <button
          onClick={() => setBlurRus(!blurRus)}
          className="px-5 py-3 border-2 border-slate-500 rounded-xl font-['Inter']"
        >
          Заблюрить Рус.
        </button>
        <button
          onClick={() => setBlurFull(!blurFull)}
          className="px-5 py-3 border-2 border-slate-500 rounded-xl font-['Inter']"
        >
          Заблюрить Все
        </button>
      </div>
      <div className="text-[23px] max-[1350px]:text-[20px] max-[430px]:text-[18px] mt-10 ms-10 mb-10 max-[500px]:ms-5 flex flex-col gap-10 w-[900px] max-[850px]:w-[700px] font-['Inter']">
        {rusEngText3.map((item) => (
          <div key={item.engText} className="">
            <div
              data-aos="fade-right"
              className="flex gap-10 border-b-2 border-white  pb-10"
            >
              <div className="flex flex-col gap-5  border-r-4 w-[1000px] border-white">
                <div
                  className={`max-[850px]:flex max-[850px]:flex-col flex transition duration-500 ${
                    blurFull ? "blur-[0px]" : "blur-[10px] hover:blur-[0px]"
                  }`}
                >
                  <div
                    className={` transition duration-500 ${
                      blurEng ? "blur-[0px]" : "blur-[10px] hover:blur-[0px]"
                    }`}
                  >
                    {item.engText} -{" "}
                  </div>
                  <div
                    className={`  max-[850px]:px-0 px-5 transition duration-500 ${
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
  );
}
