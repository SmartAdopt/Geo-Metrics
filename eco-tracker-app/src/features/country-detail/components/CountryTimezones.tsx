import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';
import type { Country } from '@/types/country.types';

interface CountryTimezonesProps {
    country: Country;
}

const CountryTimezones = ({ country }: CountryTimezonesProps) => {
    if (!country.timezones || country.timezones.length === 0) {
        return (
            <Card sx={{ height: '100%' }}>
                <CardContent>
                    <Typography variant="h6" component="div" gutterBottom sx={{ fontWeight: 'bold' }}>
                        Zonas Horarias
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                        No hay información de zonas horarias disponible
                    </Typography>
                </CardContent>
            </Card>
        );
    }

    return (
        <Card sx={{ height: '100%' }}>
            <CardContent>
                <Typography variant="h6" component="div" gutterBottom sx={{ fontWeight: 'bold' }}>
                    Zonas Horarias
                </Typography>
                <Stack direction="row" spacing={1} sx={{ flexWrap: 'wrap', gap: 1 }}>
                    {country.timezones.map((timezone) => (
                        <Chip
                            key={timezone}
                            label={timezone}
                            variant="outlined"
                            size="small"
                            sx={{ my: 0.5 }}
                        />
                    ))}
                </Stack>
            </CardContent>
        </Card>
    );
};

export default CountryTimezones;
