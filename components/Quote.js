import React from "react";
import { motion as m } from "framer-motion";
export default function Quote() {
  return (
    <div className="flex justify-center">
      <m.p
        initial={{ x: -400 }}
        whileInView={{
          x: 0,
          transition: {
            ease: "easeInOut",
            duration: 1,
          },
        }}
        viewport={{ once: true }}
        className=" font-light px-20 my-20 md:my-[15rem] w-[600px] md:w-[800px] text-2xl md:text-3xl tracking-wide leading-[3rem] md:leading-[4rem]  "
      >
        Great stories must be discovered. We delve deeply to uncover the
        fascinating tales that lie just beneath the surface. Even with dirt
        under our fingernails.
      </m.p>
    </div>
  );
}
