"use client";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import logo from "../../../public/Screenshot_3.png";
import Link from "next/link";

export default function Head() {
  useEffect(() => {
    AOS.init({
      duration: 700,
    });
  }, []);
  return (
    <div className="">
      <div data-aos="fade-up" className="">
        <div className="text-center mt-20 font-bold text-[100px] max-[1100px]:text-[80px] max-[760px]:text-[60px] max-[600px]:text-[50px] max-[500px]:text-[30px] max-[760px]:leading-[60px] max-[600px]:leading-[50px] max-[500px]:leading-[30px] leading-[100px]">
          Уроки английского языка <br />
          бесплатные и премиум
        </div>
        <div className="text-center text-[32px] max-[1100px]:text-[24px] max-[500px]:text-[20px] mt-5 bg-gradient-to-r from-[#3c7093]  to-[#fb1d35] bg-clip-text text-transparent">
          Изучайте английский язык от A0 до C1{" "}
        </div>
      </div>
      <div className="flex gap-5 my-20 place-content-center">
        <div className="flex max-[450px]:flex-col gap-5">
          <Link
            data-aos="fade-right"
            href="https://lesson-english2-two.vercel.app/Lessons"
            target="_blank"
            className="border text-gray-50  duration-300 relative group cursor-pointer   overflow-hidden h-16 w-48 rounded-md bg-neutral-800 p-2  font-extrabold hover:bg-sky-700"
          >
            <div className="absolute group-hover:-top-1 group-hover:-right-2 z-10 w-16 h-16 rounded-full group-hover:scale-150  duration-700 right-12 top-12 bg-yellow-500"></div>
            <div className="absolute group-hover:-top-1 group-hover:-right-2 z-10 w-12 h-12 rounded-full group-hover:scale-150  duration-700 right-20 -top-6 bg-orange-500"></div>
            <div className="absolute group-hover:-top-1 group-hover:-right-2 z-10 w-8 h-8   rounded-full group-hover:scale-150  duration-700 right-32 top-6 bg-pink-500"></div>
            <div className="absolute group-hover:-top-1 group-hover:-right-2 z-10 w-4 h-4   rounded-full group-hover:scale-150  duration-700 right-2 top-12 bg-red-600"></div>
            <p className="z-10 absolute bottom-2 left-2">Начало работы</p>
          </Link>
          <Link
            data-aos="fade-left"
            href="/Lessons"
            className="border text-gray-50  duration-300 relative group cursor-pointer   overflow-hidden h-16 w-48 rounded-md bg-neutral-800 p-2  font-extrabold hover:bg-sky-700"
          >
            <div className="absolute group-hover:-top-1 group-hover:-right-2 z-10 w-16 h-16 rounded-full group-hover:scale-150  duration-700 right-12 top-12 bg-yellow-500"></div>
            <div className="absolute group-hover:-top-1 group-hover:-right-2 z-10 w-12 h-12 rounded-full group-hover:scale-150  duration-700 right-20 -top-6 bg-orange-500"></div>
            <div className="absolute group-hover:-top-1 group-hover:-right-2 z-10 w-8 h-8   rounded-full group-hover:scale-150  duration-700 right-32 top-6 bg-pink-500"></div>
            <div className="absolute group-hover:-top-1 group-hover:-right-2 z-10 w-4 h-4   rounded-full group-hover:scale-150  duration-700 right-2 top-12 bg-red-600"></div>
            <p className="z-10 absolute bottom-2 left-2">Показать еще</p>
          </Link>
        </div>
      </div>
      <div
        data-aos="fade-up"
        data-aos-delay="500"
        className="flex place-content-center my-20"
      >
        <Image
          src={logo}
          alt="Logo"
          className="px-10"
          width={1200}
          height={1200}
        />
      </div>
    </div>
  );
}
