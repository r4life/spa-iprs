
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import ExerciseList from './ExerciseList.js';

import Button from '@mui/material/Button';

const Intro = ({introClick}) => {

  return (
    <div id="intro">
      <p>¨Some people want it to happen, some wish it would happen, others make it happen.¨ – Michael Jordan</p>

      <br/>
      <h1>Get Fit Now!</h1>
      <br/>
      <Button onClick={introClick} startIcon={<FitnessCenterIcon />} variant="contained" size="large">Let's go!</Button>
      <br/>
    </div>
  )
}

export default Intro