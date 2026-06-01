import React, { createContext, useContext, useState, useEffect, type ReactNode } from 'react';

interface FavoritesContextType {
  favorites: string[];
  toggleFavorite: (countryCode: string) => void;
  isFavorite: (countryCode: string) => boolean;
}

const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);

export function FavoritesProvider({ children }: { children: ReactNode }) {
  // 1. Inicializamos el estado leyendo el localStorage (por si ya había favoritos guardados)
  const [favorites, setFavorites] = useState<string[]>(() => {
    const savedFavorites = localStorage.getItem('eco-tracker-favorites');
    return savedFavorites ? JSON.parse(savedFavorites) : [];
  });

  // 2. Cada vez que el array de favoritos cambie, lo guardamos automáticamente
  useEffect(() => {
    localStorage.setItem('eco-tracker-favorites', JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (countryCode: string) => {
    setFavorites((prev) =>
      prev.includes(countryCode)
        ? prev.filter((code) => code !== countryCode)
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

export function useFavorites() {
  const context = useContext(FavoritesContext);
  if (context === undefined) {
    throw new Error('useFavorites debe ser usado dentro de un FavoritesProvider');
  }
  return context;
}