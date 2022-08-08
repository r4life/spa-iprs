import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import ExerciseCard from './ExerciseCard';

const ExerciseList = ({exercises}) => {

  const currentExercises = (
    <>
      {exercises.map((exercise, index) => <ExerciseCard key={index} exercise={exercise}/>)}
    </>
  )

  return (
    <>
      <Box sx={{ flexGrow: 1,
                 margin: '0 auto'        
              }} 
            maxWidth= "xl"
      >
        <Typography
          sx={{
            margin: '30px',
          }}
          variant="h5" 
          gutterBottom component="div"
        >
          {exercises.length} exercises found.</Typography>
        <Grid 
          container
          spacing={{ xs: 2, md: 3 }} 
          columns={{ xs: 4, sm: 8, md: 12 }}>
          {currentExercises}
        </Grid>
      </Box>
    </>
  )

}

export default ExerciseList;