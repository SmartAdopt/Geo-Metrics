/**
 * Countries Explorer Page
 * Displays grid of countries with filtering and search
 */


import Spinner from '../components/Spinner';
import { useCountries } from '../hooks/useCountries';
import CountryCard from '../components/CountryCard';
import FilterPanel from '../components/FilterPanel';
import type { Country } from '../models/country';

/**
 * CountriesPage Component - Main page for exploring countries
 * Features:
 * - Real-time search with React Hook Form optimization
 * - Region filtering with toggle buttons
 * - Grid display of country cards
 * - Loading and error states
 */
function CountriesPage() {
  const {
    filteredCountries,
    isLoading,
    error,
    searchByText,
    filterByRegion,
    selectedRegion,
    searchText,
  } = useCountries();

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Page Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            Explore Countries
          </h1>
          <p className="text-gray-600">
            Discover information about countries from around the world
          </p>
        </div>

        {/* Filter Panel */}
        <FilterPanel
          onSearchChange={searchByText}
          onRegionChange={filterByRegion}
          selectedRegion={selectedRegion}
          searchText={searchText}
        />

        {/* Loading State */}
        {isLoading && (
          <div className="flex justify-center py-12">
            <Spinner size="lg" message="Loading countries..." />
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-6">
            <p className="font-bold">Error</p>
            <p>{error}</p>
          </div>
        )}

        {/* No Results */}
        {!isLoading && !error && filteredCountries.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              No countries found. Try adjusting your filters or search.
            </p>
          </div>
        )}

        {/* Countries Grid */}
        {!isLoading && filteredCountries.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredCountries.map((country: Country) => (
              <CountryCard key={country.cca3} country={country} />
            ))}
          </div>
        )}

        {/* Results Count */}
        {!isLoading && filteredCountries.length > 0 && (
          <div className="mt-8 text-center text-gray-600">
            <p>Showing {filteredCountries.length} countries</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CountriesPage;
