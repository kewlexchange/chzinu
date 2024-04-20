import React from "react";
import { StyledShibDog } from "./styledComponents/Containers";
import { faTelegram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ShibDog() {
  return <StyledShibDog>
    <div class="bubble-dog">Woof! 
          <FontAwesomeIcon size="1x" icon={faTelegram} style={{marginLeft: '8px'}}onClick={() => window.open('https://t.me/TheChilizInu', '_blank')}/>
          <FontAwesomeIcon size="1x" icon={faTwitter} style={{backgroundColor:'transparent'}} onClick={() => window.open('https://twitter.com/ChilizInu', '_blank')}/>
    </div>
    <img className="shib-dog" src="./dog-inu.png"/>
  </StyledShibDog>;
}
