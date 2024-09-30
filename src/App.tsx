import './App.css'
import SearchLocation from './components/SearchLocation';
import Map from './components/Map';
import { ThemeProvider } from '@mui/material/styles';
import { Stack, CssBaseline } from '@mui/material';
import theme from './theme/theme';
import type { Place } from './types/Place';
import { useState } from 'react';
function App() {
  const [place, setPlace] = useState<Place | null>([]);
  const handleOnClick = (selectedPlace: Place) =>{
    setPlace(selectedPlace)
  }
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Stack direction="row" gap={1}>
        <SearchLocation onPlaceClick={handleOnClick}/>
        <Map place={place}/>
      </Stack>
    </ThemeProvider>
  )
}

export default App
