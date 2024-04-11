"use client";

import Head from "./components/Head";
import Card from "./components/Card";
import BigCard from "./components/BigCard";
import ThreeCard from "./components/ThreeCard";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="">
      <Head />
      <Card />
      <BigCard />
      <ThreeCard />
      <Footer />
    </div>
  );
}
