"use client";

import Head from "./userComponents/Head";
import Card from "./userComponents/Card";
import BigCard from "./userComponents/BigCard";
import ThreeCard from "./userComponents/ThreeCard";
import Footer from "./userComponents/Footer";

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
