import { Link } from '@tanstack/react-router';
import type { Country } from '../../../types/country.types';
import { useFavorites } from '../../../store/globalStore';
import { Button } from '../../../components/ui/Button';

interface CountryCardProps {
  country: Country;
}

/**
 * Country Card Component displaying basic information.
 */
export function CountryCard({ country }: CountryCardProps) {
  const { isFavorite, toggleFavorite } = useFavorites();
  const favorite = isFavorite(country.cca3);

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col h-full">
      {/* Sección Netflix: Imagen ocupando todo el ancho superior */}
      <Link to="/country/$code" params={{ code: country.cca3 }} className="block overflow-hidden relative">
        <img 
          src={country.flags.svg} 
          alt={`Flag of ${country.name.common}`} 
          className="w-full h-40 object-cover hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
        {/* Etiqueta de código sobre la imagen (estilo premium) */}
        <div className="absolute top-2 right-2 bg-black/60 text-white text-xs font-bold px-2 py-1 rounded backdrop-blur-sm">
          {country.cca3}
        </div>
      </Link>

      <div className="p-4 flex flex-col flex-grow">
        <h3 className="font-bold text-lg text-gray-800 mb-1 truncate" title={country.name.common}>
          {country.name.common}
        </h3>
        <p className="text-sm text-gray-500 mb-4 flex-grow">
          <span className="block"><strong>Region:</strong> {country.region}</span>
          <span className="block"><strong>Population:</strong> {country.population.toLocaleString()}</span>
        </p>

        <Button 
          variant={favorite ? 'primary' : 'outline'} 
          className="w-full text-sm"
          onClick={() => toggleFavorite(country.cca3)}
        >
          {favorite ? '★ Saved Favorite' : '☆ Mark Favorite'}
        </Button>
      </div>
    </div>
  );
}
