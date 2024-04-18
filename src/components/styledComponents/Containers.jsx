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
    display: flex;
    align-items: center;
    justify-content: center;
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
    width: 35%;
    margin: 0 auto;
    position: absolute;
    top: 5%;
    transform: translate(-50%, -50%);
    box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;    
    background-color: rgb(255, 255, 255);
    border-radius: 20px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 0 10px 0 0;

    .logo-img{
        cursor: pointer;
        width: 20%;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;

        &:hover{
            animation: logo-spin 1s;
        }
              
        @keyframes logo-spin {
            from {
                transform: rotate(0deg);
            }
            to {
                transform: rotate(360deg);
            }
        }

        img{
            position: absolute;
            width: 150% !important;
            border-radius: 50%;


        }
    }

    .navbar-items{
        cursor: pointer;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        a{
            color: #ce0001;
            text-decoration: none;
            font-family: "Varela Round", sans-serif;
            font-weight: bold;
            font-style: normal;
            transition: all 0.3s ease-in;
            border-radius: 15px;
            padding: 8px;
            margin: 12px 20px;


            &:hover{
                background-color: #ce0001;
                color: white;
            }
        }
    
    }

    z-index: 999; /* Asegura que el contenedor esté por encima de otros elementos */
`;

export const StyledHomeContainer = styled('div')`
    width: 80%;
    height: 80%;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;    
    // background-color: rgb(255, 255, 255);
    border-radius: 8px;

`;