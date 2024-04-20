import React from "react";
import { StyledRocketDog } from "./styledComponents/Containers";

export default function RocketDog() {
  return <StyledRocketDog>
    <div class="bubble-dog">I can get you a thumb by three o'clock</div>
    <img className="rocket-dog" src="./dog-rocket.png"/>
  </StyledRocketDog>;
}
