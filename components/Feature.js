import React from "react";

export default function Feature() {
  return (
    <div className=" max-w-[1170px] mx-auto flex flex-col  h-full  ">
      <video
        src={"/p2.mp4"}
        autoPlay
        muted
        loop
        className="absolute left-0 right-0 object-cover w-[1170px] h-[450px] -z-10   mx-auto"
      />

      <h3 className=" pt-10 pl-20 text-2xl font-medium tracking-wide z-20 ">
        Featured Project
      </h3>
    </div>
  );
}
