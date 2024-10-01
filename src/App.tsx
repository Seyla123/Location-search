import './App.css'
import SearchLocation from './components/SearchLocation';
import Map from './components/Map';
import { ThemeProvider } from '@mui/material/styles';
import { Box, CssBaseline } from '@mui/material';
import theme from './theme/theme';
import type { Place } from './types/Place';
import { useState } from 'react';
function App() {
  const [place, setPlace] = useState<Place | null >(null);
  const handleOnClick = (selectedPlace: Place) =>{
    setPlace(selectedPlace)
  }
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ width: "100%", height: "100vh" ,backgroundColor:"green", display: "flex", flexDirection: "column", position: "relative"}}>
        <SearchLocation onPlaceClick={handleOnClick}/>
        <Map place={place}/>
      </Box>
    </ThemeProvider>
  )
}

export default App
