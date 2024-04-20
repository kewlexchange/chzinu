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
    background: linear-gradient(to bottom, #ffffff, #98c63c);

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
    width: 100%;
    display: flex;
    height: 100vh;
    overflow: hidden;
    align-items: flex-start;

`
export const StyledHowToBuySection = styled(StyledSection)`
    width: 80%;
    display: flex;
    height: 100vh;
`
export const StyledTokenomicsSection = styled(StyledSection)`
    width: 100%;
    display: flex;
    height: 120vh;
    align-items: flex-start;


    .tokenomics-cards-container{
        position: absolute;
        width: 100%;
        height: 60%;
        margin-top: 140px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
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
    border: 1px solid transparent;


    &:hover{
        border: 1px solid black;
        background-color: #98c63c;
        color: white;
        box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
    }

    &:active{
        color: #ce0001;
    }


`


export const StyledPageLine = styled('div')`
    position: relative;
    top: 0;
    width: 200%;
    background: #ce0001;
    border-top: 2px solid black;
    border-bottom: 2px solid black;
    display: flex;

    
    .line-row{
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        text-wrap: nowrap;
        overflow: hidden;
        animation: line-2 4s linear infinite;

        .line-item{
            width: 100%;
            margin: 0 180px;
            display: flex;
            align-items: center;
            justify-content: center;

            p{
                color: white;
                text-decoration: none;
                font-family: fantasy;
                font-family: monospace;

                font-weight: 600;
                font-size: 40px;
                // letter-spacing: 0.1em;
            }

            img{
                width: 80px;
            }
        }
    }


    @keyframes line-2{
        0% {
            transform: translateX(-100%);
        }
        100% {
            transform: translateX(0);
        }
    }

`


export const StyledRocketDog = styled('div')`
    .rocket-dog{
        position: absolute;
        right: 0;
        bottom: -50px;
        transform: rotate(-35deg); 
        width: 150px;
        transition: transform 0.3s ease, bottom 0.3s ease; /* Añadimos la propiedad bottom a la transición */

        &:hover {
            transform: scale(1.1) rotate(-35deg); /* Escalar al 110% y mantener la rotación */
            bottom: -40px; /* Mover hacia arriba */
        }
    }


    .bubble-dog{
        position: absolute;
        right: 0;
        z-index: 999999;
        bottom: 150px;
        display: inline-block;
        margin: 20px;
        text-align: center;
        font-family: "Press Start 2P", cursive;
        font-size: 16px;
        line-height: 1.3em;
        background-color: #fff;
        color: #000;
        padding: 12px;
        box-shadow: 0 -4px #fff, 0 -8px #000, 4px 0 #fff, 4px -4px #000, 8px 0 #000, 0 4px #fff, 0 8px #000, -4px 0 #fff, -4px 4px #000, -8px 0 #000, -4px -4px #000, 4px 4px #000;
        box-sizing: border-box;
        width: 200px;


        &:after{
            position: absolute;
            z-index: 999999;
            content: "";
            height: 4px;
            width: 4px;
            bottom: -8px;
            left: 90px; 
            background-color: #fff;
            box-shadow: 0 4px #000, 0 8px #000, 0 12px #000, 0 16px #000, -4px 12px #000, -8px 8px #000, -12px 4px #000, -4px 4px #fff, -8px 4px #fff, -4px 8px #fff, -4px 0 #fff, -8px 0 #fff, -12px 0 #fff;
            // transform: rotate(35deg); /* Rotar el piquito */

        }
    }
`


export const StyledShibDog = styled('div')`
    .shib-dog{
        position: absolute;
        top: 10%;
        right: 12%;
        width: 180px;
        transition: transform 0.3s ease, bottom 0.3s ease; /* Añadimos la propiedad bottom a la transición */
    }


        
    .bubble-dog{
        position: absolute;
        right: 18%;
        z-index: 999999;
        top: -2px;
        display: inline-block;
        margin: 20px;
        text-align: center;
        font-family: "Press Start 2P", cursive;
        font-size: 16px;
        line-height: 1.3em;
        background-color: #fff;
        color: #000;
        padding: 12px;
        box-shadow: 0 -4px #fff, 0 -8px #000, 4px 0 #fff, 4px -4px #000, 8px 0 #000, 0 4px #fff, 0 8px #000, -4px 0 #fff, -4px 4px #000, -8px 0 #000, -4px -4px #000, 4px 4px #000;
        box-sizing: border-box;
        width: 120px;

        &:after{
            position: absolute;
            z-index: 999999;
            content: "";
            height: 4px;
            width: 4px;
            bottom: -8px;
            left: 90px; 
            background-color: #fff;
            box-shadow: 0 4px #000, 0 8px #000, 0 12px #000, 0 16px #000, -4px 12px #000, -8px 8px #000, -12px 4px #000, -4px 4px #fff, -8px 4px #fff, -4px 8px #fff, -4px 0 #fff, -8px 0 #fff, -12px 0 #fff;
            // transform: rotate(35deg); /* Rotar el piquito */

        }
    }

    

`


export const StyledTokenomicCard = styled('div')`
    position: relative;
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
    border-radius: 20px;
    width: 400px;
    height: 300px;
    padding: 1em;
    display: flex; 
    flex-direction: column;
    align-items: center;
    justify-content:  flex-start;
    border: 1px solid black;
    transition: transform 0.3s ease; /* Añadimos la propiedad bottom a la transición */
    padding-top: 1em;
    margin: ${({cardnumber}) => cardnumber === '1' ? '20em 4em 0 0' : cardnumber === '3' ? '38em 0 0 4em' : '0'};
    background-color: white;
    color:black;
    &:hover {
        transform: scale(1.1); /* Escalar al 110% y mantener la rotación */
        z-index:999;

    }

    h2{
        font-family: monospace;
        font-family: fantasy;
        text-transform: uppercase;
        margin: 0;
        font-size: 2.5em;
        letter-spacing: 0.06em;
        font-weight: bold;
        color: black;
        text-align: left;
        width: 100%;
        margin-left: 1em;
    }   


    p{
        margin: 1em;
        font-family: monospace;
        text-transform: uppercase;
        margin: 1em;
        font-size: 1.5em;
        letter-spacing: 0.06em;
        font-weight: bold;
    }

    .budget{
        position: absolute;
        border-radius: 50%;
        width: 100px;
        bottom: -20px;
        right: -20px;

    }
`


export const StyledTokenomicDog = styled('div')`
    .tokenomic-dog{
        position: absolute;
        top: 0%;
        right: 0%;
        width: 400px;
        transition: transform 0.3s ease, bottom 0.3s ease; /* Añadimos la propiedad bottom a la transición */
    }



`
