import { Link, useParams } from '@tanstack/react-router';
import { useCountryDetail } from './hooks/useCountryDetail';
import { Spinner } from '../../components/ui/Spinner';
import { CountryHeader } from './components/CountryHeader';
import { BorderCountries } from './components/BorderCountries';

/**
 * Country Details View. 
 * Reads the 'code' parameter from the URL using TanStack Router.
 */
export default function CountryDetail() {
  const { code } = useParams({ strict: false }) as { code: string };
  const { data: country, isLoading, isError } = useCountryDetail(code);

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[50vh]">
        <Spinner />
        <p className="mt-4 text-gray-600 font-medium">Cargando ficha técnica...</p>
      </div>
    );
  }

  if (isError || !country) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[50vh]">
        <p className="text-red-600 text-xl font-bold">No se pudo cargar la información del país.</p>
        <Link to="/countries" className="mt-4 text-blue-600 hover:underline">
          &larr; Volver al explorador
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <Link 
        to="/" 
        className="inline-flex items-center text-indigo-600 hover:text-indigo-800 mb-6 font-medium"
      >
        ← Back to Explorer
      </Link>

      <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
        <CountryHeader country={country} />

        <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold border-b pb-2">Geography</h2>
            <p><strong>Region:</strong> {country.region}</p>
            <p><strong>Subregion:</strong> {country.subregion || 'N/A'}</p>
            <p><strong>Capital:</strong> {country.capital?.join(', ') || 'N/A'}</p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold border-b pb-2">Demographics</h2>
            <p><strong>Population:</strong> {country.population.toLocaleString()}</p>
            <div className="mt-4">
              <strong>Borders:</strong>
              <BorderCountries borders={country.borders} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
