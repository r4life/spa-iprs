import React, {useState, useEffect} from 'react';
import { CssBaseline, Box, Button, Stack, TextField, Typography, Container} from '@mui/material';

import ExerciseList from './ExerciseList.js';
import AppPagination from './AppPagination.js';

import ExerciseJSON from '../assets/json/exercises.json';

const MainContent = () => {
  const [search, setSearch] = useState('');
  const [exercises, setExercises] = useState(ExerciseJSON);
  const [displayedExercises, setDisplayedExercises] = useState([]);

  // Search by .filter method when search button is clicked.
  // It sets the search back to empty input field and sets
  // the list of exercises
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
      <CssBaseline />
      <Container maxWidth="sm">
        <Typography 
          varaint="h1"
          align="center"
          color="#fff"
          sx={{
            fontSize: '30px',
            marginTop: '250px',
            marginBottom: '20px'
          }}
        >
          Find the exercises that fits you!
        </Typography>
      </Container>

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
            borderRadius: '40px',
            padding: '20px'
          }}
          variant="text"
          onClick={handleSearch}
        >
          Search
        </Button>
      </Box>
      
      <ExerciseList totalNumber={exercises.length} exercises={displayedExercises} />
      <AppPagination setDisplayedExercises={(e) => setDisplayedExercises(e)} exercises={exercises}/>

    </Stack>
  );
}

export default MainContent;