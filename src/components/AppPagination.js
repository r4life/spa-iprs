import React, { useState } from 'react';
import {Box, Pagination, Stack} from "@mui/material";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

// Added to make the pagination visible.
// Changing the color to white for black background
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const pageSize = 3;

const AppPagination = () => {
  const [pagination, setPagination] = useState({
    count: 0,
    from: 0,
    to: pageSize
  })

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
          variant="outlined" count={10}
        />
      </Stack>
    </ThemeProvider>
  )
}

export default AppPagination
