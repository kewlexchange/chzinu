import React, { useEffect, useState } from 'react';
import { StyledAboutSection } from '../styledComponents/Containers';
import LineTextBanner from '../LineTextBanner';

const AboutSection = () => {

    return (
        <StyledAboutSection id='about'>
           <LineTextBanner carouselDirection={'left'}/>
        </StyledAboutSection>
    );
}

export default AboutSection;
