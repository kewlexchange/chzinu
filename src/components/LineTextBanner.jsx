import React from "react";
import { StyledPageLine } from "./styledComponents/Containers";

export default function LineTextBanner({carouselDirection}) {
  return  <StyledPageLine direction={carouselDirection}>
  <div className='line-row'>
      <div className="line-item">
          <img src='./dog-inu.png'/>
          <p>CHILLIZ PET</p>
          <img src='./dog-inu.png'/>
      </div>
  </div>
  <div className='line-row'>
      <div className="line-item">
          <img src='./dog-inu.png'/>
          <p>CHILLIZ PET</p>
          <img src='./dog-inu.png'/>
      </div>
  </div>
  <div className='line-row'>
      <div className="line-item">
          <img src='./dog-inu.png'/>
          <p>CHILLIZ PET</p>
          <img src='./dog-inu.png'/>
      </div>
  </div>
  <div className='line-row'>
      <div className="line-item">
          <img src='./dog-inu.png'/>
          <p>CHILLIZ PET</p>
          <img src='./dog-inu.png'/>
      </div>
  </div>
  <div className='line-row'>
      <div className="line-item">
          <img src='./dog-inu.png'/>
          <p>CHILLIZ PET</p>
          <img src='./dog-inu.png'/>
      </div>
  </div>

</StyledPageLine>;
}
