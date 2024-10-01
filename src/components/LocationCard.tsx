import { Stack, Typography } from "@mui/material"
import { Place } from "../types/Place"

interface LocationCardProps {
    place: Place,
    onPlaceClick: (place: Place) => void,
}
function LocationCard({ place, onPlaceClick }: LocationCardProps) {
    return (
        <Stack
            gap={2}
            sx={{
                p: 2,
                borderRadius: '10px',
                backgroundColor: '#F5F4F7', // Light background color for better contrast
                transition: '0.3s', // Smooth transition for hover effects
                cursor: 'pointer',
                minHeight: '100px',
                '&:hover': {
                    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)', // Shadow on hover
                    borderColor: '#007bff', // Change border color on hover
                },
            }}
            onClick={() => onPlaceClick(place)}
        >
            <Typography
                noWrap
                variant="body1"
                textTransform="capitalize"
                fontWeight={400}
                sx={{
                    color: '#333', // Darker text color for better readability
                    fontSize: { xs: '1rem', sm: '1.2rem' }, // Responsive font size
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                }}
            >
                {place?.name}
            </Typography>
            <Stack>
                <Typography variant="body2">
                    {place?.latitude}
                </Typography>
                <Typography variant="body2" >
                    {place?.longitude}
                </Typography>
            </Stack>
        </Stack>
    )
}

export default LocationCard

