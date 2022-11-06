import React, { useState } from "react";
import { HiMenuAlt4 } from "react-icons/hi";

export default function Nav() {
  const [viewPortfolio, setViewPortfolio] = useState(false);

  return (
    <div className="absolute w-full flex items-center justify-between px-40 py-10 z-10">
      <div>
        <h3 className=" text-2xl">Screen Writer. Film Maker. Author.</h3>
      </div>
      <div className="flex items-center space-x-4">
        <h3 className={viewPortfolio ? "flex text-xl " : "hidden"}>
          View Portfolio
        </h3>
        <HiMenuAlt4
          onMouseEnter={() => setViewPortfolio(true)}
          onMouseLeave={() => setViewPortfolio(false)}
          className={`text-6xl cursor-pointer transition duration-200 ease-in-out hover:scale-125 rounded-full hover:border-2`}
        />
      </div>
    </div>
  );
}
