/**
 * Global Country Models
 * Shared TypeScript interfaces for country data across all features
 */

// Main Country interface
export interface Country {
  name: {
    common: string;
    official: string;
  };
  cca3: string; // ISO 3-letter country code
  cca2: string; // ISO 2-letter country code
  region: string;
  subregion?: string;
  population: number;
  capital?: string[];
  languages?: Record<string, string>;
  flags?: {
    png?: string;
    svg?: string;
  };
  borders?: string[]; // Array of cca3 codes of border countries
  area?: number;
  timezones?: string[];
  independent?: boolean;
}

// API Response type for REST countries API
export interface CountriesApiResponse extends Country {}


// Filter options for countries explorer
export interface CountryFilters {
  region?: string;
  searchText?: string;
}




