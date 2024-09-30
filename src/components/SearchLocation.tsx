import { useState } from 'react'
import {
    Box,
    Stack,
    Typography,
    Paper,
    InputBase,
    IconButton,
} from '@mui/material'
import { Search as SearchIcon, Menu as MenuIcon } from '@mui/icons-material';
import { Place } from '../types/Place';

interface LocationSearchProps {
    onPlaceClick: (place: Place) => void,
}
function SearchLocation({ onPlaceClick }: LocationSearchProps) {

    const [searchValue, setSearchValue] = useState('');
    const handleSelectPlace = (place: Place) => {
        onPlaceClick(place);
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(event.target.value);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log('Search Button Clicked', searchValue);
    };
    return (
        <Box
            sx={{
                width: '100%',
                minWidth: 400,
                maxWidth: 500,
                height: '100vh',
                p: { xs: 2, sm: 3 }, // Responsive padding
            }}
        >
            <Stack direction="column" gap={3}>
                {/* Search Text Field */}
                <Paper
                    onSubmit={handleSubmit}
                    component="form"
                    sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', minWidth: '100%' }}
                >
                    <IconButton sx={{ p: '10px' }} aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <InputBase
                        sx={{ ml: 1, flex: 1 }}
                        placeholder="Search Google Maps"
                        inputProps={{ 'aria-label': 'search google maps' }}
                        value={searchValue}
                        onChange={handleChange}
                    />
                    <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
                        <SearchIcon />
                    </IconButton>
                </Paper>
                {/* Search Results */}
                <Stack gap={2} >
                    <Typography
                        variant="h6"
                        sx={{
                            fontSize: { xs: '1.2rem', sm: '1.5rem' }  // Responsive font size
                        }}
                    >
                        Search Results
                    </Typography>
                    <Stack
            gap={1}
            sx={{
                border: '0.5px solid gray',
                p: 2,
                borderRadius: '10px',
                backgroundColor: '#f9f9f9', // Light background color for better contrast
                transition: '0.3s', // Smooth transition for hover effects
                '&:hover': {
                    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)', // Shadow on hover
                    borderColor: '#007bff', // Change border color on hover
                },
            }}
        >
            <Typography
                variant="body1"
                textTransform="capitalize"
                fontWeight={400}
                sx={{
                    color: '#333', // Darker text color for better readability
                    fontSize: { xs: '1rem', sm: '1.2rem' }, // Responsive font size
                }}
            >
                Siem Reap
            </Typography>
            <Stack>
                <Typography
                    variant="body2"
                    sx={{
                        color: '#555', // Slightly lighter text color
                        fontSize: { xs: '0.875rem', sm: '1rem' }, // Responsive font size
                    }}
                >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </Typography>
                <Typography
                    variant="body2"
                    sx={{
                        color: '#555',
                        fontSize: { xs: '0.875rem', sm: '1rem' },
                    }}
                >
                    382423 234942943 2348.
                </Typography>
            </Stack>
        </Stack>
                </Stack>
            </Stack>
        </Box>
    );
}

export default SearchLocation;
