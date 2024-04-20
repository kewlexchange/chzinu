import React from 'react';
import { StyledHomeButton, StyledHomeContainer, StyledHomeSection, StyledSection } from '../styledComponents/Containers';
import {Button} from '@mui/material'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileContract } from '@fortawesome/free-solid-svg-icons';
import { faCopy } from '@fortawesome/free-regular-svg-icons';
import { useTypingText } from '../hooks/useTypingText';

const HomeSection = () => {
    const { word, stop, start } = useTypingText(
        ["pet!", "meme token!", "dog!"],
        130,
        20
      );
    return (
        <StyledHomeSection 
        id="home">
            <StyledHomeContainer>
                <img src='./home_background.png' className='animate__animated animate__zoomIn animate__slower'/>

                <div className='home-text-container'>
                    <div className='home-title-container'>
                        <h1>
                            <span className='animate__animated animate__fadeIn animate__fast'>C</span>
                            <span className='animate__animated animate__fadeIn animate__fast'>H</span>
                            <span className='animate__animated animate__fadeIn animate__fast'>Z</span>
                            <span className='animate__animated animate__fadeIn animate__fast' style={{marginLeft:'40px'}}>I</span>
                            <span className='animate__animated animate__fadeIn animate__fast'>N</span>
                            <span className='animate__animated animate__fadeIn animate__fast'>U</span>
                            <img src='./dog-inu.png'/>
                        </h1>
                        <p className='text-1 animate__animated animate__fadeIn animate__fast'>The first Chilliz <span>{word?.props?.children?.props?.children !== '0' ? word?.props?.children?.props?.children : ''}</span></p>
                        <p className='contract-address animate__animated animate__fadeIn animate__fast'><strong>CONTRACT ADDRESS: </strong><span>0xF3928e7871eb136DD6648Ad08aEEF6B6ea893001 <FontAwesomeIcon icon={faCopy} size='1x'/></span></p>
                    
                    </div>
                    
                    <div>
                    <div className='home-info-container'>
                        <p className='text-2 animate__animated animate__fadeIn animate__fast'><p>We’re a community on a mission.</p></p>
                        {/* <p className='text-3 animate__animated animate__fadeIn animate__fast'>Build, trust, educate, and bark our way through the Chiliz universe.</p> */}
                    </div>
                    <img className="rocket-dog" src="./dog-rocket.png"/>
                    <div className='buttons-container'>
                        <StyledHomeButton
                        className='animate__animated animate__fadeIn animate__fast'
                            variant='contained'
                            onClick={() => window.open('https://www.kewl.exchange/swap', '_blank')}
                            >
                            Buy
                        </StyledHomeButton>
                        <StyledHomeButton
                            className='animate__animated animate__fadeIn animate__fast'
                            variant='contained'
                            onClick={() => window.open('https://www.chiliz.net/exchange/CHZ2_INU/CHZ', '_blank')}
                            >
                            View chart
                        </StyledHomeButton>
                    </div>

                    </div>
                
                </div>


            </StyledHomeContainer>


        </StyledHomeSection>
    );
}

export default HomeSection;
