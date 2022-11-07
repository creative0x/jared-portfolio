import React from "react";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

export default function MovieTitle() {
  return (
    <div
      initial={{ x: -100 }}
      whileInView={{
        x: 0,
        transition: {
          ease: "easeInOut",
          duration: 1,
        },
      }}
      viewport={{ once: true }}
      className="max-w-[1170px] mx-auto mt-[140px]  md:mt-[250px] md:-space-y-4  "
    >
      <div className="pl-10 flex items-center space-x-4 md:space-x-10">
        <h2 className=" space-x-10 text-6xl md:text-[160px] tracking-tighter font-extrabold">
          IOU ONE
        </h2>
        <BsFillArrowRightCircleFill className="z-10 text-5xl  md:text-[5rem] cursor-pointer transition duration-200 ease-in hover:scale-125" />
      </div>
      <h3 className="pl-12 text-lg md:text-4xl text-green-400   ">
        Directed/Produced/Edited: Jared Carver
      </h3>
    </div>
  );
}
