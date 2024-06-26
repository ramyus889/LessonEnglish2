"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ButtonLink from "./components/ButtonLink";
import ButtonBlur from "./components/ButtonBlur";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 700,
    });
  }, []);
  return (
    <div className="">
      <div className="inline-block">
        <ButtonLink />
      </div>
      <ButtonBlur />
    </div>
  );
}
