import { type Country } from '../../../types/country.types';

export const getCountries = async (): Promise<Country[]> => {
  // Use the ?fields=... filter to fetch only the lighter data we need
  const response = await fetch(
    'https://restcountries.com/v3.1/all?fields=name,cca3,flags,region,population'
  );
  
  if (!response.ok) {
    throw new Error('Error al obtener los países');
  }
  
  return response.json();
};