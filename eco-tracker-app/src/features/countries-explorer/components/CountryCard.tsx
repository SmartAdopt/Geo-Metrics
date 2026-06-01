import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import type { Country } from "@/types/country.types";

interface CountryCardProps {
    country: Country;
}

const CountryCard = ({ country }: CountryCardProps) => {
    const navigate = useNavigate();

    const handleViewDetails = () => {
        navigate(`/country/${country.cca2}`);
    };

    return (
        <Card sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
            <CardMedia 
                component="img" 
                height="200" 
                image={country.flags.svg} 
                alt={country.name.official}
            />
            <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h6" component="div">
                    {country.name.common}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                    <strong>Official:</strong> {country.name.official}
                </Typography>
                {country.capital && (
                    <Typography variant="body2" color="text.secondary">
                        <strong>Capital:</strong> {country.capital[0]}
                    </Typography>
                )}
                {country.region && (
                    <Typography variant="body2" color="text.secondary">
                        <strong>Region:</strong> {country.region}
                    </Typography>
                )}
            </CardContent>
            <CardActions>
                <Button size="small" variant="contained" onClick={handleViewDetails}>
                    Ver Detalles
                </Button>
            </CardActions>
        </Card>
    );
};

export default CountryCard;