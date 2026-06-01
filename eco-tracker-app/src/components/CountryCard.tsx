/**
 * CountryCard Component
 * Displays individual country information in a card format
 */


import { useNavigate } from 'react-router-dom';
import type { Country } from '../models/country';

interface CountryCardProps {
  country: Country;
}

/**
 * CountryCard Component - Displays a single country with flag and basic info
 * @param country - Country object to display
 */
function CountryCard({ country }: CountryCardProps) {
  const navigate = useNavigate();

  // Handle click to navigate to country detail page
  const handleClick = () => {
    navigate(`/country/${country.cca3}`);
  };

  return (
    <div
      onClick={handleClick}
      className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden hover:scale-105 transform"
    >
      {/* Flag Image */}
      {country.flags?.svg && (
        <img
          src={country.flags.svg}
          alt={country.name.common}
          className="w-full h-40 object-cover"
        />
      )}

      {/* Country Info */}
      <div className="p-4">
        {/* Country Name */}
        <h3 className="text-lg font-bold text-gray-800 truncate">
          {country.name.common}
        </h3>

        {/* Country Code */}
        <p className="text-sm text-gray-500 mb-2">
          {country.cca3}
        </p>

        {/* Region */}
        <p className="text-sm text-gray-600 mb-2">
          <span className="font-semibold">Region:</span> {country.region}
        </p>

        {/* Population */}
        <p className="text-sm text-gray-600 mb-2">
          <span className="font-semibold">Population:</span> {country.population?.toLocaleString() || 'N/A'}
        </p>

        {/* Capital */}
        {country.capital && country.capital.length > 0 && (
          <p className="text-sm text-gray-600">
            <span className="font-semibold">Capital:</span> {country.capital[0]}
          </p>
        )}
      </div>
    </div>
  );
};

export default CountryCard;
