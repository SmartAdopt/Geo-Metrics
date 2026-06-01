/**
 * Service to fetch countries data from REST Countries API
 * This service handles all HTTP requests related to countries
 */

import type { Country } from '../models/country';

const API_URL = 'https://restcountries.com/v3.1';

/**
 * Fetch all countries from the API
 * @returns Promise with array of countries
 */
export const fetchAllCountries = async (): Promise<Country[]> => {
  try {
    const response = await fetch(`${API_URL}/all?fields=name,cca3,cca2,region,subregion,population,capital,languages,flags,borders`);
    
    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching countries:', error);
    throw error;
  }
};

/**
 * Fetch countries by region
 * @param region - The region name (Africa, Americas, Asia, Europe, Oceania)
 * @returns Promise with array of countries in that region
 */
export const fetchCountriesByRegion = async (region: string): Promise<Country[]> => {
  try {
    const response = await fetch(`${API_URL}/region/${region}?fields=name,cca3,cca2,region,subregion,population,capital,languages,flags,borders`);
    
    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Error fetching countries from ${region}:`, error);
    throw error;
  }
};
