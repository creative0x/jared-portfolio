import React from "react";

export default function Skills() {
  return (
    <div className="max-w-[1200px] mx-auto flex justify-around my-20 ">
      <div className="max-w-[600px] ">
        <p className="text-2xl leading-10">
          I am a freelance screenwriter, producer, and director. Lorem, ipsum
          dolor sit amet consectetur adipisicing elit. Quis quam necessitatibus
          aspernatur nam iusto, neque impedit perspiciatis vitae enim officiis
          eveniet quasi! Odio exercitationem fuga aut, perferendis voluptatibus
          iusto laudantium?
        </p>
      </div>
      <div className="space-y-2">
        <h4 className="text-3xl font-semibold uppercase text-[#00b100]">
          What I can do:
        </h4>
        <ul className="text-xl space-y-2 ml-5 slider">
          <li>Creative Development</li>
          <li>Screen Writing</li>
          <li>Storyboarding</li>
          <li>Author</li>
          <li>Directing</li>
        </ul>
      </div>
    </div>
  );
}
