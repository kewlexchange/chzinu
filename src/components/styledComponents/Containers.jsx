import { styled } from "styled-components";

// border-radius: 8px
// background-color: rgb(255, 255, 255);
// box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
// border: 1px solid lightgray;


export const StyledFlexCenterContainer = styled('div')`
    display: flex;
    align-items: center;
    width: 100%;
`

export const StyledFlexFullCenterContainer = styled('div')`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%
`

export const StyledFlexBetweenContainer = styled('div')`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`


export const StyledCard = styled('div')`
    border-radius: 0 !important;
    background-color: rgb(255, 255, 255);
    box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;    
    margin-top: 0;
    margin-bottom: 1.5rem;
`



export const StyledHeaderPage = styled('div')`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: rgb(255, 255, 255);
    box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;

    padding: 0.5em 2em 0.5em 1em;
    margin: 2rem 2rem 0 2rem;


    h1{
        font-size: 1.8em;
    }
`;


export const StyledGridPageContainer = styled('div')`
    display: grid;
    grid-template-columns: auto 1fr;
    min-height: calc(100VH - 82px);
    margin: 1rem 2rem 0 2rem;
`;


export const StyledPageContentContainer = styled('div')`
    margin-left: 1em;

`;



export const StyledPoweredByContainer = styled('div')`
    width: 200px;
    margin: 0 auto;
    padding-bottom: 2em;
`;



