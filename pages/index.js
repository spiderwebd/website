import Head from "next/head";
import Image from "next/image";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Contact from "./contact";
import Services from "./services";
import MoreInfo from "./MoreInfo";
import Values from "./Values";
import Popup from "./Pop-up";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Spider Web Designs</title>
        <meta name="description" content="The professionals here to help" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        ></link>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero />
      <Values />
      <Services />
      <MoreInfo />
      <Footer />
    </div>
  );
}
