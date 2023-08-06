import { Inter } from "next/font/google";
import Image from "next/image";
import Typewriter from "typewriter-effect";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className='bg-black text-slate-200 h-screen'>
      <div className='text-4xl font-bold flex items-center justify-center h-screen'>
        <Typewriter
          options={{
            strings: ["Hello", "World"],
            autoStart: true,
            loop: true,
          }}
        />
      </div>
    </main>
  );
}
