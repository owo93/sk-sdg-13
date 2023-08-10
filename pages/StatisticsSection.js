import React from "react";
import Image from "next/image";

const StatisticsSection = ({ text, title, body, imageSrc }) => {
  return (
    <div>
      <div className="w-full h-96 p-24 flex-col justify-center items-start inline-flex">
        <div className="text-white text-opacity-80 text-3xl font-light">
          {text}
        </div>
        <div className="text-orange-500 text-6xl font-bold">{title}</div>
        <div>
          <span className="text-white text-opacity-80 text-3xl font-light leading-10">
            {body}
          </span>
        </div>
      </div>
      <Image
        src={imageSrc}
        layout="fill"
        className="z-20 opacity-30"
      />
    </div>
  );
};
export default function Home() {
  return (
    <div>
      <StatisticsSection
        text="Section 1 Text"
        title="Statistics Title 1"
        body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Section 1"
        imageSrc="/images/BG1.jpeg"
      />
      <StatisticsSection
        text="Section 2 Text"
        title="Statistics Title 2"
        body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Section 2"
        imageSrc="/images/BG2.jpeg"
      />
      <StatisticsSection
        text="Section 3 Text"
        title="Statistics Title 3"
        body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Section 3"
        imageSrc="/images/BG3.jpeg"
      />
    </div>
  );
}

export default StatisticsSection;
