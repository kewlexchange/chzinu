import React from 'react';
import { StyledPageLine, StyledTeamSection, StyledTokenomicsSection } from '../styledComponents/Containers';
import TokenomicCard from '../TokenomicCard';
import TokenomicDog from '../TokenomicDog';
import LineTextBanner from '../LineTextBanner';

const TeamSection = () => {
    return (
        <StyledTeamSection id="team">
            <LineTextBanner />

            <div className='team-cards-container'>
                <TokenomicCard
                    title={"Token supply"}
                    text={"We have an initial supply of 10,000,000,000 tokens! "}
                    text2={"With 99% of the presale going into liquidity on KEWL EXCHANGE, we’re making sure $ChzInu trades smoothly."}
                    buttonText={"SEE MORE"}
                    buttonFunction={() => console.log('hola')}
                    cardNumber={'1'}
                />
                <TokenomicCard
                    title={"OUR MISSION"}
                    text={"We're focused on building trust, educating, and making our way through the Chiliz universe."}
                    buttonText={"SEE MORE"}
                    buttonFunction={() => console.log('hola')}
                />
                <TokenomicCard
                    title={"Safe contract"}
                    text={"The contract has no malicious functions and is verified on-chain since 29/10/2023."}
                    buttonText={"SEE MORE"}
                    buttonFunction={() => console.log('hola')}
                    cardNumber='3'
                />
                <TokenomicDog/>
            </div>
        </StyledTeamSection>
    );
}

export default TeamSection;
