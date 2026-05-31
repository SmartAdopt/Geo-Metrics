import type { Country } from '../../../types/country.types';

// Extend the type a bit to include the borders and capital requested by your requirement
export interface CountryDetail extends Country {
  capital?: string[];
  borders?: string[];
  languages?: Record<string, string>;
}

export const getCountryByCode = async (code: string): Promise<CountryDetail> => {
  const response = await fetch(`https://restcountries.com/v3.1/alpha/${code}`);
  
  if (!response.ok) {
    throw new Error('Error al obtener los detalles del país');
  }
  
  const data = await response.json();
  return data[0]; // The API by code returns an array with a single element
};