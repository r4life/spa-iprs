import React, {useState} from 'react';
import vid from '../assets/vid01.mp4';
import Intro from './Intro.js';
import MainContent from './MainContent';

const Main = () => {
  const [intro, setIntro] = useState(true);

  const introClick = () => {
    setIntro(false)
  }

  return (
    <div class="main">
      <div class="overlay"></div>
      <div id="bg-vid">
        <video src={vid} autoPlay loop muted />
      </div>
      <div class="content">
        {intro
          ?<Intro introClick={introClick}/>
          :<MainContent />
        }
      </div>
    </div>
  )
}

export default Main