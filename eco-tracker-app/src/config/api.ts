import axios from "axios";

const URL_BASE: string = import.meta.env.API_BASE_URL;

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
