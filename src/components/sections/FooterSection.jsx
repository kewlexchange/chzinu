import React from "react";
import { StyledFooterSection } from "../styledComponents/Containers";

export default function FooterSection() {
  return <StyledFooterSection>
    <p>Copyright © 2024. All rights reserved. - chilizinu@proton.me</p>
    <p style={{width: '70%'}}>
    <strong>Financial Disclaimer: </strong> 
        ChzInu is a meme cryptocurrency project with no intrinsic value or expectation of financial return. 
        The ChzInu project is 100% community lead. The token is completely for entertainment purposes only.
    </p>
    <img src="./coin.jpg"/>
  </StyledFooterSection>;
}
