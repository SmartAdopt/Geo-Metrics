import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import type { Country } from '@/types/country.types';

interface CountryDetailCardProps {
    country: Country;
}

const CountryDetailCard = ({ country }: CountryDetailCardProps) => {
    return (
        <Card sx={{ mb: 3 }}>
            <CardMedia
                component="img"
                height="300"
                image={country.flags.svg || country.flags.png}
                alt={country.flags.alt || `Flag of ${country.name.official}`}
                sx={{ objectFit: 'contain', backgroundColor: '#f5f5f5' }}
            />
            <CardContent>
                <Typography variant="h4" component="div" gutterBottom>
                    {country.name.common}
                </Typography>
                <Typography variant="h6" color="textSecondary" gutterBottom>
                    {country.name.official}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                    <strong>Código (CCA2):</strong> {country.cca2}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                    <strong>Código (CCA3):</strong> {country.cca3}
                </Typography>
                {country.status && (
                    <Typography variant="body2" color="textSecondary">
                        <strong>Estado:</strong> {country.status}
                    </Typography>
                )}
            </CardContent>
        </Card>
    );
};

export default CountryDetailCard;
