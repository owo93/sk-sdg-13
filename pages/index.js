import Hero from "@/components/Hero";
import Quotes from "@/components/Quotes";
import SDG from "@/components/SDG";
import Layout from "@/components/layout";
import Head from "next/head";
import UN from "/public/images/UN.png";

export default function Home() {
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
      {/* Example usage of SDG component */}
      <SDG
        color="lime-950"
        question="ANY PLANS?"
        title="COMES IN SDG13"
        imageSrc={UN}
        details="SDG 13 is a United Nations Sustainable Development Goal that aims to take urgent action to combat climate change and its impacts."
      />
      {/* Statistics here*/}
      {/* Initiatives here*/}
      <Quotes quotes={quotesData} />
    </Layout>
  );
}
