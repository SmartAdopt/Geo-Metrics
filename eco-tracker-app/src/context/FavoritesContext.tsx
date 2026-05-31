import React, { createContext, useContext, useState, type ReactNode } from 'react';

// 1. Define the shape of our state using TypeScript
interface FavoritesContextType {
  favorites: string[]; // We will store the country codes (e.g. 'ECU', 'COL')
  toggleFavorite: (countryCode: string) => void;
  isFavorite: (countryCode: string) => boolean;
}

// 2. Create the Context with a default null initial value
const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);

// 3. Create the Provider (the component that will wrap our app)
export function FavoritesProvider({ children }: { children: ReactNode }) {
  const [favorites, setFavorites] = useState<string[]>([]);

  // Function to add or remove a country from favorites
  const toggleFavorite = (countryCode: string) => {
    setFavorites((prev) =>
      prev.includes(countryCode)
        ? prev.filter((code) => code !== countryCode) // If it is already there, remove it
        : [...prev, countryCode] // If it is not there, add it
    );
  };

  // Helper function to know whether a country is already a favorite
  const isFavorite = (countryCode: string) => favorites.includes(countryCode);

  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorite, isFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
}

// 4. Create a custom hook to use this context easily in any component
export function useFavorites() {
  const context = useContext(FavoritesContext);
  if (context === undefined) {
    throw new Error('useFavorites must be used within a FavoritesProvider');
  }
  return context;
}