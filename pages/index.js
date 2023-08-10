import Card from "@/components/Card";
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
      title: "Creating a better enviroment",
      body: "Good environment is necessary for maintaining good mental and physicals health.",
      actions: ["/action/environment"],
    },
    // Add more initiatives as needed
  ];
  const quotesData = [
    {
      avatar: "/images/avatar1.png",
      name: "Wannasingh Prasertkul",
      occupation: "Famous Thai Actor",
      details:
        "The environment and society are not separate, not just a concern for the future, but a reality we must confront today.",
    },
    {
      avatar: "/images/avatar2.png",
      name: "Pita Limjaroenrat",
      occupation: "Leader of MFW Party",
      details:
        "Our lives depend on the air we breathe every day, which depends on the environment around us. Ensuring the right to breathe clean air is extremely crucial right now.",
    },
    {
      avatar: "/images/avatar3.png",
      name: "Chadchart Sittipunt",
      occupation: "Current governor of Bangkok",
      details: "The smallest gesture has big payoff in climate change battle.",
    },
    {
      avatar: "/images/avatar4.png",
      name: "Alex Rendell",
      occupation: "UN Ambassador",
      details: "Good environment; Good life.",
    },
    {
      avatar: "/images/avatar5.png",
      name: "Tik Jesdaporn Pholdee",
      occupation: "Environmentalist & Actor",
      details:
        "By acknowledging our profound interrelation with nature and appreciating even the smallest overlooked aspects, we cultivate the readiness to contribute positively to our world.",
    },
  ];

  return (
    <Layout>
      <Head>
        <title>SK SDG 13</title>
      </Head>
      <Hero />
      <div id="stats">
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
          alignRight
        />
        <Statistics
          text="There were"
          title="2,837 fire alerts reported"
          body="in 1 year 🚒"
          imageIndex={2}
        />
        <SDG
          color="lime-950"
          question="ANY PLANS?"
          title="COMES IN SDG13"
          imageSrc={UN}
          details="SDG 13 is Sustainable Development Goal 13: Climate Action. It aims to take urgent action to combat climate change and its impacts. And Thailand is a vulnerable country to climate change, so SDG13 will help taking steps to."
        />
      </div>
      <div
        className="h-auto border-b border-black pb-24"
        id="init">
        <div className="px-12 pb-8 pt-24 text-neutral-900">
          <p className="text-base">Around the country</p>
          <h1 className="text-2xl font-semibold">
            Initiatives to combat climate change in Thailand
          </h1>
        </div>
        <div className="grid grid-cols-1 gap-4 pt-4 sm:gap-2 md:grid-cols-2 md:px-8 lg:grid-cols-3 lg:px-24">
          {initiatives.map((initiative, index) => (
            <Card
              key={index}
              {...initiative}
            />
          ))}
        </div>
      </div>
      <div id="quotes">
        <div className="px-12 pb-8 pt-24 text-neutral-900">
          <p className="text-base">Important public figures of Thailand</p>
          <h1 className="text-2xl font-semibold">What people are saying</h1>
        </div>
        <Quotes quotes={quotesData} />
      </div>
    </Layout>
  );
}
