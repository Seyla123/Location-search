import React from 'react'
import { Box } from "@mui/material";
import type { Place } from '../types/Place';
interface MapProps {
    place: Place | null;
}
function Map({place}: MapProps) {
  return (
    <Box sx={{ width: "100%", height: "100vh", backgroundColor:'gray' }}></Box>
  )
}

export default Map