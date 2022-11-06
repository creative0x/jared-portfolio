import React from "react";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
export default function MovieTitle() {
  return (
    <div className="max-w-[1170px] mx-auto   mt-[200px] -space-y-12  ">
      <div className="pl-10 flex items-center space-x-10">
        <h2 className=" space-x-10 text-[160px] tracking-tighter font-extrabold">
          IOU ONE
        </h2>
        <BsFillArrowRightCircleFill className="z-10  text-[5rem] cursor-pointer transition duration-200 ease-in hover:scale-125" />
      </div>
      <h3 className="pl-12 text-4xl    ">
        Directed/Produced/Edited: Jared Carver
      </h3>
    </div>
  );
}
