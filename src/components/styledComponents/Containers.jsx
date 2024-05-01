import { Button } from "@mui/material";
import { styled } from "@mui/system";


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
    width: auto;
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
    z-index: 999; /* Asegura que el contenedor esté por encima de otros elementos */

    .logo-img{
        cursor: pointer;
        width: 70px;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
        &:hover{
            animation: logo-spin 1.2s;
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
            margin: 12px 5px;


            &:hover{
                background-color: #ce0001;
                color: white;
            }
        }
    
    }


    .navbarBurger{
        display: none;
    }

    @media(max-width: 800px){
        .navbarBurger{
            display: block;
        }
        .navbar{
            display: none;
        }
    }
    @media(max-width: 500px){
        top: 8%;
    }
`;

export const StyledHomeContainer = styled('div')`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;



    .home-text-container{
        width: 100%;
        height: 100%;
        padding-bottom: 3em;
        color: #393939;
        font-family: monospace;
        font-weight: bold;
        font-style: normal;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items:center;      
        
        .contract-address{
            font-size: 22px;
            cursor: pointer;
            padding: 0.5em;
            border: 1px solid black;
            box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
            background-color: rgb(255, 255, 255);
            border-radius: 8px;
            span{
                transition: all .2s ease;
                color: #ce0001;
                &:hover{
                    color: red;
                }
            }
            @media(max-width: 900px){
                margin:1em;
                font-size: 20px;
                text-align: center; 
            }
            @media(max-width: 500px){
                width: 80%;
                margin:1em;
                font-size: 20px;
                overflow: hidden; /* Oculta el texto que se desborda del contenedor */
                text-overflow: ellipsis; /
                text-align: center;
                
            }
        }


        @media(max-width: 1300px){
            padding-bottom: 0;
        }
    }




`;

export const StyledHomeTitle = styled('div')`
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-top: 7em;
    h1{
        width: 100%;
        text-align: center;

        span{
            color: #ce0001;
            text-shadow: 0 0.0377358491em 0 #000, 0.0125786164em 0.0377358491em 0 #000, 0.0125786164em -0.0125786164em 0 #000, -0.0125786164em 0.0125786164em 0 #000, -0.0125786164em -0.0125786164em 0 #000;
            font-family: monospace;
            letter-spacing: 0.02em;
            text-transform: uppercase;
            display: inline-block;
            font-size: 5em;
        }
    }

    .text-animated{
        width: 100%;
        margin-top: -60px;
        display: flex;
        justify-content: center;
        div{
            width: 470px;
            text-align: left;
            text-wrap: nowrap;
            p{
                font-size: 2.5em;
                font-family: monospace;

                span{
                    color: #ce0001;
                }
            }

        }
    }


    @media(max-width: 500px){
        h1{
            margin: 2em;

            span{
                letter-spacing: 0em;
                font-size: 3.5em;
            }
        }

        .text-animated{
            margin-top: -80px;
            div{
                width: 320px;
                text-align: left;
                text-wrap: nowrap;
                p{
                    font-size: 1.8em;
            
                    span{
                        color: #ce0001;
                    }
                }
    
            }
        }
    }

`

export const StyledHomeText = styled('div')`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-grow: 1;
    position: relative;


    .text-2{
        width: 100%;
        text-align: center;
        font-size: 40px;
        margin-top: 1.5em;
        margin-bottom: 0;
        font-family: monospace;

    }



    .buttons-container{
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        margin-bottom: 5em;
    }


    @media(max-width: 500px){
        .text-2{
            font-size: 30px;
        }
    }

`

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
    height: auto;
    overflow: hidden;
`

