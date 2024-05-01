import React from "react";
import { StyledShibDog } from "./styledComponents/Containers";
import { faMedium, faTelegram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useScrollClick from "../hooks/useScrollClick";

export default function ShibDog() {
  const {scrollToTeam} = useScrollClick()

  return <StyledShibDog>
    <div class="bubble-dog">
          <p>Woof!</p> 
          <FontAwesomeIcon size="1x" icon={faTelegram} title="Telegram" style={{marginLeft: '8px'}}onClick={() => window.open('https://t.me/TheChilizInu', '_blank')}/>
          <FontAwesomeIcon size="1x" icon={faTwitter} title="Twitter" style={{backgroundColor:'transparent'}} onClick={() => window.open('https://twitter.com/ChilizInu', '_blank')}/>
          <FontAwesomeIcon size="1x" className="medium" title="Medium" icon={faMedium} onClick={() => window.open('https://medium.com/@chilizinu', '_blank')}/>
    </div>
    <img className="shib-dog" src="./dog-inu.png" onClick={scrollToTeam}/>
  </StyledShibDog>;
}
