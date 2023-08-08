import React from "react";
import Image from "next/image";

export function Stat({ fact }) {
  return (
    <div className="h-[593px] w-full relative items-center">
      <div className="text-orange-500 text-8xl font-bold leading-96px z-50">
        459.9 metric tons
      </div>

      <Image
        className="z-20 opacity-30"
        src="/images/fact.png"
        layout="fill"
      />
    </div>
  );
}
