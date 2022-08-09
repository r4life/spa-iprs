import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import {Box, Button, Stack, Typography, CardActionArea, Grid } from '@mui/material';

import Chip from '@mui/material/Chip';
import Modal from '@mui/material/Modal';

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

export default function ExerciseCard({exercise, index}) {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Grid 
      item 
      sm={4} 
      md={4} 
      key={index}
      justify="center"
    >
      <Card sx={{ 
        margin: 'auto',
        marginBottom: '30px'
        }}
      >
        <CardActionArea
          onClick={handleOpen}
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
          </Box>
        </Modal>
      </div>
    </Grid>
  );
}