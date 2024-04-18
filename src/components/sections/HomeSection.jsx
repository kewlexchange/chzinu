import React from 'react';
import { StyledHomeContainer, StyledHomeSection, StyledSection } from '../styledComponents/Containers';

const HomeSection = () => {
    return (
        <StyledHomeSection id="home">
            <StyledHomeContainer>
                <img src='./home_background.jpeg' className='animate__animated animate__zoomIn animate__slower'/>

                <div className='home-text-container'>
                    <h1>
                        <span className='animate__animated animate__zoomInDown animate__fast'>C</span>
                        <span className='animate__animated animate__zoomInDown animate__fast'>H</span>
                        <span className='animate__animated animate__zoomInDown animate__fast'>Z</span>
                        <span className='animate__animated animate__zoomInDown animate__fast' style={{marginLeft:'40px'}}>I</span>
                        <span className='animate__animated animate__zoomInDown animate__fast'>N</span>
                        <span className='animate__animated animate__zoomInDown animate__fast'>U</span>
                    </h1>
                    <p>Build, trust, educate, and bark our way through the Chiliz universe. </p>
                    <p>ChzInu isn’t just a meme — we’re a community on a mission.</p>
                    <p>Everyone’s welcome in our cozy corner of Web3 #SportFi.</p>
                </div>
            </StyledHomeContainer>


        </StyledHomeSection>
    );
}

export default HomeSection;
