import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import ExerciseCard from './ExerciseCard';

const ExerciseList = ({exercises, totalNumber}) => {

  // Mapping out the exercises array using ExerciseCard component
  const currentExercises = (
    <>
      {exercises.map((exercise, index) => <ExerciseCard key={index} exercise={exercise}/>)}
    </>
  )

  return (
    <>
      <Box sx={{ flexGrow: 1,
                 margin: '0 20px 0 20px'        
              }} 
            maxWidth= "xl"
      >
        <Typography
          sx={{
            margin: '30px',
          }}
          variant="h5" 
          component="div"
          gutterBottom 
        >
          {totalNumber} exercises found.</Typography>
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