import Image from "next/image";
import React from "react";

export default function SDG({ color, question, title, imageSrc, details }) {
  return (
    <div
      className={`w-full bg-${color}`}
      id="init">
      <div className="mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20">
        <div
          className={`grid w-full items-center gap-4 bg-lime-950 py-8 text-white sm:gap-8 md:grid-cols-2`}>
          <div className="mx-auto w-[600px] overflow-hidden rounded-2xl">
            <Image
              className="h-full w-full object-cover"
              alt={title}
              src={imageSrc}
            />
          </div>
          <div className="flex flex-col justify-center text-left">
            <p className="font-bold text-white">{question}</p>
            <h1 className="py-2 text-4xl font-bold sm:text-3xl md:text-4xl">
              {title}
            </h1>
            <p className="text-2xl text-white/60">{details}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
