import React, {useEffect, useState} from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import {Box, Button, Stack, Typography, CardActionArea, Grid } from '@mui/material';

import Modal from '@mui/material/Modal';
import Chip from '@mui/material/Chip';
import ModalComponent from './Modal.js';

import { fetchData, youtubeOptions } from '../utils/fetchData';

// Style for modal that will be displayed when user clicks the card
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  maxWidth: '700px',
  minWidth: '300px',
  bgcolor: '#fff',
  border: '1px solid #333',
  boxShadow: 24,
  color: '#000',
  borderRadius: '20px',
  p: 4,
};

// ExerciseCard component that will be used by ExerciseList.js component, 
// exercise props is received to fetch the videos.
// When fetch receives the data from the API, it will set exerciseVideos state.
// This state will be used 
export default function ExerciseCard({exercise, index}) {
  const [open, setOpen] = useState(false);
  const [exerciseVideos, setExerciseVideos] = useState([]);

  const handleOpen = () => {
    setOpen(true);
    fetchVideos();
  }
  
  const handleClose = () => {
    setOpen(false);
    console.log('modal closed');
    setExerciseVideos([]);
  };

  // Making the fetch request to RapidAPI to get JSON response of 10 videos 
  // searched with exercise.name as the query word.
  // This will set the exerciseVideos using the response.
  const fetchVideos = () => {
    const fetchExerciseVideo = async() => {
      const youtubeSearchUrl = 'https://youtube-v31.p.rapidapi.com';
      const exerciseVideosData = await fetchData(
        `${youtubeSearchUrl}/search?q=${exercise.name}&part=snippet%2Cid&maxResults=10`
        , youtubeOptions);
      setExerciseVideos(exerciseVideosData.items);
    }
    fetchExerciseVideo();
  }

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
              <Chip
                sx={{
                  textTransform: 'capitalize',
                  textAlign: 'center'
                }} 
                color="info" 
                label={exercise.bodyPart}></Chip>
              <Chip
                sx={{
                  textTransform: 'capitalize',
                  textAlign: 'center'
                }} 
                color="success" 
                label={exercise.equipment}></Chip>
              <Chip 
                sx={{
                  textTransform: 'capitalize',
                  textAlign: 'center'
                }} 
                color="secondary" 
                label={exercise.target}></Chip>
            </Stack>
            
          </CardContent>
        </CardActionArea>
      </Card>

      {/* Tried to make this modal part to be placed in a separate 
       component but there was issue with state of exerciseVideos staying stale.
       It was placed here and everything worked fine again.*/}
      <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography 
            id="modal-modal-title" 
            variant="h5" 
            sx={{
              textTransform: 'capitalize',
              textAlign: 'center',
              marginBottom: 3
            }}
          >
            {exercise.name}
          </Typography>
          <Card>
            <CardMedia
              component="img"
              image={exercise.gifUrl}
              sx={{
                maxWidth: '100%',
              }}
            / >
          </Card>
          <Typography 
            id="modal-modal-description" 
            sx={{ 
              mt: 2,
              mb: '30px',
              textAlign: 'center',
            }}
          >
            
          </Typography>
          <Stack              
            direction="row"
            spacing={1}
            sx={{
              marginTop: '30px',
              marginBottom: '30px',
              margin: 'auto',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              
            }}
          >
            <Chip
              sx={{
                textTransform: 'capitalize',
                textAlign: 'center'
              }} 
              color="info" 
              label={exercise.bodyPart}></Chip>
            <Chip
              sx={{
                textTransform: 'capitalize',
                textAlign: 'center'
              }} 
              color="success" 
              label={exercise.equipment}></Chip>
            <Chip 
              sx={{
                textTransform: 'capitalize',
                textAlign: 'center'
              }} 
              color="secondary" 
              label={exercise.target}></Chip>
          </Stack>
          <Typography>
            {/* Mapping out the exerciseVideos listing them out 
            in horizontally listed cards. Clicking the card
            will open up a new tab in the browser and directed to the
            link */}
            <div style={{ width: '95%', margin: 'auto'}}>
              <Stack
                Container 
                direction={'row'} 
                mt={4} 
                spacing={2} 
                ml={2}
                sx={{
                  height: 'auto',
                  overflow: 'auto',
                  backgroundcolor: 'white'
                }}
              >
                {exerciseVideos?.map((item, index)=>(
                  <Box
                    sx={{
                      minWidth:"300px",
                      marginBottom: '20px',
                    }}
                  >
                    <Card
                      sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItem: 'center'
                      }}
                    >
                      <CardActionArea
                        key={index}
                        href={`http://www.youtube.com/watch?v=${item.id.videoId}`}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <CardMedia 
                          component="img"
                          alt={item.snippet.title}
                          loading="lazy"
                          image={item.snippet.thumbnails.high.url}
                        />
                        <div style={{padding: '10px'}}>
                          <Typography 
                            noWrap
                            variant="h6" 
                            color="#000"
                            sx={{
                              maxWidth: '25ch',
                              overflow: 'hidden'
                            }}
                            >
                            {item.snippet.title}
                          </Typography>
                          <Typography 
                            noWrap
                            variant="h9" 
                            color="#666"
                            sx={{
                              maxWidth: '25ch',
                              overflow: 'hidden'
                            }}
                            >
                            {item.snippet.channelTitle}
                          </Typography>
                        </div>
                      </CardActionArea>
                    </Card>
                  </Box>
                ))}
              </Stack>
            </div>

          </Typography>
        </Box>
      </Modal>
    </div>
    </Grid>
  );
}

//open, handleClose, style, exercise, exerciseVideos