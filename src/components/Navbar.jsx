import React from 'react';
import { StyledNavBar } from './styledComponents/Containers';
import useScrollClick from '../hooks/useScrollClick';

const Navbar = () => {
    const {scrollToTeam} = useScrollClick()
    return (
        <StyledNavBar className='animate__animated animate__fadeInDown animate__faster'>
            <div className='logo-img'>
                <img src='./coin.jpg' alt='no-logo' onClick={scrollToTeam}/>
            </div>
            <div className='navbar-items'>
                <a href="#about">ABOUT</a>
                <a href="#tokenomics">WOOF-NOMICS</a>
                <a href="https://medium.com/@chilizinu/introducing-chzinu-the-meme-tastic-reverse-rug-token-b61b80a6028d" target='blank'>WOOFPAPER</a>
                <a title="Coming soon">PUPPY GUIDE</a>
                {/* <a href="#buy" target='blank'>Buy</a> */}
            </div>

        </StyledNavBar>
    );
}

export default Navbar;
