import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";
import Quotes from "@/components/Quotes";
import Statistics from "@/components/Statistics";
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
      <Statistics
        text="Thailand emitted around"
        title="459.9 metric tons"
        body="of carbon emissions in 2022 ✈️"
      />
      <Statistics
        text="Thailand created around"
        title="26 million metric tons"
        body="of waste in 2022 🏝️"
      />
      <Statistics
        text="There were"
        title="2,837 fire alerts reported"
        body="in 1 year 🚒"
      />
    </main>
  );
}
