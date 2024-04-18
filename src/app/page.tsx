"use client";

import Head from "./components/Head";
import Card from "./components/Card";
import BigCard from "./components/BigCard";
import ThreeCard from "./components/ThreeCard";
import Footer from "./components/Footer";
import Pin3dAcert from "./../components/Pin3dAcert";

export default function Home() {
  return (
    <div className="">
      <Head />
      <Card />
      <Pin3dAcert />
      <BigCard />
      <ThreeCard />
      <Footer />
    </div>
  );
}
