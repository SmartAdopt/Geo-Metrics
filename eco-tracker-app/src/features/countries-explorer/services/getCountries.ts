import { apiClient } from '../../../config/api';
import type { Country } from '../../../types/country.types';

/**
 * Fetches all countries from the API.
 */
export const getCountries = async (): Promise<Country[]> => {
  const { data } = await apiClient.get<Country[]>('/all?fields=name,cca3,flags,region,population');
  return data;
};
