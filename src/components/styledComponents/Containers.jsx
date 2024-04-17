import { styled } from "@mui/system";

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


export const StyledXCard = styled('div')`
    border-radius: 0 !important;
    background-color: rgb(255, 255, 255);
    box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;    
    margin-top: 0;
    margin-bottom: 1.5rem;
    overflow:hidden;
`
export const StyledAppContainer = styled('div')`
    width: 100%;
    height: 100vh;
    overflow-y: scroll;
    background: linear-gradient(to bottom, #fcbb6b, #fdf8e5);

    &::-webkit-scrollbar {
        width: 0.5vw;
    }
    
    /* Track */
    &::-webkit-scrollbar-track {
        box-shadow: inset 0 0 4px #8B0000;
        border-radius: 0px;
    }
    
    &::-webkit-scrollbar-thumb {
        box-shadow: inset 4px 2px 12px 2px #8B0000;
        border-radius: 4px;
    }
    

`


export const StyledNavBar = styled('div')`
    width: 80%;
    height: 80%;
    margin: 0 auto;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;    
    background-color: rgb(255, 255, 255);
    border-radius: 8px;

    z-index: 999; /* Asegura que el contenedor esté por encima de otros elementos */
    padding: 20px; /* Ajusta el relleno según sea necesario */
`;

export const StyledHomeContainer = styled('div')`
    width: 80%;
    height: 80%;
    margin: 0 auto;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;    
    background-color: rgb(255, 255, 255);
    border-radius: 8px;

    z-index: 999; /* Asegura que el contenedor esté por encima de otros elementos */
    padding: 20px; /* Ajusta el relleno según sea necesario */
`;