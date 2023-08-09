import Image from "next/image";
import React, { useState } from "react";

export default function Quotes({ quotes }) {
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentQuoteIndex((prevIndex) =>
      prevIndex === 0 ? quotes.length - 1 : prevIndex - 1,
    );
  };

  const handleNextClick = () => {
    setCurrentQuoteIndex((prevIndex) => (prevIndex + 1) % quotes.length);
  };

  const currentQuote = quotes[currentQuoteIndex];

  return (
    <div className="mx-auto flex w-full flex-col items-center p-4 pt-20">
      <div className="inline-flex h-[240px] w-[600px] flex-col items-start justify-start gap-4 overflow-hidden rounded-2xl bg-white p-6 shadow-lg">
        <div className="flex items-center gap-4">
          <Image
            className="h-16 w-16 rounded-full object-cover"
            src={currentQuote.avatar}
            alt={currentQuote.name}
            width={64} // Set the width of the image
            height={64} // Set the height of the image
          />
          <div className="flex flex-col">
            <div className="text-2xl font-semibold text-black">
              {currentQuote.name}
            </div>
            <div className="text-xs font-semibold text-neutral-400">
              {currentQuote.occupation}
            </div>
          </div>
        </div>
        <div className="max-h-[600px] max-w-[400px] overflow-y-auto text-base font-normal tracking-tight text-zinc-900">
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
