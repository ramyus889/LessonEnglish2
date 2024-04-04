"use client";
import { motion } from "framer-motion";
export default function Home() {
  return (
    <div className=" ms-[400px] flex flex-col">
      <motion.div
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 1.1 }}
        drag
        dragConstraints={{ left: -100, right: 100, top: 100, bottom: 100 }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="bg-red-500 my-[500px] size-[100px] px-5 py-5 rounded-xl"
      ></motion.div>

      <motion.div
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 1.1 }}
        drag
        dragConstraints={{ left: -100, right: 100, top: 100, bottom: 100 }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="bg-red-500 my-[500px] size-[100px] px-5 py-5 rounded-xl"
      ></motion.div>

      <motion.div
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 1.1 }}
        drag
        dragConstraints={{ left: -100, right: 100, top: 100, bottom: 100 }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="bg-red-500 my-[500px] size-[100px] px-5 py-5 rounded-xl"
      ></motion.div>

      <motion.div
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 1.1 }}
        drag
        dragConstraints={{ left: -100, right: 100, top: 100, bottom: 100 }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="bg-red-500 my-[500px] size-[100px] px-5 py-5 rounded-xl"
      ></motion.div>
    </div>
  );
}
