import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function SDG({ color, question, title, imageSrc, details }) {
  return (
    <div
      className={`w-full bg-${color}`}
      id="init">
      <div className="mx-auto px-4 text-neutral-200 sm:px-8 md:px-12 lg:px-16 xl:px-20">
        <div
          className={`grid w-full gap-4 bg-lime-950 py-8 sm:gap-8 md:grid-cols-2`}>
          <div className="mx-auto h-auto w-full max-w-fit rounded-2xl sm:order-first md:order-first md:overflow-hidden">
            {/* Set max-width to 100% and height to auto for responsiveness */}
            <div className="relative max-h-[400px]">
              <Image
                className="h-auto w-full object-cover"
                alt={title}
                src={imageSrc}
              />
            </div>
          </div>
          <div className="flex flex-col justify-center text-left md:order-last">
            <p className="font-semibold">{question}</p>
            <h1 className="py-2 text-4xl font-bold">{title}</h1>
            <p className="text-xl text-neutral-400">{details}</p>
            <Link
              target="_blank"
              href="https://sdgs.un.org/goals/goal13"
              className="mt-4 inline-block w-fit rounded-lg bg-blue-700 px-4 py-2 text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300">
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
