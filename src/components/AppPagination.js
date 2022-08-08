import React, { useEffect, useState } from 'react';
import {Box, Pagination, Stack} from "@mui/material";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

// Added to make the pagination visible.
// Changing the color to white for black background.
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});


// Setting for how many exercises to be listed per page
const pageSize = 9;

const AppPagination = ({exercises, setDisplayedExercises}) => {
  const [pagination, setPagination] = useState({
    count: 0,
    from: 0,
    to: pageSize
  })

  // Object to store exercises that will be displayed on the page
  // according to clicked pagination number
  const service = {
    getData: ({from, to}) => {
      return new Promise((resolve, reject) => {
        const data = exercises.slice(from, to);
        resolve({
          count: exercises.length,
          data: data
        })
      });
    }
  }

  // initialising pagination when the app starts
  useEffect(()=>{
    service.getData({from: pagination.from, to: pagination.to})
      .then(response => {
        setPagination({...pagination, count: response.count})

        // sets the sliced exercise to the displayedExercises
        setDisplayedExercises(response.data)
    });
  },[pagination.from, pagination.to, exercises])

  // when left or right button is clicked, this function
  // adds or subtracts by for the given page number.
  // The value is then multiplied by pageSize.
  // if total number of exercises is 10 and pageSize is 3,
  // when user clicks 1, the displayed exercises should be 1 - 3
  const handlePageChange = (event, page) => {
    console.log(page)
    const from = (page - 1) * pageSize;
    const to = (page - 1) * pageSize + pageSize;

    setPagination({...pagination, from: from, to: to});
  }

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Stack justifyContent={"center"} alignItems="center" display={"flex"}
        sx={{
          margin: "20px 0px",
          backgroundColor: 'grey'
        }}
      >

        <Pagination 
          variant="outlined" 
          count={Math.ceil(pagination.count / pageSize)}
          onChange={handlePageChange}
        />

      </Stack>
    </ThemeProvider>
  )
}

export default AppPagination
