import Card, { CardWithImage } from "@/components/Card";
import Hero from "@/components/Hero";
import Quotes from "@/components/Quotes";
import SDG from "@/components/SDG";
import Statistics from "@/components/Statistics";
import Layout from "@/components/layout";
import Head from "next/head";
import React from "react";
import UN from "/public/images/UN.png";

export default function Home() {
  const initiatives = [
    {
      title: "Alternative Energy",
      body: "Alternative energy allows us to transition from polluting fossil fuels to significantly cleaner renewable energy.",
      actions: ["/action/energy"],
    },
    {
      title: "Waste Management",
      body: "Good waste management enables us to appropriately dispose of trash that would otherwise leak and harm the environment.",
      actions: ["/action/waste"],
    },
    {
      title: "Creating a better environment",
      body: "Good environment is necessary for maintaining good mental and physical health.",
      actions: ["/action/environment"],
    },
    // Add more initiatives as needed
  ];

  return (
    <Layout>
      <Head>
        <title>SK SDG 13</title>
      </Head>
      <Hero />

      <div //statistics
        id="stats"
        className="mt-8">
        <div className="grid sm:grid-cols-1 lg:grid-cols-3">
          <Statistics
            text="Thailand emitted around"
            title="459.9 metric tons"
            body="of carbon emissions in 2022 ✈️"
            imageIndex={0}
          />
          <Statistics
            text="Thailand created around"
            title="26 million metric tons"
            body="of waste in 2022 🏝️"
            imageIndex={1}
          />
          <Statistics
            text="There were"
            title="2,837 fire alerts reported"
            body="in 2022 🚒"
            imageIndex={2}
          />
        </div>
      </div>
      <div //initiatives
        id="init"
        className="mt-8">
        <div className="pb-4 text-center md:px-8 lg:px-16">
          <p className="text-base">Around the country</p>
          <h1 className="text-2xl font-semibold">
            Initiatives to combat climate change in Thailand
          </h1>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:px-8 lg:grid-cols-3 lg:px-16">
          {initiatives.map((initiative, index) => (
            <Card
              key={index}
              {...initiative}
            />
          ))}
        </div>
      </div>
      <div className="mt-8">
        <SDG
          color="lime-950"
          question="ANY PLANS?"
          title="COMES IN SDG13"
          imageSrc={UN}
          details="SDG 13 is Sustainable Development Goal 13: Climate Action. It aims to take urgent action to combat climate change and its impacts. And Thailand is a vulnerable country to climate change, so SDG13 will help taking steps to."
        />
      </div>
      <div //quotes
        id="quotes"
        className="mt-8 h-[500px]">
        <div className="pb-4 text-center md:px-8 lg:px-16">
          <p className="text-base">Important public figures of Thailand</p>
          <h1 className="text-2xl font-semibold">What people are saying</h1>
        </div>
        <Quotes />
      </div>
    </Layout>
  );
}
