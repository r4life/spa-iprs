import React from 'react';
import Nav from './components/Nav.js';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

import vid from './assets/vid01.mp4';
import './index.css';

const app = () => {

  return (
    <div class="main">
      <div class="overlay"></div>
      <video src={vid} autoPlay loop muted />
      <div class="content">
        <h1>Get Fit Now</h1>
        <br/>
        <p>¨Some people want it to happen, some wish it would happen, others make it happen.¨ – Michael Jordan</p>
      </div>

    </div>

  )
}

export default app