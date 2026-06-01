import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";
import CountriesExplorerPage from '@/features/countries-explorer/CountriesExplorerPage.tsx';
import CountryDetailPage from '@/features/country-detail/CountryDetailPage.tsx';

const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Navigate to="/dashboard" replace/>}/>
                <Route path="/dashboard" element={<CountriesExplorerPage/>}/>
                <Route path="/country/:cca2" element={<CountryDetailPage/>}/>
            </Routes>
        </Router>
    );
};

export default AppRouter;