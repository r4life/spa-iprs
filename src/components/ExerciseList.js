import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import ExerciseCard from './ExerciseCard';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


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
        <p>{exercises.length} exercises found.</p>
        <Grid 
          justify = "center"
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