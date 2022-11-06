import React, { useState } from "react";
import { HiMenuAlt4 } from "react-icons/hi";
import Quote from "./Quote";
import Image from "next/image";
import Nav from "./Nav";
import BackgroundVideo from "./Background";
import Title from "./Title";
import { AiOutlineClose } from "react-icons/ai";
import {
  RiInstagramFill,
  RiFacebookFill,
  RiLinkedinFill,
} from "react-icons/ri";

export default function Portfolio() {
  const [vidProject1, setVidProject1] = useState(false);
  const [vidProject2, setVidProject2] = useState(false);
  const [vidProject3, setVidProject3] = useState(false);
  const [vidProject4, setVidProject4] = useState(false);

  const [viewTag, setViewTag] = useState(false);
  const [displayPortfolio, setDisplayPortfolio] = useState(false);
  const handleMenuClick = () => {
    setDisplayPortfolio(!displayPortfolio);
  };

  return (
    <div>
      <div
        className={
          displayPortfolio
            ? `absolute left-0 top-0  h-screen w-full z-20 bg-black flex items-center   ease-in-out duration-1000 `
            : `absolute left-[-100%] top-0  h-screen w-full z-20 bg-black flex items-center   ease-in-out duration-1000 `
        }
      >
        {vidProject1 ? (
          <div className="absolute top-0 right-0 w-[60%] h-screen z-20 bg-black ease-in-out duration-500">
            <video
              src={"/p1.mp4"}
              autoPlay
              muted
              loop
              className="h-screen w-screen object-cover"
            />
          </div>
        ) : (
          <div className="absolute top-0 right-[-200%] w-[60%] h-screen z-20 bg-black ease-in-out duration-500">
            <video
              src={"/p1.mp4"}
              autoPlay
              muted
              loop
              className="h-screen w-screen object-cover"
            />
          </div>
        )}
        {vidProject2 ? (
          <div className="absolute top-0 right-0 w-[60%] h-screen z-20 bg-black ease-in-out duration-500">
            <video
              src={"/p2.mp4"}
              autoPlay
              muted
              loop
              className="h-screen w-screen object-cover"
            />
          </div>
        ) : (
          <div className="absolute top-0 right-[-200%] w-[60%] h-screen z-20 bg-black ease-in-out duration-500">
            <video
              src={"/p2.mp4"}
              autoPlay
              muted
              loop
              className="h-screen w-screen object-cover"
            />
          </div>
        )}
        {vidProject3 ? (
          <div className="absolute top-0 right-0 w-[60%] h-screen z-20 bg-black ease-in-out duration-500">
            <Image src="/truth.jpg" alt="" layout="fill" objectFit="contain" />
          </div>
        ) : (
          <div className="absolute top-0 right-[-200%] w-[60%] h-screen z-20 bg-black ease-in-out duration-500">
            <Image src="/truth.jpg" alt="" layout="fill" objectFit="contain" />
          </div>
        )}
        {vidProject4 ? (
          <div className="absolute top-0 right-0 w-[60%] h-screen z-20 bg-black ease-in-out duration-500">
            <video
              src={"/p4.mp4"}
              autoPlay
              muted
              loop
              className="h-screen w-screen object-cover"
            />
          </div>
        ) : (
          <div className="absolute top-0 right-[-200%] w-[60%] h-screen z-20 bg-black ease-in-out duration-500">
            <video
              src={"/p4.mp4"}
              autoPlay
              muted
              loop
              className="h-screen w-screen object-cover"
            />
          </div>
        )}

        <div className=" absolute top-0 justify-between w-full flex items-center px-40 py-10">
          <h2 className="text-3xl uppercase font-semibold font-bowlby tracking-tighter">
            Projects
          </h2>
          <AiOutlineClose
            className="text-5xl cursor-pointer transition duration-200 ease-in-out hover:scale-125 rounded-full hover:border-2"
            onClick={handleMenuClick}
          />
        </div>
        <div className="ml-[10rem]  w-[600px] space-y-12">
          <div className="transition ease-in duration-200 hover:text-[#00bd00] hover:scale-105">
            <h3
              onMouseEnter={() => setVidProject1(true)}
              onMouseLeave={() => setVidProject1(false)}
              className="cursor-pointer text-4xl font-extrabold font-bowlby "
            >
              AMERICAN DIVERSITY
            </h3>
            <p className="text-xl">Director // Writer // Editor</p>
          </div>
          <div className="transition ease-in duration-200 hover:text-[#00bd00] hover:scale-105">
            <h3
              onMouseEnter={() => setVidProject2(true)}
              onMouseLeave={() => setVidProject2(false)}
              className="cursor-pointer text-4xl font-extrabold font-bowlby transition ease-in duration-200 hover:text-[#00bd00] hover:scale-105"
            >
              I.O.U. 1 SHORT FILM
            </h3>
            <p className="text-xl">Director // Writer // Editor</p>
          </div>

          <div className="transition ease-in duration-200 hover:text-[#00bd00] hover:scale-105">
            <h3
              onMouseEnter={() => setVidProject3(true)}
              onMouseLeave={() => setVidProject3(false)}
              className="cursor-pointer text-4xl font-extrabold font-bowlby transition ease-in duration-200 hover:text-[#00bd00] hover:scale-105"
            >
              TRUTH NARRATIVE COMMIC
            </h3>
            <p className="text-xl">Writer</p>
          </div>
          <div className="transition ease-in duration-200 hover:text-[#00bd00] hover:scale-105">
            <h3
              onMouseEnter={() => setVidProject4(true)}
              onMouseLeave={() => setVidProject4(false)}
              className="cursor-pointer text-4xl font-extrabold font-bowlby transition ease-in duration-200 hover:text-[#00bd00] hover:scale-105"
            >
              ONE SOURCE CREDIT UNION AD
            </h3>
            <p className="text-xl">Actor</p>
          </div>
        </div>
        <div className=" absolute bottom-0 justify-around w-full flex items-center px-20 py-20">
          <h2 className="text-3xl  font-semibold font-bowlby tracking-tighter">
            jaredcarver@email.com
          </h2>
          <div className="flex items-center text-4xl space-x-1">
            <RiInstagramFill className="transition duration-100 ease-in hover:scale-125 cursor-pointer hover:text-[#00bd00]" />
            <RiFacebookFill className="transition duration-100 ease-in hover:scale-125 cursor-pointer hover:text-[#00bd00]" />
            <RiLinkedinFill className="transition duration-100 ease-in hover:scale-125 cursor-pointer hover:text-[#00bd00]" />
          </div>
        </div>
      </div>

      <div className="absolute w-full flex items-center justify-between px-40 py-10 z-10">
        <div>
          <h3 className=" text-2xl">Screen Writer. Film Maker. Author.</h3>
        </div>
        <div className="flex items-center space-x-4">
          <h3 className={viewTag ? "flex text-xl " : "hidden"}>
            View Portfolio
          </h3>
          <HiMenuAlt4
            onClick={handleMenuClick}
            onMouseEnter={() => setViewTag(true)}
            onMouseLeave={() => setViewTag(false)}
            className={`text-6xl cursor-pointer transition duration-200 ease-in-out hover:scale-125 rounded-full hover:border-2`}
          />
        </div>
      </div>
      <BackgroundVideo />
      <Title />
      <Quote />
    </div>
  );
}
