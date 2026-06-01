import {Box, Typography, Stack} from '@mui/material';
import Spinner from '@/components/ui/Spinner';
import CountryCard from './CountryCard';
import type {Country} from '@/types/country.types';

interface CountriesGridProps {
    countries: Country[] | undefined;
    isLoading: boolean;
    error: string | null;
}

const CountriesGrid = ({countries, isLoading, error}: CountriesGridProps) => {
    if (isLoading) {
        return (
            <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '400px'}}>
                <Spinner/>
            </Box>
        );
    }

    if (error) {
        return (
            <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '400px'}}>
                <Typography color="error">{error}</Typography>
            </Box>
        );
    }

    if (!countries || countries.length === 0) {
        return (
            <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '400px'}}>
                <Typography>No countries found</Typography>
            </Box>
        );
    }

    return (
        <Box sx={{p: 2}}>
            <Stack
                direction="row"
                spacing={3}
                sx={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                    gap: 3,
                }}
            >
                {countries.map((country) => (
                    <CountryCard key={country.cca2} country={country}/>
                ))}
            </Stack>
        </Box>
    );
};

export default CountriesGrid;
