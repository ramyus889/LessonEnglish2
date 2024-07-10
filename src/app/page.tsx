"use client";

import BigCard from "./userComponents/BigCard";
import Card from "./userComponents/Card";
import Footer from "./userComponents/Footer";
import Head from "./userComponents/Head";
import ThreeCard from "./userComponents/ThreeCard";

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
