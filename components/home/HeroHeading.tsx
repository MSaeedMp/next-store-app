"use client";
import { motion } from "framer-motion";

const HeroHeading = () => {
  return (
    <motion.h1
      initial={{ y: "-10vh", opacity: 0 }} 
      animate={{ y: 0, opacity: 1 }} 
      transition={{ duration: 1.2, ease: "easeOut" }} 
      className="absolute xl:left-[100px] sm:left-[50px] left-[20px] md:left[70px] text-stone-100 xl:top-[510px] top-[320px] md:top-[380px] lg:top-[525px] text-6xl sm:text-7xl sm:top-[470px] md:text-8xl font-bold tracking-tight"
      style={{ textShadow: "0 0 8px rgba(0, 0, 0, 1)" }}
    >
      <span className="relative">Design</span>
      <br />
      <span className="relative">Your Space</span>
      <br />
      <span className="relative">with our</span>
      <br />
      <span
        className="relative text-[5rem] sm:text-[9rem] md:text-[10rem] xl:text-[12rem] text-stone-200"
        style={{ textShadow: "0 0 8px rgba(0, 0, 0, 1)" }}
      >
        Products
      </span>
    </motion.h1>
  );
};
export default HeroHeading;
