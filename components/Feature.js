import React from "react";
import { motion as m } from "framer-motion";

export default function Feature() {
  return (
    <div
      initial={{ x: -200 }}
      whileInView={{
        x: 0,
        transition: {
          ease: "easeInOut",
          duration: 1,
        },
      }}
      viewport={{ once: true }}
      className=" max-w-[1170px] mx-auto flex flex-col  h-full  "
    >
      <video
        src={"/p2.mp4"}
        autoPlay
        muted
        loop
        className="absolute left-0 right-0 object-cover w-full md:w-[1170px] md:h-[450px] -z-10   mx-auto"
      />

      <h3 className="pt-5 md:pt-10 pl-10 md:pl-20 text-lg md:text-2xl font-medium tracking-wide z-20 ">
        Featured Project
      </h3>
    </div>
  );
}
