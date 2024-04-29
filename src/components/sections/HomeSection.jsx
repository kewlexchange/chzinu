import React from 'react';
import { StyledHomeButton, StyledHomeContainer, StyledHomeSection, StyledHomeText, StyledHomeTitle } from '../styledComponents/Containers';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy } from '@fortawesome/free-regular-svg-icons';
import RocketDog from '../RocketDog';
import ShibDog from '../ShibDog';
import CopyToClipboard from 'react-copy-to-clipboard';
import { useTypingText } from '../../hooks/useTypingText';

const HomeSection = () => {
    const { word, stop, start } = useTypingText(
        ["pet!", "meme token!", "dog!"],
        130,
        20
      );

      const copied = (e, a) => {
        var x = e.clientX;
        var y = e.clientY;
        let exist = document.getElementById('-copied');
        const span = () => {
            var dummy = document.createElement("span");
            dummy.setAttribute('id', '-copied')
            dummy.setAttribute('style', 'position: absolute; opacity: 1; transition: all 0.15s ease-in-out; color: #555555; background: #e2e2e2; border-radius: 6px; padding: 5px; top:'+(y - 30) +'px; left:'+(x)+'px;')
            dummy.innerHTML = 'Copied'
            e.target.appendChild(dummy);
            setTimeout(()=>{
                dummy.setAttribute('style', 'position: absolute; opacity: 0; transition: all 0.15s ease-in-out; color: #555555; background: #e2e2e2; border-radius: 6px; padding: 5px; top:'+(y - 30) +'px; left:'+(x)+'px;')
                setTimeout(()=>{
                dummy.remove()
                }, 150)
            }, 500)
        }
        if(!exist) {
            span()
        } else {
            exist.remove()
            span()
        }
    }
    return (
        <StyledHomeSection 
        id="home">
            <StyledHomeContainer>
                <div className='home-img-container'>
                    <img src='./home_background.png' className='animate__animated animate__zoomIn animate__slower'/>
                </div>

                <div className='home-text-container'>
                    <StyledHomeTitle>
                        <h1>
                            <span className='animate__animated animate__fadeIn animate__fast'>C</span>
                            <span className='animate__animated animate__fadeIn animate__fast'>H</span>
                            <span className='animate__animated animate__fadeIn animate__fast'>Z</span>
                            <span className='animate__animated animate__fadeIn animate__fast' style={{marginLeft:'40px'}}>I</span>
                            <span className='animate__animated animate__fadeIn animate__fast'>N</span>
                            <span className='animate__animated animate__fadeIn animate__fast'>U</span>
                            <ShibDog/>
                        </h1>
                        <p className='animate__animated animate__fadeIn animate__fast'>The first Chiliz <span>{word?.props?.children?.props?.children !== '0' ? word?.props?.children?.props?.children : ''}</span></p>
                    </StyledHomeTitle>
                    
                    <StyledHomeText>
                        <p className='text-2 animate__animated animate__fadeIn animate__fast'>JOIN OUR MISSION</p>
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
                                onClick={() => window.open('https://www.coingecko.com/en/coins/chiliz-inu', '_blank')}
                                >
                                View chart
                            </StyledHomeButton>
                        </div>
                        {/* <p className='text-3 animate__animated animate__fadeIn animate__fast'>Build, trust, educate, and bark our way through the Chiliz universe.</p> */}
                        <RocketDog/>

                    </StyledHomeText>
                        <p 
                        onClick={(evt) => copied(evt, dam_url)}
                        className='contract-address animate__animated animate__fadeIn animate__fast'><strong>CONTRACT ADDRESS: </strong><CopyToClipboard text={'0xF3928e7871eb136DD6648Ad08aEEF6B6ea893001'}><span>0xF3928e7871eb136DD6648Ad08aEEF6B6ea893001 <FontAwesomeIcon icon={faCopy} size='1x'/></span></CopyToClipboard> </p>

                </div>


            </StyledHomeContainer>


        </StyledHomeSection>
    );
}

export default HomeSection;
