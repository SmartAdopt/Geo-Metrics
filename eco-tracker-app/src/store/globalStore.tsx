import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';

// Interfaz para definir qué valores guarda nuestro contexto
interface FavoritesContextType {
  favorites: string[];
  toggleFavorite: (countryCode: string) => void;
  isFavorite: (countryCode: string) => boolean;
}

// 1. Creamos el contexto vacío
const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);

const LOCAL_STORAGE_KEY = 'geo_metrics_favorites';

/**
 * Global Store using React Context API for managing favorite countries.
 */
export function FavoritesProvider({ children }: { children: ReactNode }) {
  // Inicializamos el estado leyendo del disco duro (localStorage)
  const [favorites, setFavorites] = useState<string[]>(() => {
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
    return saved ? JSON.parse(saved) : [];
  });

  // Cada vez que 'favorites' cambia, guardamos la nueva lista en el disco duro
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(favorites));
  }, [favorites]);

  // Función para agregar o quitar un favorito
  const toggleFavorite = (countryCode: string) => {
    setFavorites(prev => 
      prev.includes(countryCode) 
        ? prev.filter(code => code !== countryCode) 
        : [...prev, countryCode]
    );
  };

  const isFavorite = (countryCode: string) => favorites.includes(countryCode);

  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorite, isFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
}

/**
 * Hook personalizado para usar los favoritos fácilmente.
 */
export function useFavorites() {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error('useFavorites debe usarse dentro de un FavoritesProvider');
  }
  return context;
}
