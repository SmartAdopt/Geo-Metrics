/**
 * BorderCountries Component
 * Displays the countries that border the selected country
 */


import { useNavigate } from 'react-router-dom';
import type { Country } from '../models/country';

interface BorderCountriesProps {
  borderCountries: Country[];
  isLoading: boolean;
}

/**
 * BorderCountries Component - Shows list of neighboring countries
 * @param borderCountries - Array of border country data
 * @param isLoading - Loading state
 */
function BorderCountries({
  borderCountries,
  isLoading,
}: BorderCountriesProps) {
  const navigate = useNavigate();

  if (isLoading) {
    return <div>Loading border countries...</div>;
  }

  if (!borderCountries.length) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-500">This country has no land borders</p>
      </div>
    );
  }

  // Handle click to navigate to border country
  const handleCountryClick = (code: string) => {
    navigate(`/country/${code}`);
  };

  return (
    <div>
      <h3 className="text-2xl font-bold text-gray-800 mb-6">Border Countries</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {borderCountries.map((country) => (
          <div
            key={country.cca3}
            onClick={() => handleCountryClick(country.cca3)}
            className="bg-white rounded-lg shadow-md p-4 text-center cursor-pointer hover:shadow-lg transition-all hover:scale-105 transform"
          >
            {country.flags?.svg && (
              <img
                src={country.flags.svg}
                alt={country.name.common}
                className="w-full h-20 object-cover rounded mb-2"
              />
            )}
            <p className="font-semibold text-gray-800 text-sm truncate">
              {country.name.common}
            </p>
            <p className="text-xs text-gray-500">{country.cca3}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BorderCountries;
