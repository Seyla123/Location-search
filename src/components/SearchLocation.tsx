/**
 * SearchLocation component renders a search input field and a list of search results.
 * The search results are fetched from the Nominatim API when the user submits the search form.
 * The user can select a search result to view its details.
 *
 * @param {LocationSearchProps} props - The props for the SearchLocation component.
 * @prop {function} onPlaceClick - The function to call when the user selects a search result.
 * @returns {React.ReactElement} The SearchLocation component.
 */

import { useState } from 'react'
import {
    Box,
    Stack,
    Paper,
    InputBase,
    IconButton,
    Typography,
} from '@mui/material'
import { Search as SearchIcon, Menu as MenuIcon } from '@mui/icons-material';
import { Place } from '../types/Place';
import LocationCard from './LocationCard';
import { search } from '../api/searchApi';

interface LocationSearchProps {
    onPlaceClick: (place: Place) => void,
}

const SearchLocation = ({ onPlaceClick }: LocationSearchProps) => {
    const [searchValue, setSearchValue] = useState(''); // The search input value
    const [places, setPlaces] = useState<Place[]>([]); // The list of search results

    const handleSelectPlace = (place: Place) => onPlaceClick(place);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => setSearchValue(event.target.value);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const result = await search(searchValue);
        setPlaces(result);
    };

    const handleClear = () => {
        setPlaces([]);
        setSearchValue('');
    };

    const renderContent = (places: Place[]) => {
        if (places.length === 0) {
            return <Typography>No Results Found</Typography>;
        }

        return places.map((place) => (
            <LocationCard
                key={place.id}
                place={place}
                onPlaceClick={handleSelectPlace}
            />
        ));
    };

    return (
        <Box sx={containerStyle}>
            <Stack direction="column" gap={1}>
                {/* Search Text Field */}
                <Paper
                    onSubmit={handleSubmit}
                    component="form"
                    sx={searchStyle}
                >
                    <IconButton sx={{ p: '10px' }} aria-label="menu" onClick={handleClear}>
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
                    {/* Search Results */}
                </Paper>
                <Box gap={1} sx={{ display: 'flex', flexDirection: 'column', p: 2 }}>
                    {renderContent(places)}
                </Box>
            </Stack>
        </Box>
    );
};

export default SearchLocation;

const containerStyle = {
    width: '100%',
    position: 'absolute',
    top: 24,
    left: '50%',
    transform: 'translate(-50%, -0%)',
    backgroundColor: '#fff',
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)',
    boxSizing: 'border-box',
    zIndex: 1000,
    borderRadius: '10px',
    maxWidth: 500,
    '@media (max-width: 600px)': {
        width: '100vw',
        top: 0,
        left: 0,
        transform: 'none',
        borderRadius: 0,
    },
};

const searchStyle = {
    p: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    minWidth: '100%',
    flexDirection: 'row',
    boxShadow: 'none',
};

