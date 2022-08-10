import React, {useEffect, useState} from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import {Box, Button, Stack, Typography, CardActionArea, Grid } from '@mui/material';

import Chip from '@mui/material/Chip';
import ModalComponent from './Modal.js';

import { fetchData, youtubeOptions } from '../utils/fetchData';

// Style for modal that will be displayed when user clicks the card
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  maxWidth: 1000,
  minWidth: 600,
  bgcolor: '#fff',
  border: '1px solid #333',
  boxShadow: 24,
  color: '#000',
  borderRadius: '20px',
  p: 4,
};

// ExerciseCard component that will be used by it's parent, 
// which is ExerciseList component
export default function ExerciseCard({exercise, index}) {
  const [open, setOpen] = useState(false);
  const [exerciseVideos, setExerciseVideos] = useState([]);
  const [modalOn, setModalOn] = useState(false)

  const handleOpen = () => {
    setOpen(true);
    setModalOn(true);
    console.log('exercise card clicked');
    fetchVideos();
  }
  
  const handleClose = () => {
    setOpen(false);
    setModalOn(false);
    console.log('modal closed');
    setExerciseVideos([]);
  };

  const fetchVideos = () => {
    const fetchExerciseVideo = async() => {
      const youtubeSearchUrl = 'https://youtube-v31.p.rapidapi.com';
      const exerciseVideosData = await fetchData(
        `${youtubeSearchUrl}/search?q=${exercise.name}&part=snippet%2Cid&maxResults=10`
        , youtubeOptions);
      console.log(exerciseVideosData.items);
      setExerciseVideos(exerciseVideosData.items);
      console.log(exerciseVideos);
    }
    fetchExerciseVideo();
  }

  useEffect(()=>{
    console.log(exerciseVideos);
  }, [exerciseVideos])



  return (
    <Grid 
      item 
      sm={4} 
      md={4} 
      key={index}
      justify="center"
    >
      <Card sx={{ margin: 'auto', marginBottom: '30px'}}>
        <CardActionArea
          onClick={()=>handleOpen()}
        >
          <CardMedia
            component="img"
            height="400"
            image={exercise.gifUrl}
            alt={exercise.name}
            loading="lazy" 
            sx={{
              boxShadow: '0'
            }}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div"
              sx={{
                textTransform: 'capitalize',
                textAlign: 'center'
              }}
            >
              {exercise.name}
            </Typography>

            <Stack 
              direction="row"
              spacing={1}
              sx={{
                marginTop: '30px',
                marginBottom: '30px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <Chip color="info" label={exercise.bodyPart}></Chip>
              <Chip color="success" label={exercise.equipment}></Chip>
              <Chip color="primary" label={exercise.target}></Chip>
            </Stack>
            
          </CardContent>
        </CardActionArea>
      </Card>
      <ModalComponent 
        handleClose={handleClose} 
        open={open} 
        style={style}
        exercise={exercise}
        exerciseVideo={exerciseVideos}
      />
    </Grid>
  );
}

//open, handleClose, style, exercise, exerciseVideos