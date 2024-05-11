import React from "react";
import HomeSection from "../components/sections/HomeSection";
import ProyectInfo from "../components/sections/ProyectInfo";
import TokenomicsSection from "../components/sections/TokenomicsSection";
import AboutSection from "../components/sections/AboutSection";
import FooterSection from "../components/sections/FooterSection";

export default function Home() {
  return (
    <>
        <HomeSection/>
        <ProyectInfo/>
        <TokenomicsSection/>
        <AboutSection/>
        <FooterSection/>
    </>
);
}
