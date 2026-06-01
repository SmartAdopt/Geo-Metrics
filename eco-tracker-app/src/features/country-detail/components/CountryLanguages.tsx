import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';
import type { Country } from '@/types/country.types';

interface CountryLanguagesProps {
    country: Country;
}

const CountryLanguages = ({ country }: CountryLanguagesProps) => {
    if (!country.languages || Object.keys(country.languages).length === 0) {
        return (
            <Card sx={{ height: '100%' }}>
                <CardContent>
                    <Typography variant="h6" component="div" gutterBottom sx={{ fontWeight: 'bold' }}>
                        Idiomas
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                        No hay información de idiomas disponible
                    </Typography>
                </CardContent>
            </Card>
        );
    }

    return (
        <Card sx={{ height: '100%' }}>
            <CardContent>
                <Typography variant="h6" component="div" gutterBottom sx={{ fontWeight: 'bold' }}>
                    Idiomas
                </Typography>
                <Stack direction="row" spacing={1} sx={{ flexWrap: 'wrap', gap: 1 }}>
                    {Object.entries(country.languages).map(([code, language]) => (
                        <Chip
                            key={code}
                            label={language}
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

export default CountryLanguages;
