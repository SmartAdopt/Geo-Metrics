/**
 * Main App Component
 * Root component that sets up routing and layout
 */

import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import CountriesPage from './pages/CountriesPage';
import CountryDetailPage from './pages/CountryDetailPage';
import VisaApplicationPage from './pages/VisaApplicationPage';

/**
 * App Component - Main application entry point
 * Handles routing configuration and layout structure
 * Routes:
 * - / -> Redirect to /countries
 * - /countries -> Countries explorer page
 * - /country/:code -> Country detail page
 * - /visa-application -> Visa application form
 */
function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        {/* Header */}
        <Header />

        {/* Main Content */}
        <main className="flex-grow">
          <Routes>
            {/* Redirect root to countries page */}
            <Route path="/" element={<CountriesPage />} />

            {/* Countries Explorer */}
            <Route path="/countries" element={<CountriesPage />} />

            {/* Country Detail */}
            <Route path="/country/:code" element={<CountryDetailPage />} />

            {/* Visa Application */}
            <Route path="/visa-application" element={<VisaApplicationPage />} />

            {/* 404 - Not Found */}
            <Route
              path="*"
              element={
                <div className="flex items-center justify-center min-h-screen">
                  <div className="text-center">
                    <h1 className="text-4xl font-bold text-gray-800 mb-2">404</h1>
                    <p className="text-gray-600">Page not found</p>
                  </div>
                </div>
              }
            />
          </Routes>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
