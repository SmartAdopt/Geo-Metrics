import { useState, useEffect } from 'react';
import type { CountryDetail } from '../../../types/country.types';
import { getCountry } from '../services/getCountry';

/**
 * Custom hook to manage the fetching state of a single country.
 */
export function useCountryDetail(code: string) {
  const [data, setData] = useState<CountryDetail | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(false);

  useEffect(() => {
    let mounted = true;

    const fetchData = async () => {
      try {
        setIsLoading(true);
        setIsError(false);
        const result = await getCountry(code);
        if (mounted) setData(result);
      } catch (error) {
        if (mounted) setIsError(true);
      } finally {
        if (mounted) setIsLoading(false);
      }
    };

    if (code) {
      fetchData();
    }

    return () => {
      mounted = false;
    };
  }, [code]); // Dependencia clave: si 'code' cambia (ej: clic en frontera), se ejecuta de nuevo

  return { data, isLoading, isError };
}
