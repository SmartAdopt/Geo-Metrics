import axios from "axios";

const URL_BASE: string = import.meta.env.VITE_API_BASE_URL || 'https://restcountries.com/v3.1/';

const getBaseRequest = axios.create(
    {
        baseURL: URL_BASE,
        headers: {
            "Content-Type": "application/json",
        },
        timeout: 10000,
    }
);
export default getBaseRequest;
