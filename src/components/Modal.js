import React, {useEffect} from 'react'
import Modal from '@mui/material/Modal';
import {Box, Stack, Typography, Card, CardMedia, Chip, Button } from '@mui/material';

const ModalComponent = ({open, handleClose, style, exercise, exerciseVideos}) => {

  useEffect(()=>{
    console.log(exerciseVideos);
  }, [exerciseVideos])

  return (
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
            variant="h3" 
            component="h2"
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
              alt="random"
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
            <Chip color="info" label={exercise.bodyPart}></Chip>
            <Chip color="success" label={exercise.equipment}></Chip>
            <Chip color="primary" label={exercise.target}></Chip>
          </Stack>
          <Typography>
            Youtube videos
          </Typography>
          <p>
            {exerciseVideos ? 'None fetched' : 'We got some ' + exerciseVideos}
          </p>
          <Typography>
            {exerciseVideos?.slice(0, 6).map((item, index)=>(
              <a 
                key={index}
                href={`http://www.youtube.com/watch?v=${item.video.videoId}`}
                target="_blank"
                rel="noreferrer"
              >
                <img src={item.video.thumbnails[0].url} alt={item.video.title} />
                <Box>
                  <Typography variant="h5" color="#000">
                    {item.video.title}
                  </Typography>
                </Box>
              </a>
            ))}
          </Typography>
          <Button onClick={()=>console.log(exerciseVideos)}>Click</Button>
        </Box>
      </Modal>
    </div>
  )
}

export default ModalComponent


