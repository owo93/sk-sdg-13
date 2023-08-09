import Card from "@/components/Card";
import Hero from "@/components/Hero";
import QuoteCard from "@/components/Quotes";
import SDG from "@/components/SDG";
import Layout from "@/components/layout";
import Head from "next/head";
import UN from "/public/images/UN.png";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>SK SDG 13</title>
      </Head>
      <Hero />
      <div>
        {/* Example usage of SDG component */}
        <SDG
          color="lime-950"
          question="ANY PLANS?"
          title="COMES IN SDG13"
          imageSrc={UN}
          details="SDG 13 is a United Nations Sustainable Development Goal that aims to take urgent action to combat climate change and its impacts."
        />
      </div>
      <div className="mx-auto grid w-full gap-4 p-8 text-white md:grid-cols-2">
        <QuoteCard
          name="Wannasingh Prasertkul"
          role="Famous Thai Actor"
          text="The environment and society are not separate, not just a concern for the future, but a reality we must confront today."
        />
        <QuoteCard
          name="Wannasingh Prasertkul"
          role="Famous Thai Actor"
          text="The environment and society are not separate, not just a concern for the future, but a reality we must confront today."
        />
        <QuoteCard
          name="Wannasingh Prasertkul"
          role="Famous Thai Actor"
          text="The environment and society are not separate, not just a concern for the future, but a reality we must confront today."
        />
        <QuoteCard
          name="Wannasingh Prasertkul"
          role="Famous Thai Actor"
          text="The environment and society are not separate, not just a concern for the future, but a reality we must confront today."
        />
        <QuoteCard
          name="Wannasingh Prasertkul"
          role="Famous Thai Actor"
          text="The environment and society are not separate, not just a concern for the future, but a reality we must confront today."
        />
      </div>
    </Layout>
  );
}
