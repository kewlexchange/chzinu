import React, { useEffect, useRef } from "react";
import handleAnimationScroll from "../hooks/handleAnimationScroll";
import { StyledFlexFullCenterContainer, StyledTeamSection2, StyledXCard2 } from "../components/styledComponents/Containers";

export default function TeamSection() {
const { isVisible } = handleAnimationScroll('.target')
const audioRef = useRef(null);

useEffect(() => {
  audioRef.current.play();
}, []);

  return (
  <StyledTeamSection2>
    {/* <div className="target" style={{display:'flex', flexDirection:'column', alignItems:'center',marginBottom: '2em', height:'auto', width:'100%'}}> */}
      <h1 className={`animate__animated animate__fadeIn`}>YOU ARE THE TEAM</h1>
      <audio ref={audioRef} controls>
        <source src="ChilizInu.mp3" type="audio/mp4" />
        Your browser does not support the audio element.
      </audio>
      {/* <button onClick={playAudio}>Play</button>
      <button onClick={pauseAudio}>Pause</button> */}
    {/* </div> */}
    <StyledXCard2 className={`animate__animated animate__backInLeft target`}>
      <div>
        <h2>THE DEVELOPER</h2>
        <p>Pretends to be the pack's wise old hound.</p>
      </div>
      <img src="./developer.jpg" style={{marginLeft: '1em'}}/>
    </StyledXCard2>
    <StyledXCard2 className={`animate__animated animate__backInRight target`}>
      <img src="./artist.jpg" style={{marginRight: '1em'}}/>
      <div>
        <h2>THE ARTIST</h2>
        <p>Believes the future is in the paws of AI, started using AI to craft paw-traits. Now convinced no pup can out-paint</p>
      </div>
    </StyledXCard2>
    
    <StyledXCard2 className={`animate__animated ${isVisible[2] ? 'animate__backInLeft' : ''} target`} style={{visibility: isVisible[2] ? 'visible' : 'hidden'}}>
      <div>
        <h2>THE COMMUNITY PUP-MANAGER</h2>
        <p>Keeping the pack together, one howl at a time.</p>
      </div>
      <img src="./community.jpg" style={{marginLeft: '1em'}}/>

    </StyledXCard2>
    <StyledXCard2 className={`animate__animated ${isVisible[3] ? 'animate__backInRight' : ''} target`} style={{visibility: isVisible[3] ? 'visible' : 'hidden'}}>
      <img src="./daytrader.jpg" style={{marginRight: '1em'}}/>
      <div>
        <h2>DAY TRADER</h2>
        <p> Playing fetch with the market always brings back more!</p>
      </div>
    </StyledXCard2>
    <StyledXCard2 className={`animate__animated ${isVisible[4] ? 'animate__backInLeft' : ''} target`} style={{visibility: isVisible[4] ? 'visible' : 'hidden'}}>
      <div>
        <h2>THE NETWOOFKER</h2>
        <p>Connecting pups and people in the Chiliz Inu pack.</p>
      </div>
      <img src="./netwoofker.jpg" style={{marginLeft: '1em'}}/>
    </StyledXCard2>
    <StyledXCard2 className={`animate__animated ${isVisible[5] ? 'animate__backInRight' : ''} target`} style={{visibility: isVisible[5] ? 'visible' : 'hidden'}}>
      <img src="./datadog.jpg" style={{marginRight: '1em'}}/>
      <div>
        <h2>THE DATA DOG</h2>
        <p>Diggin up the facts and fetching the figures.</p>
      </div>
    </StyledXCard2>
    <StyledXCard2 className={`animate__animated ${isVisible[6] ? 'animate__backInLeft' : ''} target`} style={{visibility: isVisible[6] ? 'visible' : 'hidden'}}>
      <div>
        <h2>THE BARKETER</h2>
        <p>Might be better off chasing his tail, but somehow became the pack's voice. Now every squirrel in the park knows us.</p>
      </div>
      <img src="./barketer.jpg" style={{marginLeft: '1em'}}/>
    </StyledXCard2>
    <StyledXCard2 className={`animate__animated ${isVisible[7] ? 'animate__backInRight' : ''} target`} style={{visibility: isVisible[7] ? 'visible' : 'hidden'}}>
      <img src="./investor.jpg" style={{marginRight: '1em'}}/>
      <div>
        <h2>THE INVESTOR</h2>
        <p>Invested his treat stash to get the ball rolling.</p>
      </div>
    </StyledXCard2>
    <StyledXCard2 className={`animate__animated ${isVisible[8] ? 'animate__backInLeft' : ''} target`} style={{visibility: isVisible[8] ? 'visible' : 'hidden'}}>
      <div>
        <h2>THE HOWLDER</h2>
        <p>Sniffing out the best opportunities to bury his bones... I mean coins!</p>
      </div>
      <img src="./howlder.jpg" style={{marginLeft: '1em'}}/>
    </StyledXCard2>
  </StyledTeamSection2>);
}
