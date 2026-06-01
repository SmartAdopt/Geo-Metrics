/**
 * Country Detail Page
 * Displays comprehensive information about a selected country
 */

import { useParams, useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import Spinner from '../components/Spinner';
import { useCountryDetail } from '../hooks/useCountryDetail';
import BorderCountries from '../components/BorderCountries';
import WeatherWidget from '../components/WeatherWidget';

/**
 * CountryDetailPage Component - Detailed view of a specific country
 * Features:
 * - Large country flag display
 * - Population, capital, languages information
 * - Border countries with navigation
 * - Additional info widget with area, timezones, etc.
 */
function CountryDetailPage() {
  const { code } = useParams<{ code: string }>();
  const navigate = useNavigate();
  const { country, borderCountries, isLoading, error } = useCountryDetail(code);

  // Handle loading state
  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Spinner size="lg" message="Loading country details..." />
      </div>
    );
  }

  // Handle error state
  if (error || !country) {
    return (
      <div className="bg-gray-50 min-h-screen py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-6">
            <p className="font-bold">Error</p>
            <p>{error || 'Country not found'}</p>
          </div>
          <Button onClick={() => navigate('/countries')} variant="primary">
            Back to Countries
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Back Button */}
        <button
          onClick={() => navigate('/countries')}
          className="mb-6 text-blue-600 hover:text-blue-700 font-semibold flex items-center gap-2"
        >
          ← Back to Countries
        </button>

        {/* Country Header */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Flag */}
            <div className="md:col-span-1">
              {country.flags?.svg && (
                <img
                  src={country.flags.svg}
                  alt={country.name.common}
                  className="w-full rounded-lg shadow-md"
                />
              )}
            </div>

            {/* Country Info */}
            <div className="md:col-span-2">
              <h1 className="text-4xl font-bold text-gray-800 mb-2">
                {country.name.common}
              </h1>
              <p className="text-gray-600 text-lg mb-6">
                {country.name.official}
              </p>

              {/* Grid of Information */}
              <div className="grid grid-cols-2 gap-4">
                {/* ISO Codes */}
                <div>
                  <p className="text-sm text-gray-600">ISO Codes</p>
                  <p className="text-lg font-semibold text-gray-800">
                    {country.cca2} / {country.cca3}
                  </p>
                </div>

                {/* Region */}
                <div>
                  <p className="text-sm text-gray-600">Region</p>
                  <p className="text-lg font-semibold text-gray-800">
                    {country.region}
                  </p>
                </div>

                {/* Population */}
                <div>
                  <p className="text-sm text-gray-600">Population</p>
                  <p className="text-lg font-semibold text-gray-800">
                    {(country.population / 1000000).toFixed(1)}M
                  </p>
                </div>

                {/* Capital */}
                {country.capital && (
                  <div>
                    <p className="text-sm text-gray-600">Capital</p>
                    <p className="text-lg font-semibold text-gray-800">
                      {country.capital[0]}
                    </p>
                  </div>
                )}
              </div>

              {/* Languages */}
              {country.languages && Object.keys(country.languages).length > 0 && (
                <div className="mt-6">
                  <p className="text-sm text-gray-600 mb-2">Languages</p>
                  <div className="flex flex-wrap gap-2">
                    {Object.values(country.languages).map((language, index) => (
                      <span
                        key={index}
                        className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm"
                      >
                        {language}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Additional Info Widget */}
        {country && (
          <div className="mb-8">
            <WeatherWidget country={country} />
          </div>
        )}

        {/* Border Countries */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <BorderCountries
            borderCountries={borderCountries}
            isLoading={isLoading}
          />
        </div>
      </div>
    </div>
  );
};

export default CountryDetailPage;
