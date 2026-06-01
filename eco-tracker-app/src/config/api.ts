import axios from 'axios';

/**
 * Pre-configured Axios instance for REST Countries API.
 */
export const apiClient = axios.create({
  baseURL: 'https://restcountries.com/v3.1',
  timeout: 10000, // Tiempo máximo de espera: 10 segundos
  headers: {
    'Content-Type': 'application/json',
  },
});
