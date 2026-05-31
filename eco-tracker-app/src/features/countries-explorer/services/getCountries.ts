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