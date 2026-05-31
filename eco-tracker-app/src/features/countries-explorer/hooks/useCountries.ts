import { useQuery } from '@tanstack/react-query';
import { getCountries } from '../services/getCountries';
import { type Country } from '../../../types/country.types';

export const useCountries = () => {
  return useQuery<Country[], Error>({
    queryKey: ['countries'], // This is the unique cache key
    queryFn: getCountries,   // The function that runs the request
    staleTime: 1000 * 60 * 60, // Keep the data fresh for 1 hour to avoid repeated requests
  });
};