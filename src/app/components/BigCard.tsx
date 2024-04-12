"use client";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
import Image from "next/image";
import { BigCardData } from "./exportText.js";

export default function BigCard() {
  useEffect(() => {
    AOS.init({
      duration: 700,
    });
  }, []);
  return (
    <div className="">
      {BigCardData.map((data) => (
        <div key={data.id} className="flex flex-col gap-5 ">
          <div className="flex place-content-center items-center gap-10 mt-[200px]">
            <div className="flex max-[890px]:flex-col max-[890px]:items-start items-center  gap-5">
              <div data-aos="fade-right" className="flex flex-col px-5 gap-10">
                <div className="text-[90px] max-[1200px]:text-[70px] max-[550px]:text-[50px] font-bold">
                  {data.title}
                </div>
                <div className="text-[24px] max-[1200px]:text-[20px] max-[890px]:w-[500px] max-[1200px]:w-[300px] max-[550px]:w-[300px] w-[500px]">
                  {data.text}
                </div>
                <Link
                  href="/Lessons"
                  className="text-[24px] underline font-bold"
                >
                  Узнать больше
                </Link>
              </div>
              <div data-aos="fade-left" className="">
                <Image
                  src={data.image}
                  alt="airflow"
                  width={800}
                  height={700}
                />
              </div>
            </div>
          </div>

          <div className="">
            <div className="flex gap-10 place-content-center mt-20 px-5">
              <div className="flex max-[1150px]:flex-col gap-10">
                <div
                  data-aos="fade-right"
                  className="flex flex-col gap-5 bg-[#1a1c21] p-5 rounded-xl"
                >
                  <Image
                    src={data.dataImage}
                    alt="airflow"
                    width={50}
                    height={50}
                  />
                  <div className="text-[32px] max-[1770px]:text-[26px] max-[1150px]:text-[20px] text-wrap font-bold">
                    {data.cardTitle1}
                  </div>
                  <div className="text-[24px] max-[1770px]:text-[20px] max-[1150px]:text-[18px] text-wrap text-[#b4b8c0] max-[1750px]:w-[400px] max-[1480px]:w-[300px] w-[500px]">
                    {data.cardText1}
                  </div>
                </div>
                <div
                  data-aos="fade-up"
                  className="flex flex-col gap-5 bg-[#1a1c21] p-5 rounded-xl"
                >
                  <Image
                    src={data.dataImage2}
                    alt="airflow"
                    width={50}
                    height={50}
                  />
                  <div className="text-[32px] max-[1770px]:text-[26px] max-[1150px]:text-[20px] text-wrap font-bold">
                    {data.cardTitle2}
                  </div>
                  <div className="text-[24px] max-[1770px]:text-[20px] max-[1150px]:text-[18px] text-wrap text-[#b4b8c0] max-[1750px]:w-[400px] max-[1480px]:w-[300px] w-[500px]">
                    {data.cardText2}
                  </div>
                </div>
                <div
                  data-aos="fade-left"
                  className="flex flex-col gap-5 bg-[#1a1c21] p-5 rounded-xl"
                >
                  <Image
                    src={data.dataImage3}
                    alt="airflow"
                    width={50}
                    height={50}
                  />
                  <div className="text-[32px] max-[1770px]:text-[26px] max-[1150px]:text-[20px] font-bold text-wrap">
                    {data.cardTitle3}
                  </div>
                  <div className="text-[24px] max-[1770px]:text-[20px] max-[1150px]:text-[18px] text-[#b4b8c0] text-wrap max-[1750px]:w-[400px] max-[1480px]:w-[300px] w-[500px]">
                    {data.cardText3}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
