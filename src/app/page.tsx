"use client";

import Link from "next/link";

export default function Home() {
  return (
    <div className="">
      <div className="text-[20px] flex place-content-left ms-20 mt-20">
        <Link href="/Lesson">Lesson →</Link>
      </div>
    </div>
  );
}
