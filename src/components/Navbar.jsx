import React from 'react';
import { StyledNavBar } from './styledComponents/Containers';

const Navbar = () => {
    return (
        <StyledNavBar className='animate__animated animate__fadeInDown animate__faster'>
            <div className='logo-img'>
                <img src='./coin.jpg' alt='no-logo'/>
            </div>
            <div className='navbar-items'>
                <a href="#about">About</a>
                <a href="#tokenomics">Tokenomics</a>
                <a href="https://medium.com/@chilizinu/introducing-chzinu-the-meme-tastic-reverse-rug-token-b61b80a6028d" target='blank'>Whitepaper</a>
                {/* <a href="#buy" target='blank'>Buy</a> */}
            </div>

        </StyledNavBar>
    );
}

export default Navbar;
