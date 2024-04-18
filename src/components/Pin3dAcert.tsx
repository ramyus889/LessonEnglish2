"use client";
import React from "react";
import { PinContainer } from "./ui/3d-pin";
import Image from "next/image";
import imgFront from "/public/frontend.jpg";

export default function AnimatedPinDemo() {
  return (
    <div className="h-[40rem] w-full px-5 flex items-center justify-center ">
      <PinContainer title="/ui.aceternity.com" href="/Lessons">
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
            Frontend Ui
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-slate-500 ">
              Customizable Tailwind CSS and Framer Motion Components.
            </span>
          </div>
          <Image
            src={imgFront}
            alt="pin"
            className=" pb-5 px-5"
            style={{ width: "auto", height: "auto" }}
          />
        </div>
      </PinContainer>
    </div>
  );
}
