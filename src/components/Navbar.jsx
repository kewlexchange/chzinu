import React, { useState } from 'react';
import { StyledButtonIcon, StyledNavBar } from './styledComponents/Containers';
import useScrollClick from '../hooks/useScrollClick';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars} from '@fortawesome/free-solid-svg-icons';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';

const Navbar = () => {
    const {scrollToTeam} = useScrollClick()
    return (
        <StyledNavBar className='animate__animated animate__fadeInDown animate__faster'>
            <div className='logo-img'>
                <img src='./coin.jpg' alt='no-logo' onClick={scrollToTeam}/>
            </div>
            <div className={`navbar-items navbar`}>
                <a href="#about">ABOUT</a>
                <a href="#tokenomics">WOOF-NOMICS</a>
                <a href="https://medium.com/@chilizinu/introducing-chzinu-the-meme-tastic-reverse-rug-token-b61b80a6028d" target='blank'>WOOFPAPER</a>
                <a title="Coming soon">PUPPY GUIDE</a>
                {/* <a href="#buy" target='blank'>Buy</a> */}
            </div>
            <div className='navbarBurger'>
                <PopupState variant="popover" popupId="demo-popup-menu" >
                {(popupState) => (
                    <React.Fragment>
                        <StyledButtonIcon
                            {...bindTrigger(popupState)}
                            style={{fontSize: '18px', margin: '0.5em 1em 0.5em 1.5em'}}
                            variant='contained'
                        >
                            <FontAwesomeIcon size='1x' icon={faBars}/>
                        </StyledButtonIcon>
                    <Menu {...bindMenu(popupState)}>
                        <MenuItem onClick={() => {scrollToTeam('about')}}>ABOUT</MenuItem>
                        <MenuItem onClick={() => scrollToTeam('pieContainer')}>WOOF-NOMICS</MenuItem>
                        <MenuItem onClick={() => window.open('https://medium.com/@chilizinu/introducing-chzinu-the-meme-tastic-reverse-rug-token-b61b80a6028d')}>WOOFPAPER</MenuItem>
                        {/* <MenuItem title='Coming soon'>PUPPY GUIDE</MenuItem> */}
                    </Menu>
                    </React.Fragment>
                )}
            </PopupState>

            </div>

        </StyledNavBar>
    );
}

export default Navbar;
