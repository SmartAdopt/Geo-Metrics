/**
 * CountryCardInformation Component
 * 
 * Show additional country information (area, timezones, independent, languages, etc.)
 * IMPORTANT: This component does NOT fetch anything. It only consumes the `country`
 * object passed from the CountryDetailPage.
 */

import type { Country } from '../models/country';

interface CountryCardInformationProps {
  country: Country;
}

function CountryCardInformation({ country }: CountryCardInformationProps) {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg shadow-lg p-6 text-white">
      {/* Header */}
      <h3 className="text-2xl font-bold mb-6">Additional Information</h3>

      {/* Grid of information */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Area */}
        <div className="bg-white bg-opacity-10 rounded-lg p-4">
          <p className="text-sm font-semibold text-blue-100 mb-1">Area</p>
          <p className="text-2xl font-bold">
            {country.area !== undefined ? `${(country.area / 1000).toFixed(0)} km²` : 'N/A'}
          </p>
        </div>

        {/* Independent Status */}
        <div className="bg-white bg-opacity-10 rounded-lg p-4">
          <p className="text-sm font-semibold text-blue-100 mb-1">Independent</p>
          <p className="text-2xl font-bold">
            {country.independent !== undefined ? (country.independent ? 'Yes' : 'No') : 'N/A'}
          </p>
        </div>

        {/* Timezones */}
        <div className="bg-white bg-opacity-10 rounded-lg p-4 md:col-span-2">
          <p className="text-sm font-semibold text-blue-100 mb-2">Timezones</p>
          <div className="flex flex-wrap gap-2">
            {country.timezones && country.timezones.length > 0 ? (
              country.timezones.map((tz: string, index: number) => (
                <span key={index} className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm">
                  {tz}
                </span>
              ))
            ) : (
              <span>N/A</span>
            )}
          </div>
        </div>

        {/* Languages */}
        <div className="bg-white bg-opacity-10 rounded-lg p-4 md:col-span-2">
          <p className="text-sm font-semibold text-blue-100 mb-2">Languages</p>
          <div className="flex flex-wrap gap-2">
            {country.languages && Object.values(country.languages).length > 0 ? (
              Object.values(country.languages).map((lang: string, index: number) => (
                <span key={index} className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm">
                  {lang}
                </span>
              ))
            ) : (
              <span>N/A</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CountryCardInformation;

