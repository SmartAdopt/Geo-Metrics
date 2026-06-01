import {makeAutoObservable, runInAction} from 'mobx'
import {getAllCountries, getAllCountriesByName} from "@/features/countries-explorer/services/getCountries";
import {getCountryByCode} from "@/features/country-detail/services/getCountry";
import type {Country} from "@/types/country.types";


import type { VisaApplicationFormData } from "@/features/visa-application/schemas/visaValidationSchema";

class RootStore {
    countries: Country[] = [];
    filteredCountries: Country[] = [];
    isLoading = false;
    error: string | null = null;
    country: Country[] = [];
    visaApplications: VisaApplicationFormData[] = [];

    constructor() {
        makeAutoObservable(this);
    }

    addVisaApplication(application: VisaApplicationFormData) {
        this.visaApplications.push(application);
    }

    async fetchCountries() {
        this.isLoading = true;
        this.error = null;

        try {
            const response = await getAllCountries();
            runInAction(() => {
                this.countries = response;
                this.filteredCountries = response;
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

    async searchCountries(name: string) {
        this.isLoading = true;
        this.error = null;

        try {
            const response = await getAllCountriesByName(name);
            runInAction(() => {
                this.filteredCountries = response;
            });
        } catch (error) {
            console.error(error);
            runInAction(() => {
                this.error = "Country not found";
                this.filteredCountries = [];
            });
        } finally {
            runInAction(() => {
                this.isLoading = false;
            });
        }
    }

    async fetchCountryByCode(code: string) {
        this.isLoading = true;
        this.error = null;

        try {
            const response = await getCountryByCode(code);
            runInAction(() => {
                this.country = response;
            });

        } catch (error) {
            console.error(error);
            runInAction(() => {
                this.error = "Error loading country";
            });

        } finally {
            runInAction(() => {
                this.isLoading = false;
            });

        }
    }

}

export const rootStore = new RootStore();