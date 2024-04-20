import React, { useEffect, useState } from 'react';
import { StyledAboutSection } from '../styledComponents/Containers';
import LineTextBanner from '../LineTextBanner';
import CustomizedAccordions from '../CustomizedAccordions';

const AboutSection = () => {

    return (
        <StyledAboutSection id='about'>
           <LineTextBanner carouselDirection={'left'}/>
           <div className='about-us-container'>
                <h2>ABOUT</h2>
                <CustomizedAccordions
                    arrayObjectsText={[
                        {
                            title: 'Reverse rug',
                            text: 'Reverse Rug: Picture this — a team of sneaky scammers tried to pull the wool over our Chilizens’ eyes with “Chiliz Inu,” but we weren’t having any of it. We flipped the script and created the first-ever reverse rug to keep our Chiliz Chain safe and sound. Take that, rug-pullers!'
                        },
                        {
                            title:'Team',
                            text:'Who’s the team behind $ChzInu, you ask? Well, surprise — it’s you! That’s right, every Chilizen holding a few $ChzInu tokens is part of the pack. We’re all in this together, exploring the Chiliz universe one bark at a time.'
                        },
                        {
                            title: 'Goal of the project',
                            text: '$ChzInu isn’t just a meme — we’re a community on a mission. Our goal? To build trust, educate, and bark our way through the Chiliz universe. From seasoned veterans to fresh-faced newcomers, everyone’s welcome in our cozy corner of Web3 #SportFi.'
                        },
                        {
                            title: 'CEX',
                            text: 'We’ve hit the big leagues, folks! $ChzInu is listed on the Chiliz Exchange, so you can track our spicy journey on CoinGecko. It’s a paw-some milestone for us puppies!'
                        }

                    ]}
                />
           </div>

        </StyledAboutSection>
    );
}

export default AboutSection;
