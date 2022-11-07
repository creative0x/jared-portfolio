import React, { useState } from "react";
import { HiMenuAlt4 } from "react-icons/hi";

export default function Footer({ displayPortfolio, setDisplayPortfolio }) {
  const [viewPortfolio, setViewPortfolio] = useState(false);
  const handleMenuClick = () => {
    setDisplayPortfolio(!displayPortfolio);
  };

  return (
    <div
      viewport={{ once: true }}
      className="hidden absolute w-full md:flex items-center justify-between px-40 py-10 z-10"
    >
      <div
        initial={{ y: 200 }}
        whileInView={{
          y: 0,
          transition: {
            ease: "easeInOut",
            duration: 1,
          },
        }}
      >
        <h3 className=" text-2xl">Screen Writer. Film Maker. Author.</h3>
      </div>
      <div className="flex items-center space-x-4">
        <h3 className={viewPortfolio ? "flex text-xl " : "hidden"}>
          View Portfolio
        </h3>
        <HiMenuAlt4
          onClick={handleMenuClick}
          onMouseEnter={() => setViewPortfolio(true)}
          onMouseLeave={() => setViewPortfolio(false)}
          className={`text-6xl cursor-pointer transition duration-200 ease-in-out hover:scale-125 rounded-full hover:border-2`}
        />
      </div>
    </div>
  );
}
