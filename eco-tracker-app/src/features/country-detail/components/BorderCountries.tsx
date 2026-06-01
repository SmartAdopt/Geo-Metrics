import { observer } from 'mobx-react-lite';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { useCountry } from '@/features/country-detail/hooks/useCountryDetail';

const BorderCountries = observer(() => {
    const store = useCountry();
    const navigate = useNavigate();

    if (!store.country || store.country.length === 0) {
        return null;
    }

    const country = store.country[0];

    if (!country.borders || country.borders.length === 0) {
        return (
            <Card>
                <CardContent>
                    <Typography variant="h6" component="div" gutterBottom sx={{ fontWeight: 'bold' }}>
                        Países Fronterizos
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                        Este país no tiene frontera con otros países.
                    </Typography>
                </CardContent>
            </Card>
        );
    }

    const handleCountryClick = (cca3: string) => {
        navigate(`/country/${cca3}`);
    };

    return (
        <Card>
            <CardContent>
                <Typography variant="h6" component="div" gutterBottom sx={{ fontWeight: 'bold' }}>
                    Países Fronterizos
                </Typography>
                <Stack direction="row" spacing={1} sx={{ flexWrap: 'wrap', gap: 1, mt: 2 }}>
                    {country.borders.map((borderCode) => (
                        <Button
                            key={borderCode}
                            variant="outlined"
                            size="small"
                            onClick={() => handleCountryClick(borderCode)}
                            sx={{
                                textTransform: 'none',
                                '&:hover': {
                                    backgroundColor: 'primary.light',
                                    color: 'white',
                                },
                            }}
                        >
                            {borderCode}
                        </Button>
                    ))}
                </Stack>
            </CardContent>
        </Card>
    );
});

export default BorderCountries;