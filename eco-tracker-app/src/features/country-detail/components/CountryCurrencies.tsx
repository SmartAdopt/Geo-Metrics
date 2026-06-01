import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';
import type { Country } from '@/types/country.types';

interface CountryCurrenciesProps {
    country: Country;
}

const CountryCurrencies = ({ country }: CountryCurrenciesProps) => {
    if (!country.currencies || Object.keys(country.currencies).length === 0) {
        return (
            <Card sx={{ height: '100%' }}>
                <CardContent>
                    <Typography variant="h6" component="div" gutterBottom sx={{ fontWeight: 'bold' }}>
                        Monedas
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                        No hay información de monedas disponible
                    </Typography>
                </CardContent>
            </Card>
        );
    }

    return (
        <Card sx={{ height: '100%' }}>
            <CardContent>
                <Typography variant="h6" component="div" gutterBottom sx={{ fontWeight: 'bold' }}>
                    Monedas
                </Typography>
                <Stack spacing={2}>
                    {Object.entries(country.currencies).map(([code, currency]) => (
                        <div key={code}>
                            <Typography variant="body2" color="textSecondary">
                                <strong>{code}</strong>
                            </Typography>
                            <Stack direction="row" spacing={1} sx={{ mt: 1 }}>
                                <Chip
                                    label={`${currency.name}`}
                                    variant="outlined"
                                    size="small"
                                />
                                <Chip
                                    label={`${currency.symbol}`}
                                    color="primary"
                                    size="small"
                                />
                            </Stack>
                        </div>
                    ))}
                </Stack>
            </CardContent>
        </Card>
    );
};

export default CountryCurrencies;
