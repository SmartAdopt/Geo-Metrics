import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import {useParams} from 'react-router-dom';
import BorderCountries from "@/features/country-detail/components/BorderCountries.tsx";
import CountryDetailCard from "@/features/country-detail/components/CountryDetailCard.tsx";
import CountryBasicInfo from "@/features/country-detail/components/CountryBasicInfo.tsx";
import CountryGeographyInfo from "@/features/country-detail/components/CountryGeographyInfo.tsx";
import CountryCurrencies from "@/features/country-detail/components/CountryCurrencies.tsx";
import CountryLanguages from "@/features/country-detail/components/CountryLanguages.tsx";
import CountryTimezones from "@/features/country-detail/components/CountryTimezones.tsx";
import CountryMaps from "@/features/country-detail/components/CountryMaps.tsx";
import {useCountry} from '@/features/country-detail/hooks/useCountryDetail';
import {observer} from 'mobx-react-lite';
import {useEffect} from 'react';

const CountryDetailPage = observer(() => {
    const {cca2} = useParams<{ cca2: string }>();
    const store = useCountry();

    useEffect(() => {
        if (cca2) {
            store.fetchCountryByCode(cca2);
        }
    }, [cca2, store]);

    if (store.isLoading) {
        return (
            <Box component="section">
                <Header/>
                <Box sx={{p: 2, display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '400px'}}>
                    <CircularProgress/>
                </Box>
                <Footer/>
            </Box>
        );
    }

    if (store.error || !store.country || store.country.length === 0) {
        return (
            <Box component="section">
                <Header/>
                <Box sx={{p: 2}}>
                    <Alert severity="error">
                        {store.error || 'País no encontrado. Por favor intenta con un código de país válido.'}
                    </Alert>
                </Box>
                <Footer/>
            </Box>
        );
    }

    const country = store.country[0];

    return (
        <Box component="section">
            <Header/>
            <Box sx={{p: 2}}>
                <Stack
                    direction="column"
                    spacing={3}
                    sx={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                        gap: 3,
                    }}
                >
                    {/* Full width flag/header card */}
                    <Box sx={{gridColumn: '1 / -1'}}>
                        <CountryDetailCard country={country}/>
                    </Box>


                    <CountryBasicInfo country={country}/>


                    <CountryGeographyInfo country={country}/>


                    <CountryMaps country={country}/>


                    <CountryCurrencies country={country}/>


                    <CountryLanguages country={country}/>


                    <CountryTimezones country={country}/>


                    <Box sx={{gridColumn: '1 / -1'}}>
                        <BorderCountries/>
                    </Box>
                </Stack>
            </Box>
            <Footer/>
        </Box>
    );
});

export default CountryDetailPage;
