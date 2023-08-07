import Image from "next/image";
import Typed from "react-typed";
import background from "/public/images/BG.jpeg";

export default function Hero() {
  return (
    <div className=" text-white">
      <div className="mx-auto mt-[-96px] flex h-screen w-full max-w-[800px] flex-col justify-center text-left">
        <Typed
          strings={["Rivers all around the country are being polluted"]}
          typeSpeed={50}
          backSpeed={50}
          loop
          className="h-auto text-5xl font-bold "
        />
        <h1 className="bg-gradient-to-b from-yellow-300 via-red-500 to-pink-500 bg-clip-text py-4 text-5xl font-bold text-transparent">
          By you.
        </h1>
      </div>
    </div>
  );
}
