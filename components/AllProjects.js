import React, { useState } from "react";

export default function AllProjects() {
  const [displayPortfolio, setDisplayPortfolio] = useState(false);
  const handleMenuClick = () => {
    setDisplayPortfolio(!displayPortfolio);
  };
  return (
    <div className="max-w-[1170px]  mx-auto flex items-center justify-end my-20">
      <button
        onClick={handleMenuClick}
        className="bg-[#098209] px-10 py-4 tracking-widest font-semibold transition duration-200 ease-in-out hover:scale-110"
      >
        ALL PROJECTS
      </button>
    </div>
  );
}
