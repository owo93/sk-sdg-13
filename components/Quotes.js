import Image from "next/image";
import React, { useState } from "react";

const quotesData = [
  {
    avatar: "/images/avatar1.png",
    name: "Wannasingh Prasertkul",
    occupation: "Famous Thai Actor",
    details:
      "The environment and society are not separate, not just a concern for the future, but a reality we must confront today.",
  },
  {
    avatar: "/images/avatar2.png",
    name: "Pita Limjaroenrat",
    occupation: "Leader of MFW Party",
    details:
      "Our lives depend on the air we breathe every day, which depends on the environment around us. Ensuring the right to breathe clean air is extremely crucial right now.",
  },
  {
    avatar: "/images/avatar3.png",
    name: "Chadchart Sittipunt",
    occupation: "Current governor of Bangkok",
    details: "The smallest gesture has big payoff in climate change battle.",
  },
  {
    avatar: "/images/avatar4.png",
    name: "Alex Rendell",
    occupation: "UN Ambassador",
    details: "Good environment; Good life.",
  },
  {
    avatar: "/images/avatar5.png",
    name: "Tik Jesdaporn Pholdee",
    occupation: "Environmentalist & Actor",
    details:
      "By acknowledging our profound interrelation with nature and appreciating even the smallest overlooked aspects, we cultivate the readiness to contribute positively to our world.",
  },
];

export default function Quotes() {
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentQuoteIndex((prevIndex) =>
      prevIndex === 0 ? quotesData.length - 1 : prevIndex - 1,
    );
  };

  const handleNextClick = () => {
    setCurrentQuoteIndex((prevIndex) => (prevIndex + 1) % quotesData.length);
  };

  const currentQuote = quotesData[currentQuoteIndex];

  return (
    <div className="mx-auto flex w-full flex-col items-center">
      <div className="inline-flex max-h-[300px] w-[500px] flex-col items-start justify-start gap-4 overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 shadow-md">
        <div className="flex items-center gap-4">
          <div className="relative h-16 w-16 overflow-hidden rounded-full">
            <Image
              className="h-16 w-16 rounded-full object-cover"
              src={currentQuote.avatar}
              alt={currentQuote.name}
              width={64} // Set the width of the image
              height={64} // Set the height of the image
            />
          </div>
          <div className="flex flex-col">
            <div className="text-2xl font-semibold text-neutral-700">
              {currentQuote.name}
            </div>
            <div className="text-base font-semibold text-neutral-400">
              {currentQuote.occupation}
            </div>
          </div>
        </div>
        <div className="max-h-[600px] max-w-[400px] overflow-y-auto text-2xl font-normal tracking-tight text-neutral-500">
          {currentQuote.details}
        </div>
      </div>
      <div className="mt-4 flex gap-4">
        <button
          onClick={handlePrevClick}
          className="rounded-lg bg-gray-200 px-4 py-2">
          &lt; Prev
        </button>
        <button
          onClick={handleNextClick}
          className="rounded-lg bg-gray-200 px-4 py-2">
          Next &gt;
        </button>
      </div>
    </div>
  );
}
