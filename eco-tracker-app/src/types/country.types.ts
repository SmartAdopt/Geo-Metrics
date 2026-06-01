/**
 * Type definitions for REST Countries API response.
 */

export interface Country {
  cca3: string;
  name: {
    common: string;
    official: string;
  };
  flags: {
    svg: string;
    png: string;
  };
  region: string;
  population: number;
}

export interface CountryDetail extends Country {
  subregion?: string;
  capital?: string[];
  borders?: string[];
  languages?: Record<string, string>;
}
