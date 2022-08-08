import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import {Button, Stack, Typography} from '@mui/material';
import { CardActionArea, Grid } from '@mui/material';
import { experimentalStyled as styled } from '@mui/material/styles';

export default function ExerciseCard({exercise, index}) {
  return (
    <Grid 
      item 
      sm={4} 
      md={4} 
      key={index}
      justify="center"
    >
        <Card sx={{ maxWidth: 400 }}>
          <CardActionArea
            onClick={()=>console.log('clicked')}
          >
            <CardMedia
              component="img"
              height="300"
              image={exercise.gifUrl}
              alt={exercise.name}
              loading="lazy" 
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {index} {exercise.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over 6,000
                species, ranging across all continents except Antarctica
              </Typography>

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
              
            </CardContent>
          </CardActionArea>
        </Card>
    </Grid>
  );
}