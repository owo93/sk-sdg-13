import Image from "next/image";
import React, { useEffect, useState } from "react";
import ReactTyped from "react-typed";
import background1 from "/public/images/BG.png";
import background2 from "/public/images/HeroBG2.png";
import background3 from "/public/images/HeroBG3.png";

const typedStrings = [
  "are increasing the emissions on Rama IX rd.",
  "are destroying the ecosystems in Chiang Mai",
  "need to start taking action... climate action",
];

const backgrounds = [background1, background2, background3]; // List of background images

export default function Hero() {
  const [currentBackgroundIndex, setCurrentBackgroundIndex] = useState(0);

  const isLastString = currentBackgroundIndex === backgrounds.length - 1;

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isLastString) {
        setCurrentBackgroundIndex(
          (prevIndex) => (prevIndex + 1) % backgrounds.length,
        );
      }
    }, 5000); // Change background every 5 seconds

    return () => clearInterval(interval);
  }, [isLastString]);

  return (
    <div className="relative -mt-20 h-screen">
      <div className="absolute inset-0">
        <Image
          src={backgrounds[currentBackgroundIndex]}
          alt="background"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="-z-20"
          priority
        />
        <div className="absolute inset-0 bg-black opacity-20 transition-opacity duration-1000"></div>
      </div>
      <div className="relative mx-auto flex h-full max-w-[800px] flex-col justify-center p-5 text-left">
        <h1 className="bg-gradient-to-b from-yellow-300 via-red-500 to-pink-500 bg-clip-text py-4 text-9xl font-bold text-transparent">
          YOU
        </h1>
        <ReactTyped
          strings={typedStrings}
          typeSpeed={50}
          backSpeed={20}
          showCursor={false}
          className="h-auto text-5xl font-bold text-neutral-200"
        />
      </div>
    </div>
  );
}
