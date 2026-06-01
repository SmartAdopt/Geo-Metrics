import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import type { Country } from '@/types/country.types';

interface CountryBasicInfoProps {
    country: Country;
}

const CountryBasicInfo = ({ country }: CountryBasicInfoProps) => {
    return (
        <Card sx={{ height: '100%' }}>
            <CardContent>
                <Typography variant="h6" component="div" gutterBottom sx={{ fontWeight: 'bold' }}>
                    Información Básica
                </Typography>
                <Stack spacing={2}>
                    <div>
                        <Typography variant="body2" color="textSecondary">
                            <strong>Región:</strong>
                        </Typography>
                        <Typography variant="body1">{country.region}</Typography>
                    </div>
                    {country.subregion && (
                        <div>
                            <Typography variant="body2" color="textSecondary">
                                <strong>Subregión:</strong>
                            </Typography>
                            <Typography variant="body1">{country.subregion}</Typography>
                        </div>
                    )}
                    {country.capital && country.capital.length > 0 && (
                        <div>
                            <Typography variant="body2" color="textSecondary">
                                <strong>Capital:</strong>
                            </Typography>
                            <Typography variant="body1">{country.capital.join(', ')}</Typography>
                        </div>
                    )}
                    {country.independent !== undefined && (
                        <div>
                            <Typography variant="body2" color="textSecondary">
                                <strong>Independiente:</strong>
                            </Typography>
                            <Typography variant="body1">
                                {country.independent ? 'Sí' : 'No'}
                            </Typography>
                        </div>
                    )}
                </Stack>
            </CardContent>
        </Card>
    );
};

export default CountryBasicInfo;
