import React from "react";
import { motion as m } from "framer-motion";

export default function Skills() {
  return (
    <div className="px-10 max-w-[1200px] mx-auto flex flex-col items-center space-y-32 justify-around my-20 md:my-40 ">
      <div className="max-w-[800px] ">
        <p
          initial={{ x: -100 }}
          whileInView={{
            x: 0,
            transition: {
              ease: "easeInOut",
              duration: 1,
            },
          }}
          viewport={{ once: true }}
          className=" font-bowlby text-left text-2xl leading-[3rem]"
        >
          I am a freelance screenwriter, producer, and director. Lorem, ipsum
          dolor sit amet consectetur adipisicing elit. Quis quam necessitatibus
          aspernatur nam iusto, neque impedit perspiciatis vitae enim officiis
          eveniet quasi! Odio exercitationem fuga aut, perferendis voluptatibus
          iusto laudantium?
        </p>
      </div>
      <div className="space-y-10 md:space-y-4">
        <h4 className="text-center  font-extrabold text-5xl uppercase ">
          What I can do:
        </h4>
        <m.ul
          initial={{ x: 100, opacity: 0 }}
          whileInView={{
            x: 0,
            opacity: 1,
            transition: {
              ease: "easeInOut",
              duration: 1,
            },
          }}
          viewport={{ once: true }}
          className="text-green-400 font-medium flex flex-col md:flex-row items-center text-2xl md:text-3xl space-x-4   "
        >
          <li>Creative Development.</li>
          <li>Screen Writing.</li>
          <li>Storyboarding.</li>
          <li>Author.</li>
          <li>Director.</li>
        </m.ul>
      </div>
    </div>
  );
}
