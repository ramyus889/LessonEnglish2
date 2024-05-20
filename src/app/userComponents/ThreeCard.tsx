"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 700,
    });
  }, []);
  const card = [
    {
      id: 1,
      title: "Бесплатно",
      price: "$0",
      blur: "Размытие -",
      category: "Предоставляет доступ к уровням, начиная с A0 до A1.",
    },
    {
      id: 2,
      title: "Стандартный",
      price: "$19",
      blur: "Размытие +",
      category: "Предоставляет доступ к уровням, начиная с A0 до B1.",
    },
    {
      id: 3,
      title: "Премиум",
      price: "$29",
      blur: "Размытие +",
      category: "Предоставляет доступ к уровням, начиная с A0 до C1.",
    },
  ];
  return (
    <div className="flex place-content-center gap-10 mt-[300px] px-5 mb-[200px]">
      <div className="flex max-[1150px]:flex-col gap-10">
        {card.map((card) => (
          <div
            data-aos="fade-up"
            key={card.id}
            className="flex flex-col dark:bg-[#1a1c21] bg-[#e3e3e5] shadow-md rounded-3xl"
          >
            <div className="px-6 py-8 sm:p-10 sm:pb-6">
              <div className="grid items-center justify-center w-full grid-cols-1 text-left">
                <div>
                  <h2 className="text-lg font-medium tracking-tighter  lg:text-3xl">
                    {card.title}
                  </h2>
                  <p className="mt-2 text-sm text-gray-500">
                    Подходит для стабильного роста.
                  </p>
                </div>
                <div className="text-[20px] *:py-2 my-5">
                  <div className="">{card.blur}</div>
                  <div className="">{card.category}</div>
                </div>
                <div className="mt-6 ">
                  <p>
                    <span className="text-5xl font-light tracking-tight ">
                      {card.price}
                    </span>
                    <span className="text-base font-medium "> /месяц </span>
                  </p>
                </div>
              </div>
            </div>
            <div className="flex px-6 pb-8 sm:px-8">
              <Link
                aria-describedby="tier-company"
                className="flex items-center justify-center w-full px-6 py-2.5 text-center text-white duration-200 bg-black border-2 border-black rounded-full nline-flex hover:bg-transparent hover:border-black hover:text-white focus:outline-none focus-visible:outline-black text-sm focus-visible:ring-black"
                href="#"
              >
                Начать
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
