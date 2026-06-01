import getBaseRequest from '@/config/api.ts';
export const getCountryByCode = async (code: string) => {
    try {
        const response = await getBaseRequest.get(`/alpha/${code}`);
        return response.data;
    } catch (error) {
        console.error(error);
        return [];
    }
}