import React from "react";
import ReactPlayer from "react-player";

export default function Background() {
  return (
    <div className="relative w-screen h-screen flex items-center justify-center">
      <div
        dangerouslySetInnerHTML={{
          __html: `
        <video
          loop
          muted
          autoplay
          playsinline
          src="/p1.mp4"
          class="h-screen w-screen object-cover"
        />,
      `,
        }}
      ></div>

      <div className="h-screen w-screen bg-black/50 absolute"></div>
    </div>
  );
}
