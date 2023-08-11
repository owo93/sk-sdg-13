import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import Head from "next/head";

export default function Layout({ children }) {
  return (
    <>
      <NavBar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
