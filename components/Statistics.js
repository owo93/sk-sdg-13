import React from "react";
import Image from "next/image";

export default function Statistics({ text, title, body, imageSrc }) {
  return (
    <div className="relative w-full items-center">
      <div className="inline-flex h-96 w-full flex-col items-start justify-center p-24">
        <div className="text-3xl font-light text-white text-opacity-80">
          {text}
        </div>
        <div className="text-6xl font-bold text-orange-500">{title}</div>
        <div>
          <span className="text-3xl font-light leading-10 text-white text-opacity-80">
            {body}
          </span>
        </div>
      </div>
      <Image
        className="-z-20"
        src={imageSrc}
        layout="fill"
      />
    </div>
  );
}
