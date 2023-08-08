import Image from "next/image";
import Typed from "react-typed";
import background from "/public/images/BG.png";

export default function Hero() {
  return (
    <div>
      <div className="mx-auto mt-[-100px] flex h-screen w-full max-w-[800px] flex-col justify-center p-5 text-left">
        <Typed
          strings={[
            "Rivers all around the country are being polluted by",
            "We are emitting more carbon dioxide because of",
            "Ecosystems are destroyed because of",
            "The future of our country depends on",
          ]}
          typeSpeed={50}
          backSpeed={20}
          loop
          className="h-auto text-5xl font-bold text-white"
        />
        <h1 className="bg-gradient-to-b from-yellow-300 via-red-500 to-pink-500 bg-clip-text py-4 text-7xl font-bold text-transparent">
          You.
        </h1>
      </div>
      <Image
        className="-z-20 object-cover"
        src={background}
        alt="background"
        fill
      />
    </div>
  );
}
