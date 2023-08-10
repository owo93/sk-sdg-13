import Image from "next/image";
import React from "react";
import StatBackground1 from "/public/images/StatBG.png";
import StatBackground2 from "/public/images/StatBG2.png";
import StatBackground3 from "/public/images/StatBG3.png";
const imageSrc = [StatBackground1, StatBackground2, StatBackground3];

export default function Statistics({
  text,
  title,
  body,
  imageIndex,
  alignRight,
}) {
  const containerClass = alignRight ? "items-end text-right" : "items-start";

  return (
    <div className="relative w-full">
      <div
        className={`inline-flex h-96 w-full flex-col justify-center p-24 text-neutral-300 ${containerClass}`}>
        <div className="text-3xl font-light text-opacity-80">{text}</div>
        <div className="text-5xl font-bold text-orange-500">{title}</div>
        <div>
          <span className="leading-1 text-3xl font-light text-opacity-80">
            {body}
          </span>
        </div>
      </div>
      <Image
        className="-z-20"
        alt={title}
        src={imageSrc[imageIndex]}
        layout="fill"
        objectFit="cover"
      />
    </div>
  );
}