export const StyledAboutSection = styled(StyledSection)`
    width: 100%;
    display: flex;
    height: auto;
    align-items: center;
    overflow: hidden;
    flex-direction: column;
    padding-bottom: 2em;
    .about-us-container{

        width: 80%;
        height: 80%;
        margin-top: 4em;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
        border-radius: 20px;
        background: #ffffff;


        h2{
            font-family:  Impact, fantasy !important;
            text-transform: uppercase;
            font-size: 50px;
            letter-spacing: 0.1em;
            margin: 0;
            padding: 0.5em;

        }


        @media(max-width: 500px){
            h2{
                font-size: 40px;
            }
            #titleAccordeon{
                font-size: 22px !important;
            }
            #textAccordeon{
                font-size: 14px !important;
            }
        }

    }
`
export const StyledHowToBuySection = styled(StyledSection)`
    width: 80%;
    display: flex;
    height: 100vh;
`
export const StyledTeamSection = styled(StyledSection)`
    width: 100%;
    display: flex;
    height: auto;
    justify-content: flex-start;
    flex-direction: column;


    .team-cards-container{
        position: relative;
        width: 100%;
        height: 60%;
        display: flex;
        justify-content: space-around;
        align-items: flex-start;

        @media(max-width: 1300px){
            height: auto;
            flex-direction: column;
            align-items: flex-start;
        }
    }
`
export const StyledTokenomicsSection = styled(StyledSection)`
    width: 100%;
    display: flex;
    height: 120vh;
    align-items: flex-start;
    position: relative;
    padding-bottom: 3em;

    img{
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        top: -150px;
        width: 350px;
    }

    .tokenomics-pie-container{
        position: absolute;
        width: 100%;
        margin-top: 140px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        
        .pie-container{
            width: 80%;
            margin-top: 2em;
            h2{
                width: 100%;
                text-align:center;
                font-family: Impact, fantasy;
                text-transform: uppercase;
                font-size: 50px;
                letter-spacing: 0.1em;
                margin-top: 1em;
                margin-bottom: 0;
            }
            box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
            border-radius: 20px;
            background: #ffffff;
        }
    
        
    }

    @media(max-width: 1300px){
        img{
            left: 30%;
            transform: translateX(-30%);
        }
    }

    
    @media(max-width: 850px){
        height: 30vh;
        padding-bottom: 0;
        .tokenomics-pie-container{
            display: none;
        }
        img{
            left: 50%;
            transform: translateX(-50%);
        }
    }


    
`

export const StyledButtonIcon = styled(Button)`
    color: #ffffff;
    background-color: #ce0001;
    font-size: 1em;
    min-width: unset;
    width: 2em;
    margin-left: 0.5em;
    outline: none;
    &:hover{
        border: 1px solid black;
        background-color: #ce0001;
        color: white;
        box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
    }

    &:active{
        background-color: #ce0001;

    }
`;


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
    font-family: monospace !important;


    &:hover{
        border: 1px solid black;
        background-color: #98c63c;
        color: white;
        box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
    }

    &:active{
        color: #ce0001;
    }


    @media(max-width: 550px){
        font-size: 22px !important;
    }
    @media(max-width: 450px){
        font-size: 18px !important;
    }

`


export const StyledPageLine = styled('div')`
    position: relative;
    top: 0;
    width: 200%;
    background: #ff6b6b;
    border-top: 3px solid black;
    border-bottom: 3px solid black;
    display: flex;

    
    .line-row{
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        text-wrap: nowrap;
        animation: line-2 4s linear infinite;

        .line-item{
            width: 100%;
            margin: 0 200px;
            display: flex;
            align-items: center;
            justify-content: center;

            p{
                margin: 30px 0;
                font-family: "Luckiest Guy";
                font-weight: 700;
                font-style: normal;
                font-size: 40px;
                letter-spacing: 0.1em;
            }

            img{
                width: 80px;
            }
        }
    }


    @keyframes line-2{
        0% {
            transform: ${({direction}) => direction === 'left'  ? 'translateX(100%)' : 'translateX(-100%)'};
        }
        100% {
            transform: translateX(0);
        }
    }

