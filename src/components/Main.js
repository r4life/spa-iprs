import React, {useState} from 'react';
import vid from '../assets/vid01.mp4';
import Intro from './Intro.js';
import MainContent from './MainContent';

const Main = () => {
  // useState is used to set the intro screen when
  // app starts and clicking this button will switch intro to false.
  const [intro, setIntro] = useState(true);

  // function that trigger when button in the Intro component is clicked
  // to change the state of intro to false from true and switch
  // to MainContent component
  const introClick = () => {
    setIntro(false)
  }

  return (
    <div class="main">
      {/* overlay to put dark layer on top of the video to make th
          texts on top of it more visible. */}
      <div class="overlay"></div>
      {/* Video is wrapped with a div because
          video tag doesn't let you define z-index */}
      <div id="bg-vid">
        <video src={vid} autoPlay loop muted />
      </div>

      {/* this is where the main content of the app will be contained. */}
      <div class="content">
        {/* This ternary operator will switch to MainContent when button 
            is clicked in the Intro component */}
        {intro
          ?<Intro introClick={introClick}/>
          :<MainContent />
        }
      </div>
    </div>
  )
}

export default Main