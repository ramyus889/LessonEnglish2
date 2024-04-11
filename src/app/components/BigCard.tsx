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
        <div key={data.id} className="flex flex-col gap-5">
          <div className="flex place-content-center items-center gap-10 mt-[200px]">
            <div data-aos="fade-right" className="flex flex-col gap-10">
              <div className="text-[90px] font-bold">{data.title}</div>
              <div className="text-[24px] w-[500px]">{data.text}</div>
              <Link href="/Lesson" className="text-[24px] underline font-bold">
                Learn more
              </Link>
            </div>
            <div data-aos="fade-left" className="">
              <Image src={data.image} alt="airflow" width={800} height={700} />
            </div>
          </div>

          <div className="">
            <div className="flex gap-10 place-content-center mt-20">
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
                <div className="text-[32px] font-bold">{data.cardTitle1}</div>
                <div className="text-[24px] text-[#b4b8c0] w-[500px]">
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
                <div className="text-[32px] font-bold">{data.cardTitle2}</div>
                <div className="text-[24px] text-[#b4b8c0] w-[500px]">
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
                <div className="text-[32px] font-bold">{data.cardTitle3}</div>
                <div className="text-[24px] text-[#b4b8c0] w-[500px]">
                  {data.cardText3}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
