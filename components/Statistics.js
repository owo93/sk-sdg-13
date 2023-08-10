import React from "react";
import Image from "next/image";

export default function Statistics({ text, title, body }) {
  return (
    <div>
      <div className="w-full h-96 p-24 flex-col justify-center items-start inline-flex">
        <div className="text-white text-opacity-80 text-3xl font-light">
          {text}
        </div>
        <div className="text-orange-500 text-6xl font-bold">{title}</div>
        <div>
          <span className="text-white text-opacity-80 text-3xl font-light leading-10">
            {body}
          </span>
        </div>
      </div>
      <Image
        src="/images/BG.jpeg"
        layout="fill"
        className="z-20 opacity-30"
      />
    </div>
  );
}