`


export const StyledRocketDog = styled('div')`
    @media(max-width: 1300px){
        display: none;
    }

    .rocket-dog{
        position: absolute;
        right: 0;
        bottom: -180px;
        transform: rotate(-35deg); 
        width: 150px;
        transition: transform 0.3s ease, bottom 0.3s ease; /* Añadimos la propiedad bottom a la transición */
        cursor: pointer;

        &:hover {
            transform: scale(1.1) rotate(-35deg); /* Escalar al 110% y mantener la rotación */
            bottom: -185px; /* Mover hacia arriba */
        }
    }


    .bubble-dog{
        position: absolute;
        right: 0;
        z-index: 999999;
        bottom: 0px;
        display: inline-block;
        margin: 20px;
        text-align: center;
        font-family: monospace;
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
        right: 0%;
        width: 180px;
        transition: transform 0.3s ease, bottom 0.3s ease; /* Añadimos la propiedad bottom a la transición */
        cursor: pointer;
    }

        
    .bubble-dog{
        p{
            margin: 0;
        }
        position: absolute;
        right: 2%;
        z-index: 999999;
        top: -2px;
        justify-content: center;
        display: flex;
        align-items: center;
        margin: 20px;
        text-align: center;
        font-family: monospace;
        font-size: 20px;
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


        svg{
            font-size: 24px;
            cursor: pointer;
            margin: 4px;
            transition: all 0.2s ease;
            &:hover{
                color: #1c93e3;
            }
        }


        .medium{
            &:hover{
                background-color: black;
                color: white;
            }
        }

        
    }

    @media (max-width: 900px){
        .shib-dog{
            width: 140px;
        }

        .bubble-dog{
            width: 150px;
            font-size: 15px;

            svg{
                font-size: 20px;
            }

            &:after{
                position: absolute;
                z-index: 999999;
                bottom: -8px;
                left: 90px; 
                background-color: #fff;
                box-shadow: 0 4px #000, 0 8px #000, 0 12px #000, 0 16px #000, -4px 12px #000, -8px 8px #000, -12px 4px #000, -4px 4px #fff, -8px 4px #fff, -4px 8px #fff, -4px 0 #fff, -8px 0 #fff, -12px 0 #fff;
                // transform: rotate(35deg); /* Rotar el piquito */
    
            }
        }
    }

    @media (max-width: 700px){
        .shib-dog{
            top: 5%;
            width: 100px;
        }

        .bubble-dog{
            top: -10px;
            right: 50px;
            width: 100px;
            height: 25px;

            p{display: none;}

            svg{
                font-size: 20px;
            }
        }
    }

`


export const StyledTokenomicCard = styled('div')`
    position: relative;
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
    border-radius: 20px;
    width: 400px;
    height: auto;
    padding: 1em;
    display: flex; 
    flex-direction: column;
    align-items: center;
    justify-content:  flex-start;
    border: 1px solid black;
    transition: transform 0.3s ease; /* Añadimos la propiedad bottom a la transición */
    padding-top: 1em;
    z-index: 99999;
    margin: ${({cardnumber}) => cardnumber === '1' ? '20em 2em 0 2em' : cardnumber === '3' ? '34em 0 0 2em' : '4em 0 0 0'};
    background-color: white;
    color:black;
    &:hover {
        transform: scale(1.1); /* Escalar al 110% y mantener la rotación */
        z-index:999;
        .budget{
            animation: logo-spin 1.2s;
        }
    }

    h2{
        font-family:  Impact, fantasy !important;
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


    @media(max-width: 1300px){
        margin: 0;
        align-self: ${({cardnumber}) => cardnumber === '1' ? 'flex-start' : cardnumber === '3' ? 'flex-end' : 'center'};
        margin: ${({cardnumber}) => cardnumber === '1' ? '2em 0 0 5em' : cardnumber === '3' ? '2em 4em 0 0' : '2em 0 0 0'};
        h2{
            font-size: 2em;
        }
    }
    @media(max-width: 850px){
        width: auto;
        margin: 2em 2em 2em 2em;
        align-self: center;
        h2{
            font-size: 2em;
        }
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

    @media(max-width:850px){
        display: none;
    }

`

export const StyledShamanDog = styled('div')`
      .shamman-dog{
        position: absolute;
        margin-left: -2em;
        left: 0%;
        bottom: -50px;
        width: 550px;
        cursor: pointer;
    }

    @media(max-width: 1300px){
        display: none;
    }

`



export const StyledFooterSection = styled(StyledSection)`
    width: 70%;
    display: flex;
    height: auto;
    margin-top: 2em;
    padding-bottom: 1em;
    flex-direction: column;
    align-items: center;
    overflow: hidden;



    p{
        text-align: center;
        margin: 15px px;
    }

    img{
        width: 80px;
        border-radius: 50%;        
        &:hover{
            animation: logo-spin 1.2s;
        }
    }

    .contact-logos{
        height: auto;
        right: 0;
        position: absolute;
        display: flex;
        align-items: center;
        font-size: 50px;
        margin-right: 10px;

    }


    @media(max-width: 900px){
        width: 100%;
    }
`

