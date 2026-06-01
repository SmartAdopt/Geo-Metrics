import getBaseRequest from '@/config/api.ts';

export const getAllCountriesByName = async (name: string) => {
    try {
        const response = await getBaseRequest.get(`/name/${name}`);
        return response.data;
    } catch (error) {
        console.error(error);
        return [];
    }
}

export const getAllCountries = async () => {
    try {
        const response = await getBaseRequest.get("/all",
            {
                params: {
                    fields: 'name,flags,cca2,capital,region',
                }
            });
        return response.data;
    } catch (error) {
        console.error(error);
        return [];
    }
}