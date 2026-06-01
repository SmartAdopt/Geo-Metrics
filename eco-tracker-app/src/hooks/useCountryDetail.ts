/**
 * Hook for managing country detail data
 * Handles fetching a specific country and its border countries
 */

import { useState, useEffect } from 'react';
import type { Country } from '../models/country';
import { fetchCountryByCode, fetchCountriesByCodes } from '../services/getCountryDetail';

interface UseCountryDetailReturn {
  country: Country | null;
  borderCountries: Country[];
  isLoading: boolean;
  error: string | null;
}

/**
 * Custom hook to fetch and manage country detail data
 * @param code - ISO 3-letter country code
 * @returns Object with country data and loading/error states
 */
export const useCountryDetail = (code: string | undefined): UseCountryDetailReturn => {
  const [country, setCountry] = useState<Country | null>(null);
  const [borderCountries, setBorderCountries] = useState<Country[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadCountryData = async () => {
      if (!code) {
        setError('Invalid country code');
        setIsLoading(false);
        return;
      }

      try {
        setIsLoading(true);
        setError(null);

        // Fetch main country data
        const countryData = await fetchCountryByCode(code);
        setCountry(countryData);

        // Fetch border countries if any
        if (countryData.borders && countryData.borders.length > 0) {
          const borders = await fetchCountriesByCodes(countryData.borders);
          setBorderCountries(borders);
        }
      } catch (err) {
        setError('Failed to load country details. Please try again.');
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    loadCountryData();
  }, [code]);

  return {
    country,
    borderCountries,
    isLoading,
    error,
  };
};
