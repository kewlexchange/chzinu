import React from "react";
import FooterSection from "../components/sections/FooterSection";
import { StyledPuppyGuideSection, StyledSection } from "../components/styledComponents/Containers";
import ShibDog from "../components/ShibDog";
import RocketDog from "../components/RocketDog";

export default function PuppyGuide() {
  return <>
    <StyledPuppyGuideSection>
      <h1>COMING SOON</h1>
      <ShibDog/>
      <img src="/comming_soon.png"/>
    </StyledPuppyGuideSection>
    <FooterSection/>
  </>;
}
