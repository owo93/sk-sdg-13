import Image from "next/image";
import React from "react";
import UN from "/public/images/UN.png";

export default function SDG() {
  return (
    <div
      className="w-full bg-white p-4"
      id="init">
      <div className="mx-auto grid max-w-[1240px] gap-4 rounded-3xl bg-lime-950 p-8 text-white md:grid-cols-2">
        {/* Item 1 */}
        <div className="relative h-72 md:col-span-1">
          <Image
            className="absolute left-0 top-0 h-full w-full rounded-2xl"
            alt="United Nations"
            src={UN}
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="flex flex-col justify-center md:col-span-1">
          <h1 className="py-2 text-2xl font-bold sm:text-3xl md:text-4xl">
            Alternative Energy
          </h1>
          <p className="text-white/60">
            Alternative energy allows us to transition from polluting fossil
            fuels to significantly cleaner renewable energy.
          </p>
        </div>

        {/* Item 2 */}
        {/* Add similar code for the second grid item */}

        {/* Item 3 */}
        {/* Add similar code for the third grid item */}
      </div>
    </div>
  );
}
