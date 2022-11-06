import React from "react";
import {
  RiInstagramFill,
  RiFacebookFill,
  RiLinkedinFill,
} from "react-icons/ri";

export default function Contact() {
  return (
    <div className="flex w-full justify-around font-bowlby text-2xl text-[#00b100] my-20">
      <div className="font-medium">
        <p>+19150000000</p>
        <p>JAREDCARVER@EMAIL.COM</p>
      </div>

      <div className="flex items-center text-4xl space-x-1">
        <RiInstagramFill className="transition duration-100 ease-in hover:scale-125 cursor-pointer" />
        <RiFacebookFill className="transition duration-100 ease-in hover:scale-125 cursor-pointer" />
        <RiLinkedinFill className="transition duration-100 ease-in hover:scale-125 cursor-pointer" />
      </div>
    </div>
  );
}
