import Image from "next/image";
import React, { useEffect, useState } from "react";
import Typed from "react-typed";
import background1 from "/public/images/HeroBG.png";
import background2 from "/public/images/HeroBG2.png";
import background3 from "/public/images/HeroBG3.png";

const typedStrings = [
  "Rivers all around the country are being polluted by",
  "Ecosystems are being destroyed by",
  "The future of our country depends on",
];

const backgrounds = [background1, background2, background3]; // List of background images

export default function Hero() {
  const [currentBackgroundIndex, setCurrentBackgroundIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBackgroundIndex(
        (prevIndex) => (prevIndex + 1) % backgrounds.length,
      );
    }, 5000); // Change background every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      id="home"
      className="relative h-screen">
      <div className="absolute inset-0">
        <Image
          src={backgrounds[currentBackgroundIndex]}
          alt="background"
          layout="fill"
          objectFit="cover"
          className="-z-20"
        />
        <div className="absolute inset-0 bg-black opacity-20 transition-opacity duration-1000"></div>
      </div>
      <div className="relative mx-auto mt-[-100px] flex h-full max-w-[800px] flex-col justify-center p-5 text-left">
        <h1 className="bg-gradient-to-b from-yellow-300 via-red-500 to-pink-500 bg-clip-text py-4 text-9xl font-bold text-transparent">
          YOU
        </h1>
        <Typed
          strings={typedStrings}
          typeSpeed={50}
          backSpeed={20}
          loop
          className="h-auto text-5xl font-bold text-white"
        />
      </div>
    </div>
  );
}
