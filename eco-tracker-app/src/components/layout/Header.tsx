import { useState, useRef, useEffect } from 'react';
import { Link } from '@tanstack/react-router';
import { useFavorites } from '../../store/globalStore';

/**
 * Main application header with navigation links and favorites popover.
 */
export function Header() {
  const { favorites } = useFavorites();
  const [isOpen, setIsOpen] = useState(false);
  const popoverRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (popoverRef.current && !popoverRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="bg-blue-800 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">

        <Link to="/countries" className="text-2xl font-bold tracking-wide hover:text-blue-200 transition-colors">
          Geo-Metrics
        </Link>

        <nav className="flex gap-6 items-center">
          <Link
            to="/countries"
            className="text-gray-100 hover:text-white font-medium [&.active]:text-yellow-400 [&.active]:font-bold"
          >
            Explorer
          </Link>
          <Link
            to="/visa-application"
            className="text-gray-100 hover:text-white font-medium [&.active]:text-yellow-400 [&.active]:font-bold"
          >
            Visa Application
          </Link>

          <div className="relative" ref={popoverRef}>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="bg-blue-700 px-3 py-1 rounded-full text-sm font-bold border border-blue-600 hover:bg-blue-600 transition-colors"
            >
              Favorites: {favorites.length}
            </button>

            {isOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-xl z-50 overflow-hidden border border-gray-100 text-gray-800">
                <div className="px-4 py-2 bg-gray-50 border-b border-gray-100 font-semibold text-sm">
                  Saved Countries
                </div>
                <div className="max-h-60 overflow-y-auto">
                  {favorites.length === 0 ? (
                    <div className="px-4 py-3 text-sm text-gray-500 italic">
                      No favorites yet.
                    </div>
                  ) : (
                    favorites.map((code) => (
                      <div key={code} className="px-4 py-2 border-b border-gray-50 last:border-0 flex justify-between items-center">
                        <span className="font-medium text-gray-700">{code}</span>
                        <Link
                          to="/country/$code"
                          params={{ code }}
                          onClick={() => setIsOpen(false)}
                          className="text-xs bg-indigo-100 text-indigo-700 px-2 py-1 rounded hover:bg-indigo-200 transition-colors"
                        >
                          Details
                        </Link>
                      </div>
                    ))
                  )}
                </div>
              </div>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
}
