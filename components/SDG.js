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
          <h1 className="py-2 text-2xl font-bold sm:text-3xl md:text-4xl">
            COMES IN SDG13
          </h1>
          <p className="text-white/60">
            SDG 13 is a United Nations Sustainable Development Goal that aims to
            take urgent action to combat climate change and its impacts. The
            goal has 10 targets, which focus on strengthening the ability of
            countries to deal with the impacts of climate change, increasing the
            ability to adapt to the adverse impacts of climate change, improving
            education and awareness-raising on climate change, and providing
            financial resources to support climate action in developing
            countries. By working together, we can achieve this goal and build a
            more sustainable future for all.
          </p>
        </div>
      </div>
    </div>
  );
}
