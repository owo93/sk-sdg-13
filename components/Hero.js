import Image from "next/image";
import Typed from "react-typed";
import background from "/public/images/BG.jpeg";

export default function Hero() {
  return (
    <div className=" text-white">
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-left flex flex-col justify-center">
        <h1 className="text-5xl font-semibold py-4">
          Rivers all around the country are being polluted by
        </h1>
        <Typed
          strings={["You"]}
          typeSpeed={240}
          backSpeed={140}
          loop
          className="font-bold text-transparent text-6xl bg-clip-text bg-gradient-to-b from-yellow-300 via-red-500 to-pink-500"
        />
      </div>
    </div>
  );
}
