import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import type {CountryCardProps} from "@/features/countries-explorer/types/index.ts";
import React from 'react';

const CountryCard : React.FC<CountryCardProps> = ({country}) => {
    return (
        <Card>
            <CardContent>
                <CardMedia src={country.flags.svg} title={country.name.official} height="auto" component="img"/>
                <Typography>
                    Official name: {country.name.official}
                </Typography>
                <Typography>
                    Common name: {country.name.common}
                </Typography>
                <Typography>
                    Flag Description: {country.flags.alt}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default CountryCard;