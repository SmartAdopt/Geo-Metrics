export interface Country {
  cca3: string; // 3-letter code, ideal for use as a unique ID
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