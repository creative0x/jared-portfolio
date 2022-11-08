import React from "react";
import { motion as m } from "framer-motion";

export default function Title() {
  const container = {
    show: {
      transition: {},
    },
  };

  const Carver = {
    hidden: {
      opacity: 1,
      y: 1000,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        ease: "easeInOut",
        duration: 1,
      },
    },
  };

  return (
    <m.div
      variants={container}
      initial="hidden"
      animate="show"
      exit="exit"
      className="flex text-center md:text-left  absolute md:bottom-0 bottom-60 left-8  flex-col font-bowlby font-[800] text-[100px] lg:text-[250px]   -space-y-16 md:-space-y-48 md:-mb-20 tracking-tighter"
    >
      <m.h1 variants={Carver}>Jared</m.h1>
      <m.h1 variants={Carver} className="text-green-400">
        Carver
      </m.h1>
    </m.div>
  );
}
