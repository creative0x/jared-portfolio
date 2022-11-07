import React, { useState } from "react";
import { HiMenuAlt4 } from "react-icons/hi";
import Quote from "./Quote";
import Image from "next/image";
import Link from "next/link";
import BackgroundVideo from "./Background";
import Title from "./Title";
import { AiOutlineClose } from "react-icons/ai";
import {
  RiInstagramFill,
  RiFacebookFill,
  RiLinkedinFill,
} from "react-icons/ri";
import Feature from "../components/Feature";
import MovieTitle from "../components/MovieTitle";
import { motion as m } from "framer-motion";

export default function Portfolio({ displayPortfolio, setDisplayPortfolio }) {
  const [vidProject1, setVidProject1] = useState(false);
  const [vidProject2, setVidProject2] = useState(false);
  const [vidProject3, setVidProject3] = useState(false);
  const [vidProject4, setVidProject4] = useState(false);

  const [viewTag, setViewTag] = useState(false);

  const handleMenuClick = () => {
    setDisplayPortfolio(!displayPortfolio);
  };

  const container = {
    show: {
      transition: {},
    },
  };

  const navMotion = {
    hidden: {
      opacity: 1,
      y: -1000,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        ease: "easeInOut",
        duration: 1,
        delay: 0.5,
      },
    },
  };

  return (
    <div>
      <div
        className={
          displayPortfolio
            ? `fixed left-0 top-0  h-screen w-full z-20 bg-black flex items-center   ease-in-out duration-1000 `
            : `fixed left-[-100%] top-0  h-screen w-full z-20 bg-black flex items-center   ease-in-out duration-1000 `
        }
      >
        {vidProject1 ? (
          <div className="absolute top-0 right-0 w-[60%] h-screen z-20 bg-black ease-in-out duration-700">
            <video
              src={"/p1.mp4"}
              autoPlay
              muted
              loop
              className="h-screen w-screen object-cover"
            />
          </div>
        ) : (
          <div className="absolute top-0 right-[-200%] w-[60%] h-screen z-20 bg-black ease-in-out duration-700">
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
          <div className="absolute top-0 right-0 w-[60%] h-screen z-20 bg-black ease-in-out duration-700">
            <video
              src={"/p2.mp4"}
              autoPlay
              muted
              loop
              className="h-screen w-screen object-cover"
            />
          </div>
        ) : (
          <div className="absolute top-0 right-[-200%] w-[60%] h-screen z-20 bg-black ease-in-out duration-700">
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
          <div className="absolute top-0 right-0 w-[60%] h-screen z-20 bg-black ease-in-out duration-700">
            <Image src="/truth.jpg" alt="" layout="fill" objectFit="contain" />
          </div>
        ) : (
          <div className="absolute top-0 right-[-200%] w-[60%] h-screen z-20 bg-black ease-in-out duration-700">
            <Image src="/truth.jpg" alt="" layout="fill" objectFit="contain" />
          </div>
        )}
        {vidProject4 ? (
          <div className="absolute top-0 right-0 w-[60%] h-screen z-20 bg-black ease-in-out duration-700">
            <video
              src={"/p4.mp4"}
              autoPlay
              muted
              loop
              className="h-screen w-screen object-cover"
            />
          </div>
        ) : (
          <div className="absolute top-0 right-[-200%] w-[60%] h-screen z-20 bg-black ease-in-out duration-700">
            <video
              src={"/p4.mp4"}
              autoPlay
              muted
              loop
              className="h-screen w-screen object-cover"
            />
          </div>
        )}

        <div className=" absolute top-0 justify-between w-full flex items-center px-10 md:px-40 py-10">
          <h2 className="text-3xl uppercase font-semibold font-bowlby tracking-tighter">
            Projects
          </h2>
          <AiOutlineClose
            className="text-5xl cursor-pointer transition duration-200 ease-in-out hover:scale-125 rounded-full hover:border-2"
            onClick={handleMenuClick}
          />
        </div>
        <div className="md:ml-[10rem] w-[400px] md:w-[600px] space-y-12 flex flex-col text-center md:text-left ">
          <Link href="https://www.youtube.com/watch?v=E8MvAshC8-M">
            <a target="_blank">
              <div className="transition ease-in duration-200 hover:text-green-400 hover:scale-105">
                <h3
                  onMouseEnter={() => setVidProject1(true)}
                  onMouseLeave={() => setVidProject1(false)}
                  className="cursor-pointer text-3xl md:text-4xl font-extrabold font-bowlby "
                >
                  AMERICAN DIVERSITY
                </h3>
                <p className="text-xl">Director // Writer // Editor</p>
              </div>
            </a>
          </Link>

          <Link href="https://www.youtube.com/watch?v=CaiDQ4CYDv8&t=2s">
            <a target="_blank">
              <div className="transition ease-in duration-200 hover:text-green-400 hover:scale-105">
                <h3
                  onMouseEnter={() => setVidProject2(true)}
                  onMouseLeave={() => setVidProject2(false)}
                  className="cursor-pointer text-3xl md:text-4xl font-extrabold font-bowlby transition ease-in duration-200 hover:text-green-400 hover:scale-105"
                >
                  I.O.U. 1 SHORT FILM
                </h3>
                <p className="text-xl">Director // Writer // Editor</p>
              </div>
            </a>
          </Link>
          <Link href="https://thetruthnarrative.com/">
            <a target="_blank">
              <div className="transition ease-in duration-200 hover:text-green-400 hover:scale-105">
                <h3
                  onMouseEnter={() => setVidProject3(true)}
                  onMouseLeave={() => setVidProject3(false)}
                  className="cursor-pointer text-3xl md:text-4xl font-extrabold font-bowlby transition ease-in duration-200 text-green-400] hover:scale-105"
                >
                  TRUTH NARRATIVE COMMIC
                </h3>
                <p className="text-xl">Writer</p>
              </div>
            </a>
          </Link>
          <Link href="https://www.youtube.com/watch?v=dDm8Du4FzTs">
            <a target="_blank">
              <div className=" transition ease-in duration-200 hover:text-green-400 hover:scale-105">
                <h3
                  onMouseEnter={() => setVidProject4(true)}
                  onMouseLeave={() => setVidProject4(false)}
                  className="cursor-pointer text-3xl  md:text-4xl font-extrabold font-bowlby transition ease-in duration-200 hover:text-green-400 hover:scale-105"
                >
                  ONE SOURCE CREDIT UNION AD
                </h3>
                <p className="text-xl">Actor</p>
              </div>
            </a>
          </Link>
        </div>
        <div className=" absolute bottom-0 justify-around w-full flex flex-col md:flex-row space-y-2 items-center px-20 py-20">
          <h2 className="text-2xl md:text-3xl   font-semibold font-bowlby tracking-tighter transition duration-100 ease-in hover:scale-110 cursor-pointer hover:text-green-400">
            <a href="mailto: jaredcarver@email.com?subject=Website Inquery">
              jaredcarver@email.com
            </a>
          </h2>
          <div className="flex items-center text-4xl space-x-1">
            <RiInstagramFill className="transition duration-100 ease-in hover:scale-125 cursor-pointer hover:text-green-400" />
            <RiFacebookFill className="transition duration-100 ease-in hover:scale-125 cursor-pointer hover:text-green-400" />
            <RiLinkedinFill className="transition duration-100 ease-in hover:scale-125 cursor-pointer hover:text-green-400" />
          </div>
        </div>
      </div>

      {/* Home page */}
      <m.div
        variants={container}
        initial="hidden"
        animate="show"
        exit="exit"
        className="absolute w-full flex items-center justify-between  px-10 md:px-40 py-10 z-10"
      >
        <m.div variants={navMotion}>
          <h3 className=" md:text-2xl">Screen Writer. Film Maker. Author.</h3>
        </m.div>
        <m.div variants={navMotion} className="flex items-center space-x-4">
          <h3 className={viewTag ? "flex text-xl  text-green-400" : "hidden"}>
            View Portfolio
          </h3>
          <HiMenuAlt4
            onClick={handleMenuClick}
            onMouseEnter={() => setViewTag(true)}
            onMouseLeave={() => setViewTag(false)}
            className={`text-4xl md:text-6xl cursor-pointer transition duration-200 ease-in-out hover:scale-125 rounded-full hover:border-2 `}
          />
        </m.div>
      </m.div>
      <BackgroundVideo />
      <Title />
      <Quote />
      <Feature />
      <MovieTitle />
      <m.div
        initial={{ opacity: 0 }}
        whileInView={{
          opacity: 1,
          transition: {
            duration: 1,
          },
        }}
        viewport={{ once: true }}
        className="max-w-[1170px]  mx-auto flex items-center justify-center md:justify-end my-40 md:my-40"
      >
        <button
          onClick={handleMenuClick}
          className="bg-green-500 text-2xl px-10 py-4 tracking-wide font-semibold transition duration-200 ease-in-out hover:scale-110"
        >
          ALL PROJECTS
        </button>
      </m.div>
    </div>
  );
}
