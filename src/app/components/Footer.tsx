"use client";

import Link from "next/link";

export default function Home() {
  return (
    <footer className="border-t-2 mt-20 border-slate-500">
      <div className="mx-[600px] flex justify-between">
        <div className="ms-10 my-7">© 2024 Frontend Lessons Inc.</div>
        <Link href="/Lessons" className="me-10 my-7">
          Lessons
        </Link>
      </div>
    </footer>
  );
}
