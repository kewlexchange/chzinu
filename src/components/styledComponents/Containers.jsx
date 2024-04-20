import { Button } from "@mui/material";
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
    min-height: 50vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background: linear-gradient(to bottom, #ffffff, #fdf8e5);

`


export const StyledNavBar = styled('div')`
    width: 30%;
    margin: 0 auto;
    position: absolute;
    top: 5%;
    left: 5%;
    transform: translate(-50%, -50%);
    box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;    
    background-color: rgb(255, 255, 255);
    border-radius: 20px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 0 10px 0 0;
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
    border: 1px solid black;
    .logo-img{
        cursor: pointer;
        width: 15%;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
        &:hover{
            animation: logo-spin 1.2s;
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
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        a{
        cursor: pointer;
            font-size: 18px;
            color: #ce0001;
            text-decoration: none;
            font-family: monospace;
            font-weight: bold;
            font-style: normal;
            transition: all 0.3s ease-in;
            border-radius: 15px;
            padding: 8px;
            margin: 12px 10px;


            &:hover{
                background-color: #ce0001;
                color: white;
            }
        }
    
    }

    z-index: 999; /* Asegura que el contenedor esté por encima de otros elementos */
`;

export const StyledHomeContainer = styled('div')`
    width: 100%;
    height: 70%;
    border-radius: 8px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;

    img{
        width: 800px;
        border-radius: 8px;

    }

    .home-text-container{
        width: 100%;
        height: 100%;
        color: #393939;
        text-decoration: none;
        font-family: monospace;
        font-weight: bold;
        font-style: normal;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        h1{
            width: 80%;
            margin-top: -5em;
            text-align:center;
            span{
                color: #ce0001;

                text-shadow: 0 0.0377358491em 0 #000, 0.0125786164em 0.0377358491em 0 #000, 0.0125786164em -0.0125786164em 0 #000, -0.0125786164em 0.0125786164em 0 #000, -0.0125786164em -0.0125786164em 0 #000;
                font-family: monospace;
                letter-spacing: 0.02em;
                text-transform: uppercase;
                display: inline-block;
                font-size: 130px;
            }

            img{
                position: absolute;
                top: 10%;
                width: 180px;
            }


        }

        p{
            color: black;
        }

        .contract-address{
            font-size: 22px;
            margin-top: -1.5em;
            margin-left: 3em;
            cursor: pointer;
            span{
                transition: all .2s ease;
                color: #ce0001;
                &:hover{
                    color: red;
                }
            }
        }

        .text-1{
            font-size: 40px;
            margin-top: -20px;
            margin-left: 4em;

            span{
                color: #ce0001;
            }
        }

        .text-2{
            text-align: center;
            margin: 0 3em -0.5em 0;
            font-size: 40px;
            overflow: hidden;

            
        }
        .rocket-dog{
            position: absolute;
            right: 0;
            bottom: -50px;
            transform: rotate(-35deg); /* Rotar 35 grados hacia la izquierda */
            width: 150px;
        }


        .buttons-container{
            width: 100%;
            margin: 0 12em 10em;
            display: flex;
            flex-direction: row;
            align-items: center;
        }
        
    }



`;


export const StyledSection = styled('div')`
    width: 80%;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    height: 100vh;
`

export const StyledHomeSection = styled(StyledSection)`
    width: 100%;
    display: flex;
    height: 100vh;
    overflow: hidden;
`

export const StyledAboutSection = styled(StyledSection)`
    width: 80%;
    display: flex;
    height: 100vh;
`
export const StyledHowToBuySection = styled(StyledSection)`
    width: 80%;
    display: flex;
    height: 100vh;
`
export const StyledTokenomicsSection = styled(StyledSection)`
    width: 80%;
    display: flex;
    height: 100vh;
`


export const StyledHomeButton = styled(Button)`
    width: 240px;
    padding: 0 30px;
    border-radius: 20px;
    font-size: 30px !important;
    margin: 10px 15px;
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
    color: white;
    background-color: #ce0001;
    font-family: monospace;


    &:hover{
        background-color: white;
        color: #ce0001;
        box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
    }

    &:active{
        color: #ce0001;
    }


`