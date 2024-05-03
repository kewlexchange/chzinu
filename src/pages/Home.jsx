import React from "react";
import { StyledAppContainer } from "../components/styledComponents/Containers";
import Navbar from "../components/Navbar";
import HomeSection from "../components/sections/HomeSection";
import TeamSection from "../components/sections/TeamSection";
import TokenomicsSection from "../components/sections/TokenomicsSection";
import AboutSection from "../components/sections/AboutSection";
import FooterSection from "../components/sections/FooterSection";

export default function Home() {
  return (
    <>
        <HomeSection/>
        <TeamSection/>
        <TokenomicsSection/>
        <AboutSection/>
        <FooterSection/>
    </>
);
}
