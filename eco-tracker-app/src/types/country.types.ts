export interface CountryName {
    common: string;
    official: string;
}

export interface CountryFlags {
    png: string;
    svg: string;
    alt?: string;
}

export interface CountryCurrencies {
    [key: string]: {
        name: string;
        symbol: string;
    };
}

export interface CountryLanguages {
    [key: string]: string;
}

export interface CountryMaps {
    googleMaps: string;
    openStreetMaps: string;
}

export interface Country {
    name: CountryName;

    cca2: string;

    cca3: string;

    capital?: string[];

    region: string;

    subregion?: string;

    population: number;

    continents: string[];

    flags: CountryFlags;

    languages?: CountryLanguages;

    currencies?: CountryCurrencies;

    borders?: string[];

    timezones: string[];

    maps: CountryMaps;

    area: number;

    independent?: boolean;

    status: string;
}