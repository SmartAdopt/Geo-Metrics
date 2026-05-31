import getBaseRequest from '@/config/api.ts';

export const getAllCountries = async () => {
    try {
        const response = await getBaseRequest.get("/all",
            {
                params: {
                    status: true,
                    fields: 'name,flags',
                }
            });
        return response.data;
    } catch (error) {
        console.error(error);
        return [];
    }
}

export const getAllCountriesByName = async (name: string) => {
    try {
        const response = await getBaseRequest.get(`/name/${name}`);
        return response.data;
    } catch (error) {
        console.error(error);
        return [];
    }
}

export const getAllCountriesByFullName = async (fullname: string) => {
    try {
        const response = await getBaseRequest.get(`/name/${fullname}`,
            {
                params: {
                    fullText: true,
                }
            }
        );
        return response.data;
    } catch (error) {
        console.error(error);
        return [];
    }
}

export const getCountriesByCode = async (code: string) => {
    try {
        const response = await getBaseRequest.get(`/alpha/${code}`);
        return response.data;
    } catch (error) {
        console.error(error);
        return [];
    }
}

export const getCountriesByCurrency = async (currency: string) => {
    try {
        const response = await getBaseRequest.get(`/currency/${currency}`);
        return response.data;
    } catch (error) {
        console.error(error);
        return [];
    }
}