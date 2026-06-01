import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import type { Country } from '@/types/country.types';

interface CountryGeographyInfoProps {
    country: Country;
}

const CountryGeographyInfo = ({ country }: CountryGeographyInfoProps) => {
    const formatArea = (area: number) => {
        return `${area.toLocaleString('es-ES')} km²`;
    };

    const formatPopulation = (population: number) => {
        return population.toLocaleString('es-ES');
    };

    return (
        <Card sx={{ height: '100%' }}>
            <CardContent>
                <Typography variant="h6" component="div" gutterBottom sx={{ fontWeight: 'bold' }}>
                    Geografía
                </Typography>
                <Stack spacing={2}>
                    <div>
                        <Typography variant="body2" color="textSecondary">
                            <strong>Área:</strong>
                        </Typography>
                        <Typography variant="body1">{formatArea(country.area)}</Typography>
                    </div>
                    <div>
                        <Typography variant="body2" color="textSecondary">
                            <strong>Población:</strong>
                        </Typography>
                        <Typography variant="body1">{formatPopulation(country.population)}</Typography>
                    </div>
                    <div>
                        <Typography variant="body2" color="textSecondary">
                            <strong>Continentes:</strong>
                        </Typography>
                        <Typography variant="body1">
                            {country.continents.join(', ')}
                        </Typography>
                    </div>
                </Stack>
            </CardContent>
        </Card>
    );
};

export default CountryGeographyInfo;
