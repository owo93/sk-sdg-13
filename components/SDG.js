import Image from "next/image";
import UN from "/public/images/UN.png";

export default function SDG() {
  return (
    <div
      className="w-full bg-white p-4"
      id="init">
      <div className="mx-auto grid max-w-[1240px] gap-4 rounded-3xl bg-lime-950 p-8 text-white md:grid-cols-2">
        <Image
          className="mx-auto w-[600px] rounded-2xl"
          alt="United Nations"
          src={UN}
        />
        <div className="flex flex-col justify-center">
          <p className="font-bold text-white">ANY PLANS?</p>
          <h1 className="py-2 text-4xl font-bold sm:text-3xl md:text-4xl">
            COMES IN SDG13
          </h1>
          <p className="text-2xl text-white/60">
            SDG 13 is a United Nations Sustainable Development Goal that aims to
            take urgent action to combat climate change and its impacts.
          </p>
        </div>
      </div>
    </div>
  );
}
