import { apiClient } from '../../../config/api';
import type { CountryDetail } from '../../../types/country.types';

/**
 * Fetches a single country from the API by its CCA3 code.
 */
export const getCountry = async (code: string): Promise<CountryDetail> => {
  const { data } = await apiClient.get<CountryDetail>(
    `/alpha/${code}?fields=name,cca3,flags,region,subregion,capital,population,languages,borders`
  );
  // La API v3.1 para un solo código retorna el objeto directamente
  return data;
};
