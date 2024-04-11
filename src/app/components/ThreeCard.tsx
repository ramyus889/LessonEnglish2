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
      title: "Free",
      price: "$0",
      blur: "Blur -",
      category: "Gives access to levels starting from A0 to A1",
    },
    {
      id: 2,
      title: "Stantard",
      price: "$19",
      blur: "Blur +",
      category: "Gives access to levels starting from A0 to B1",
    },
    {
      id: 3,
      title: "Enterprise",
      price: "$29",
      blur: "Blur +",
      category: "Gives access to levels starting from A0 to C1",
    },
  ];
  return (
    <div className="flex place-content-center gap-10 mt-[300px]">
      <div className=""></div>
      {card.map((card) => (
        <div
          data-aos="fade-up"
          key={card.id}
          className="flex flex-col bg-[#1a1c21] rounded-3xl"
        >
          <div className="px-6 py-8 sm:p-10 sm:pb-6">
            <div className="grid items-center justify-center w-full grid-cols-1 text-left">
              <div>
                <h2 className="text-lg font-medium tracking-tighter  lg:text-3xl">
                  {card.title}
                </h2>
                <p className="mt-2 text-sm text-gray-500">
                  Suitable to grow steadily.
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
                  <span className="text-base font-medium "> /mo </span>
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
              Get started
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
