import { useQuery } from '@tanstack/react-query';
import { getCountryByCode } from '../services/getCountry';

export const useCountryDetail = (code: string | undefined) => {
  return useQuery({
    queryKey: ['country', code], // The key now includes the code, so each country has its own cache
    queryFn: () => getCountryByCode(code!), // We use '!' because React Query will only run this if 'code' exists
    enabled: !!code, // This rule prevents the request if the code is undefined
    staleTime: 1000 * 60 * 60,
  });
};