import React from "react";
import { StyledShibDog } from "./styledComponents/Containers";

export default function ShibDog() {
  return <StyledShibDog>
    <div class="bubble-dog">Woof!</div>
    <img className="shib-dog" src="./dog-inu.png"/>
  </StyledShibDog>;
}
