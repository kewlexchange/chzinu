import React from "react";
import { StyledHomeButton, StyledTokenomicCard } from "./styledComponents/Containers";
import { Button } from "@mui/material";

export default function TokenomicCard({
    title,
    text,
    text2,
    buttonFunction,
    buttonText,
    cardNumber
}) {
  return <StyledTokenomicCard cardnumber={cardNumber}>
        <h2>{title}</h2>
        <p>{text}</p>
        {text2 && <p>{text2}</p>}
        {/* <StyledHomeButton
            onClick={buttonFunction}
        
        >{buttonText}</StyledHomeButton> */}
        <img
            className="budget"
            src='./coin.jpg'        
        />
  </StyledTokenomicCard>;
}
