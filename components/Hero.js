import Image from "next/image";
import Typed from "react-typed";
import background from "/public/images/BG.jpeg";

export default function Hero() {
  return (
    <div className=" text-white">
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-left flex flex-col justify-center">
        <Typed
          strings={["Rivers all around the country are being polluted"]}
          typeSpeed={50}
          backSpeed={50}
          loop
          className="h-auto font-bold text-5xl "
        />
        <h1 className="text-5xl font-bold py-4 text-transparent bg-clip-text bg-gradient-to-b from-yellow-300 via-red-500 to-pink-500">
          By you.
        </h1>
      </div>
    </div>
  );
}
