import {makeAutoObservable, runInAction} from 'mobx'
import {getAllCountries} from "@/features/countries-explorer/services/getCountries";
import type { Country } from "@/types/country.types";


class RootStore {
    countries: Country[] = [];
    selectedCountry: Country | null = null;
    favorites: Country[] = [];
    isLoading = false;
    error: string | null = null;
    search = "";
    region = "";

    constructor() {
        makeAutoObservable(this);
    }

    async fetchCountries() {
        this.isLoading = true;
        this.error = null;

        try {
            const response = await getAllCountries();
            runInAction(() => {
                this.countries = response;
            });

        } catch (error) {
            console.error(error);
            runInAction(() => {
                this.error = "Error loading countries";
            });

        } finally {
            runInAction(() => {
                this.isLoading = false;
            });

        }
    }

    setSearch(value: string) {
        this.search = value;
    }

    setRegion(value: string) {
        this.region = value;
    }

    toggleFavorite(country: Country) {

        const exists = this.favorites.some(
            fav => fav.cca3 === country.cca3
        );

        if (exists) {
            this.favorites = this.favorites.filter(
                fav => fav.cca3 !== country.cca3
            );
        } else {
            this.favorites.push(country);
        }
    }

    get filteredCountries() {

        return this.countries.filter(country => {

            const matchesSearch =
                country.name.common
                    .toLowerCase()
                    .includes(this.search.toLowerCase());

            const matchesRegion =
                this.region === "" ||
                country.region === this.region;

            return matchesSearch && matchesRegion;
        });
    }

    clearSelectedCountry() {
        this.selectedCountry = null;
    }

}

export const rootStore = new RootStore();