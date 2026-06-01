/**
 * Service to fetch country detail data
 */

import type { Country } from '../models/country';

const API_URL = 'https://restcountries.com/v3.1';

/**
 * Fetch a specific country by its ISO 3-letter code
 * @param code - ISO 3-letter country code (e.g., 'USA', 'ESP')
 * @returns Promise with country data
 */
export const getCountryByCode = async (code: string): Promise<Country> => {
  const response = await fetch(
    `${API_URL}/alpha/${code}?fields=name,cca3,cca2,region,subregion,population,capital,languages,flags,borders,area,timezones,independent`
  );

  if (!response.ok) {
    throw new Error(`API error: ${response.status}`);
  }

  return (await response.json()) as Country;
};

export const getCountriesByCodes = async (codes: string[]): Promise<Country[]> => {
  if (!codes.length) return [];

  const codesString = codes.join(',');

  const response = await fetch(
    `${API_URL}/alpha?codes=${codesString}&fields=name,cca3,cca2,region,flags`
  );

  if (!response.ok) {
    throw new Error(`API error: ${response.status}`);
  }

  return (await response.json()) as Country[];
};





