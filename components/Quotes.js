import Image from "next/image";
import React from "react";
import quoteBG from "/public/images/quoteBG.png";
import quoteGrid from "/public/images/quoteGrid.png";

function QuoteCard({ name, role, text }) {
  return (
    <div className="mx-auto w-full bg-white p-4">
      <div className="inline-flex flex-col items-start justify-start gap-4 rounded-2xl p-6 shadow-lg">
        <div className="inline-flex items-start justify-start gap-2.5 self-stretch">
          <img
            className="rounded-full"
            src="https://via.placeholder.com/69x69"
            alt={name}
          />
          <div className="inline-flex flex-col items-start justify-center self-stretch">
            <div className="text-2xl font-semibold text-black">{name}</div>
            <div className="text-xs font-semibold text-neutral-400">{role}</div>
          </div>
        </div>
        <div className="max-w-[400px] text-base font-normal tracking-tight text-zinc-900">
          {text}
        </div>
      </div>
    </div>
  );
}

export default QuoteCard;
