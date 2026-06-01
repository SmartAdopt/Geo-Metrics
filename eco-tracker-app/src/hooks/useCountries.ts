/**
 * Hook for managing countries data and search functionality
 * This hook handles fetching, caching, and filtering countries data
 * Performance optimized for instant search using React Hook Form patterns
 */

import { useState, useEffect, useCallback } from 'react';
import type { Country } from '../models/country';
import { fetchAllCountries } from '../services/getCountries';

type Region = 'Africa' | 'Americas' | 'Asia' | 'Europe' | 'Oceania';

interface UseCountriesReturn {
  countries: Country[];
  filteredCountries: Country[];
  isLoading: boolean;
  error: string | null;
  searchByText: (text: string) => void;
  filterByRegion: (region: Region | null) => void;
  selectedRegion: Region | null;
  searchText: string;
}

/**
 * Custom hook to manage countries data with filtering and search
 * Uses caching to optimize performance for instant search
 * @returns Object with countries data and filter functions
 */
export const useCountries = (): UseCountriesReturn => {
  const [allCountries, setAllCountries] = useState<Country[]>([]);
  const [filteredCountries, setFilteredCountries] = useState<Country[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchText, setSearchText] = useState('');
  const [selectedRegion, setSelectedRegion] = useState<Region | null>(null);

  // Fetch all countries on component mount
  useEffect(() => {
    const loadCountries = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const data = await fetchAllCountries();
        setAllCountries(data);
      } catch (err) {
        setError('Failed to load countries. Please try again later.');
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    loadCountries();
  }, []);

  // Memoized filter function for performance optimization
  const applyFilters = useCallback((text: string, region: Region | null) => {
    let results = allCountries;

    // Filter by region
    if (region) {
      results = results.filter((country) => country.region === region);
    }

    // Filter by search text
    if (text.trim()) {
      const lowerText = text.toLowerCase();
      results = results.filter(
        (country) =>
          country.name.common.toLowerCase().includes(lowerText) ||
          country.cca3.toLowerCase().includes(lowerText)
      );
    }

    setFilteredCountries(results);
  }, [allCountries]);

  // Apply filters whenever search or region changes
  useEffect(() => {
    applyFilters(searchText, selectedRegion);
  }, [searchText, selectedRegion, applyFilters]);

  // Search by text
  const searchByText = (text: string) => {
    setSearchText(text);
  };

  // Filter by region
  const filterByRegion = (region: Region | null) => {
    setSelectedRegion(region);
  };

  return {
    countries: allCountries,
    filteredCountries,
    isLoading,
    error,
    searchByText,
    filterByRegion,
    selectedRegion,
    searchText,
  };
};
