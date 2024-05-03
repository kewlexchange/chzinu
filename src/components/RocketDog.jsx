import React from "react";
import { StyledRocketDog } from "./styledComponents/Containers";
import useScrollClick from "../hooks/useScrollClick";

export default function RocketDog({props}) {
  const {scrollToTeam} = useScrollClick()
  return <StyledRocketDog {...props}>
    <div class="bubble-dog">Everyone’s welcome in our cozy corner of Web3 #SportFi.</div>
    <img className="rocket-dog" src="./dog-rocket.png" onClick={scrollToTeam}/>
  </StyledRocketDog>;
}
