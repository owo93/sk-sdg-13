import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";
import Quotes from "@/components/Quotes";
import Head from "next/head";

export default function Home() {
  return (
    <main>
      <Head>
        <title>SK SDG 13</title>
      </Head>
      <NavBar />
      <Hero />
      <Quotes />
    </main>
  );
}
