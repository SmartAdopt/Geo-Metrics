import { useState, useEffect } from 'react';
import type { Country } from '../../../types/country.types';
import { getCountries } from '../services/getCountries';

/**
 * Custom hook to fetch and cache all countries on mount.
 */
export function useCountries() {
  const [data, setData] = useState<Country[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(false);

  useEffect(() => {
    let mounted = true;

    const fetchData = async () => {
      try {
        setIsLoading(true);
        setIsError(false);
        const result = await getCountries();
        if (mounted) setData(result);
      } catch (error) {
        if (mounted) setIsError(true);
      } finally {
        if (mounted) setIsLoading(false);
      }
    };

    fetchData();

    return () => {
      mounted = false; // Evita fugas de memoria si el componente se desmonta antes de terminar la petición
    };
  }, []);

  return { data, isLoading, isError };
}
