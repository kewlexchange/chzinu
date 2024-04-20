import React from 'react';
import { StyledPageLine, StyledTokenomicsSection } from '../styledComponents/Containers';
import TokenomicCard from '../TokenomicCard';
import TokenomicDog from '../TokenomicDog';

const TokenomicsSection = () => {
    return (
        <StyledTokenomicsSection id="tokenomics">
            <StyledPageLine>
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

            </StyledPageLine>

            <div className='tokenomics-cards-container'>
                <TokenomicCard
                    title={"Token supply"}
                    text={"We have an initial supply of 10,000,000,000 tokens! "}
                    text2={"With 99% of the funds going straight into liquidity on KEWL Swap, we’re making sure $ChzInu trades smoothly."}
                    buttonText={"SEE MORE"}
                    buttonFunction={() => console.log('hola')}
                    cardNumber={'1'}
                />
                <TokenomicCard
                    title={"Safe contract"}
                    text={"The contract has no malicious functions. Has been audited for professional a team."}
                    buttonText={"SEE MORE"}
                    buttonFunction={() => console.log('hola')}
                />
                <TokenomicCard
                    title={"Safe contract"}
                    text={"The contract has no malicious functions. Has been audited for professional a team."}
                    buttonText={"SEE MORE"}
                    buttonFunction={() => console.log('hola')}
                    cardNumber='3'
                />
                <TokenomicDog/>
            </div>

        </StyledTokenomicsSection>
    );
}

export default TokenomicsSection;
