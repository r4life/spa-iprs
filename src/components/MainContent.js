import React, {useState, useEffect} from 'react';
import { Box, Button, Stack, TextField, Typography} from '@mui/material';
import Nav from './Nav.js';
import Search from './Search.js';
import ExerciseList from './ExerciseList.js';


import ExerciseJSON from '../assets/json/exercises.json';

const MainContent = () => {
  const [search, setSearch] = useState('');
  const [exercises, setExercises] = useState(ExerciseJSON);

  const handleSearch = async () => {
    if(search) {
      const searchedExercises = ExerciseJSON.filter(
        (exercise) => exercise.name.toLowerCase().includes(search)
        || exercise.target.toLowerCase().includes(search)
        || exercise.equipment.toLowerCase().includes(search)
        || exercise.bodyPart.toLowerCase().includes(search)
      )
      setSearch('');
      setExercises(searchedExercises);
    }
  }

  return (
      <Stack 
        alignItems="center" 
        justifyContent="start" 
        zIndex="10"
        overflow="scroll"
        width="100%"
      >
        <Typography 
          fontWeight={700} 
          sx={{fontSize: {lg: '44px', xs: '30px'}}}
          mb="50px"
          textAlign="center"
        >
          Find a exercise that fits you!
        </Typography>

        <Box position="relative" mb="72px">
          <TextField
            sx={{
              input: { fontWeight: '700', 
                      border: 'none', 
                      borderRadius:'4px'},
              width: { lg: '800px', xs: '350px'},
              backgroundColor: '#fff',
              borderRadius: '40px'
            }}
            height="76px"
            value={search}
            onChange={(e) => { setSearch(e.target.value.toLowerCase()) }}
            placeholder = "Search Exercises"
            type="text"
          />
          <Button className="search-btn"
            sx={{
              ':hover':{
                bgcolor: '#f1f1f1',
                color: '#FF2625',
              },
              bgcolor: '#FF2625',
              color: '#fff',
              textTransform: 'none',
              width: {lg: '175px', xs: '80px'},
              fontSize: { lg: '20px', xs: '16px'},
              height: '56px',
              position: 'absolute',
              right: '0',
              borderRadius: '40px'
            }}
            variant="text"
            onClick={handleSearch}
          >
            Search
          </Button>
        </Box>

        <ExerciseList exercises={exercises} />

      </Stack>
  );
}

export default MainContent;