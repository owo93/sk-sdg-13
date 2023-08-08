import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";
import Quotes from "@/components/Quotes";
import SDG from "@/components/SDG";
import Layout from "@/components/layout";
import Head from "next/head";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>SK SDG 13</title>
      </Head>
      <Hero />
      <Quotes />
      <SDG />
    </Layout>
  );
}
