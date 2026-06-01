import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";
import CountriesExplorerPage from '@/features/countries-explorer/CountriesExplorerPage.tsx';
import CountryDetailPage from '@/features/country-detail/CountryDetailPage.tsx';
import VisaApplicationPage from '@/features/visa-application/VisaApplicationPage';

const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Navigate to="/dashboard" replace/>}/>
                <Route path="/dashboard" element={<CountriesExplorerPage/>}/>
                <Route path="/country/:cca2" element={<CountryDetailPage/>}/>
                <Route path="/visa" element={<VisaApplicationPage/>}/>
            </Routes>
        </Router>
    );
};

export default AppRouter;