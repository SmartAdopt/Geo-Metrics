import Box from '@mui/material/Box';
import { useEffect } from 'react';
import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import FilterPanel from '@/features/countries-explorer/components/FilterPanel';
import CountriesGrid from '@/features/countries-explorer/components/CountriesGrid';
import { useCountries } from '@/features/countries-explorer/hooks/useCountries';
import { observer } from 'mobx-react-lite';

const CountriesExplorerPage = observer(() => {
    const store = useCountries();

    useEffect(() => {
        store.fetchCountries();
    }, []);

    const handleSearch = (query: string) => {
        store.searchCountries(query);
    };

    return (
        <Box component="section">
            <Header/>
            <FilterPanel onSearch={handleSearch} />
            <CountriesGrid 
                countries={store.filteredCountries} 
                isLoading={store.isLoading}
                error={store.error}
            />
            <Footer/>
        </Box>
    );
});

export default CountriesExplorerPage;