import { loadJsonData } from "../utils";
import Navigator from "@/components/_layout/navigator/Navigator";
import Tokenomics from "@/components/_layout/tokenomics/tokenomics";
import Social from "@/components/_layout/social/social";
import Footer from "@/components/_layout/footer/footer";
import Header from "@/components/_layout/header/header";
import Hero from "@/components/_layout/hero/hero";
import About from "@/components/_layout/about/about";
import React from "react";
import MenuMobile from "@/components/_layout/menu_mobile/menuMobile";

export default function Home() {
  const jsonData = loadJsonData();

  return (
    <>
      <Header />
      <main className="overflow-clip">
        <Hero />
        <About />
        <Navigator />
        <Tokenomics />
        <Social />
        <Footer />
      </main>
    </>
  );
}
