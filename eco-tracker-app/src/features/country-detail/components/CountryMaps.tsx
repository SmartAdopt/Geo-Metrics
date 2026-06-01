import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import type { Country } from '@/types/country.types';

interface CountryMapsProps {
    country: Country;
}

const CountryMaps = ({ country }: CountryMapsProps) => {
    return (
        <Card sx={{ height: '100%' }}>
            <CardContent>
                <Typography variant="h6" component="div" gutterBottom sx={{ fontWeight: 'bold' }}>
                    Mapas
                </Typography>
                <Stack spacing={2}>
                    {country.maps.googleMaps && (
                        <Button
                            variant="outlined"
                            color="primary"
                            fullWidth
                            href={country.maps.googleMaps}
                            target="_blank"
                            rel="noopener noreferrer"
                            endIcon={<OpenInNewIcon />}
                        >
                            Ver en Google Maps
                        </Button>
                    )}
                    {country.maps.openStreetMaps && (
                        <Button
                            variant="outlined"
                            color="primary"
                            fullWidth
                            href={country.maps.openStreetMaps}
                            target="_blank"
                            rel="noopener noreferrer"
                            endIcon={<OpenInNewIcon />}
                        >
                            Ver en OpenStreetMap
                        </Button>
                    )}
                </Stack>
            </CardContent>
        </Card>
    );
};

export default CountryMaps;
