import Image from "next/image";
import React, { useState } from "react";
import { useInView } from "react-intersection-observer"; // Import the useInView hook
import ReactTyped from "react-typed";
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

  // Use the useInView hook to track whether the component is in view
  const [ref, inView] = useInView({
    triggerOnce: true, // Only trigger once when entering the viewport
  });

  const [isTypingStarted, setIsTypingStarted] = useState(false);

  // Start the typing animation when the component is in view
  if (inView && !isTypingStarted) {
    setIsTypingStarted(true);
  }

  return (
    <div className="relative w-full">
      <div
        ref={ref} // Attach the ref to the container
        className={`inline-flex h-96 w-full flex-col justify-center p-24 text-neutral-300 ${containerClass}`}>
        <div className="text-2xl font-light text-opacity-80">{text}</div>
        <div className="text-4xl font-bold text-orange-500">
          {isTypingStarted && ( // Only render if typing animation has started
            <ReactTyped
              strings={[title]}
              typeSpeed={50}
              showCursor={false}
            />
          )}
        </div>
        <div>
          <span className="leading-1 text-2xl font-light text-opacity-80">
            {body}
          </span>
        </div>
      </div>
      <Image
        className="-z-20"
        alt={title}
        src={imageSrc[imageIndex]}
        quality={50}
        layout="fill"
        objectFit="cover"
        loading="lazy"
      />
    </div>
  );
}
