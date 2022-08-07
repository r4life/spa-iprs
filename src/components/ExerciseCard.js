import React from 'react';
import {Button, Stack, Typography} from '@mui/material';

const ExerciseCard = ({exercise}) => {
  return (
    <div>
      <img src={exercise.gifUrl} alt={exercise.name} loading="lazy" />
      <Stack direction="row">
        <Button sx={{
          ml:'21px', 
          color:'#fff', 
          background: '#ffa9a9', 
          fontSize: '14px', 
          borderRadius: '20px',
          textTransform: 'capitalize'
          }}
        >
          {exercise.bodyPart}
        </Button>
        <Button sx={{
          ml:'21px', 
          color:'#fff', 
          background: '#fcc757', 
          fontSize: '14px', 
          borderRadius: '20px',
          textTransform: 'capitalize',
          textDecoration: 'none'
          }}
        >
          {exercise.equipment}
        </Button>
      </Stack>
      <Typography 
        ml="21px" 
        color="#000" 
        fontWeight="bold" 
        mt="11px" 
        pb="10px" 
        textTransform="capitalize"
        fontSize="22px"
      >
        {exercise.name}
      </Typography>
    </div>
  )
}

export default ExerciseCard