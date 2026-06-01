import {useState} from 'react';
import type {VisaApplicationFormData} from '@/features/visa-application/schemas/visaValidationSchema';

interface SubmitResponse {
    success: boolean;
    message: string;
}

export const useVisaSubmit = () => {
    const [loading, setLoading] = useState(false);
    const [response, setResponse] = useState<SubmitResponse | null>(null);

    const submitForm = async (values: VisaApplicationFormData): Promise<SubmitResponse> => {
        setLoading(true);
        setResponse(null);

        try {
            // Simulated API call - replace with actual endpoint
            // const result = await fetch('/api/visa-application', {
            //   method: 'POST',
            //   headers: { 'Content-Type': 'application/json' },
            //   body: JSON.stringify(values),
            // });
            // const data = await result.json();

            // Simulated successful response
            await new Promise((resolve) => setTimeout(resolve, 1500));

            const successResponse: SubmitResponse = {
                success: true,
                message: `Formulario enviado exitosamente. Tu solicitud para ${values.destinationCountry} ha sido registrada.`,
            };

            setResponse(successResponse);
            return successResponse;
        } catch (error) {
            const errorResponse: SubmitResponse = {
                success: false,
                message: 'Error al enviar el formulario. Por favor intenta nuevamente.' + 'El codigo del error es: ' + error,
            };

            setResponse(errorResponse);
            return errorResponse;
        } finally {
            setLoading(false);
        }
    };

    return {
        submitForm,
        loading,
        response,
    };
};
