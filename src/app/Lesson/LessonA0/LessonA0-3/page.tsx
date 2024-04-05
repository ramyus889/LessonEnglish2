"use client";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 700,
    });
  }, []);
  return (
    <div className="">
      <div className="text-[40px] max-[1350px]:text-[35px] border-b-2 border-white pb-10 mt-10 ms-10 max-[500px]:ms-5 max-[850px]:w-[700px] w-[800px]">
        A0 - lesson 3
      </div>
      <div className="text-[25px] max-[1350px]:text-[20px] max-[360px]:text-[18px] mt-10 ms-10 mb-10 max-[500px]:ms-5 flex flex-col gap-10 w-[800px] max-[850px]:w-[700px] font-['Inter']">
        <div className="">
          <div
            data-aos="fade-right"
            className="flex gap-10 border-b-2 border-white  pb-10"
          >
            <div className="flex flex-col gap-5  border-r-4 w-[800px] border-white">
              <div className=" max-[850px]:flex max-[850px]:flex-col">
                I work in a company -{" "}
                <span className="blur-[10px] hover:blur-[0px] max-[850px]:px-0 px-10 transition duration-500">
                  Я работаю в компании
                </span>
              </div>
              <div className=" max-[850px]:flex max-[850px]:flex-col">
                I like English -{" "}
                <span className="blur-[10px] hover:blur-[0px] max-[850px]:px-0 px-10 transition duration-500">
                  Мне нравится английский
                </span>
              </div>
              <div className=" max-[850px]:flex max-[850px]:flex-col">
                You do it very well -{" "}
                <span className="blur-[10px] hover:blur-[0px] max-[850px]:px-0 px-10 transition duration-500">
                  Вы делаете это очень хорошо
                </span>
              </div>
              <div className=" max-[850px]:flex max-[850px]:flex-col">
                They want more -{" "}
                <span className="blur-[10px] hover:blur-[0px] max-[850px]:px-0 px-10 transition duration-500">
                  Они хотят больше
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
