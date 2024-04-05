"use client";

import { usePathname } from "next/navigation";
import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";
import { AcmeLogo } from "./AcmeLogo.jsx";

export default function App() {
  const pathname = usePathname();
  return (
    <Navbar shouldHideOnScroll>
      <NavbarBrand>
        <div className="max-[640px]:flex  max-[640px]:gap-5 max-[640px]:mt-20 max-[640px]:items-center">
        <div className="flex">
          <AcmeLogo />  
          <Link className="pe-5" href="/">
            Frontend
          </Link>
        </div>
          <Link
            className={`px-5 py-2 border-2 text-center my-5 flex border-slate-500 rounded-xl min-[640px]:hidden ${
              pathname === "/Lesson" ? "hidden" : ""
            }`}
            href="/Lesson"
          >
            Back
          </Link>
        </div>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link
            className={`  pe-5 ps-5 ${
              pathname === "/Lesson" ? "text-red-500 font-bold" : ""
            }`}
            href="/Lesson"
          >
            Lesson
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
