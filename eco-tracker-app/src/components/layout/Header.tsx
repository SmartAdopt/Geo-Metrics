import { Link } from '@tanstack/react-router';
import { useFavorites } from '../../store/globalStore';

/**
 * Main application header with navigation links.
 */
export function Header() {
  const { favorites } = useFavorites();

  return (
    <header className="bg-blue-800 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        
        {/* Logo / Titulo */}
        <Link to="/countries" className="text-2xl font-bold tracking-wide hover:text-blue-200 transition-colors">
          Geo-Metrics
        </Link>

        {/* Menu de navegacion */}
        <nav className="flex gap-6 items-center">
          <Link 
            to="/countries" 
            className="text-gray-100 hover:text-white font-medium [&.active]:text-yellow-400 [&.active]:font-bold"
          >
            Explorar
          </Link>
          <Link 
            to="/visa-application" 
            className="text-gray-100 hover:text-white font-medium [&.active]:text-yellow-400 [&.active]:font-bold"
          >
            Solicitar Visa
          </Link>
          
          {/* Indicador de Favoritos */}
          <div className="bg-blue-700 px-3 py-1 rounded-full text-sm font-bold border border-blue-600">
            Favoritos: {favorites.length}
          </div>
        </nav>
      </div>
    </header>
  );
}
