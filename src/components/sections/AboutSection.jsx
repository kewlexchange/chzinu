import React, { useEffect, useState } from 'react';
import { StyledAboutSection, StyledPageLine } from '../styledComponents/Containers';

const AboutSection = () => {

    return (
        <StyledAboutSection id='about'>
            <StyledPageLine>
                <div className='line-row'>
                    <div class="line-item">
                        <img src='./dog-inu.png'/>
                        <p>CHILLIZ PET</p>
                        <img src='./dog-inu.png'/>
                    </div>
                </div>
                <div className='line-row'>
                    <div class="line-item">
                        <img src='./dog-inu.png'/>
                        <p>CHILLIZ PET</p>
                        <img src='./dog-inu.png'/>
                    </div>
                </div>
                <div className='line-row'>
                    <div class="line-item">
                        <img src='./dog-inu.png'/>
                        <p>CHILLIZ PET</p>
                        <img src='./dog-inu.png'/>
                    </div>
                </div>
                <div className='line-row'>
                    <div class="line-item">
                        <img src='./dog-inu.png'/>
                        <p>CHILLIZ PET</p>
                        <img src='./dog-inu.png'/>
                    </div>
                </div>

            </StyledPageLine>
        </StyledAboutSection>
    );
}

export default AboutSection;
