import { useState } from 'react';
import { useCountries } from './hooks/useCountries';
import { CountryCard } from './components/CountryCard';
import { FilterPanel, type FilterValues } from './components/FilterPanel';
import { Spinner } from '../../components/ui/Spinner';

/**
 * Main view for the Global Explorer.
 */
export default function CountriesExplorer() {
  const { data: countries, isLoading, isError } = useCountries();
  const [filters, setFilters] = useState<FilterValues>({ search: '', region: '' });

  // Lógica de filtrado en tiempo real basada en lo que envía Formik
  const filteredCountries = countries.filter((country) => {
    const matchesSearch = country.name.common.toLowerCase().includes(filters.search.toLowerCase());
    const matchesRegion = filters.region ? country.region === filters.region : true;
    return matchesSearch && matchesRegion;
  });

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[50vh]">
        <Spinner />
        <p className="mt-4 text-gray-600 font-medium">Loading global information...</p>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[50vh]">
        <p className="text-red-600 text-xl font-bold">There was an error loading the countries.</p>
        <p className="text-gray-500 mt-2">Please refresh the page or try again later.</p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        Global Country Explorer
      </h1>

      {/* Panel de Búsqueda controlado por Formik */}
      <FilterPanel onFilterChange={setFilters} />

      {/* Resultados */}
      {filteredCountries.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No countries found matching your filters.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredCountries.map((country) => (
            <CountryCard key={country.cca3} country={country} />
          ))}
        </div>
      )}
    </div>
  );
}
