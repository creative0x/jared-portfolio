import React from "react";
import {
  RiInstagramFill,
  RiFacebookFill,
  RiLinkedinFill,
} from "react-icons/ri";
import { motion as m } from "framer-motion";

export default function Contact() {
  return (
    <div className="  flex space-y-10 items-center  flex-col md:flex-row w-full justify-around font-bowlby text-2xl  my-20">
      <div
        initial={{ x: -1000 }}
        whileInView={{
          x: 0,
          transition: {
            ease: "easeInOut",
            duration: 1,
          },
        }}
        viewport={{ once: true }}
        className="font-medium"
      >
        <p className=" text-2xl tracking-widest font-light font-bowlby text-green-400 ">
          Lets collaborate?
        </p>
        <p className="transition duration-100 ease-in hover:scale-110 cursor-pointer">
          jaredcarver@gmail.com
        </p>
      </div>

      <div
        initial={{ x: 1000 }}
        whileInView={{
          x: 0,
          transition: {
            ease: "easeInOut",
            duration: 1,
          },
        }}
        viewport={{ once: true }}
        className="flex items-center text-4xl space-x-1"
      >
        <RiInstagramFill className="transition duration-100 ease-in hover:scale-125 cursor-pointer" />
        <RiFacebookFill className="transition duration-100 ease-in hover:scale-125 cursor-pointer" />
        <RiLinkedinFill className="transition duration-100 ease-in hover:scale-125 cursor-pointer" />
      </div>
    </div>
  );
}
