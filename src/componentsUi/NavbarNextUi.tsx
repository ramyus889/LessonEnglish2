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
        <div className="max-[640px]:flex  max-[640px]:gap-5 max-[640px]:mt-10 max-[640px]:items-center">
          <div className="flex">
            <AcmeLogo />
            <Link className="pe-5" href="/">
              Frontend
            </Link>
          </div>
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
