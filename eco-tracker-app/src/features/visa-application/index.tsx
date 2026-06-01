
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Input } from '../../components/ui/Input';
import { Button } from '../../components/ui/Button';
import { useVisaForm } from './hooks/useVisaForm';
import { validateVisaForm } from './schemas/visaSchema';
import type { VisaFormValues } from './schemas/visaSchema';

/**
 * Visa Application Form using Formik and Zod validation.
 */
export default function VisaApplication() {
  const { isSubmitted, handleSubmit, resetForm } = useVisaForm();

  const initialValues: VisaFormValues = {
    fullName: '',
    email: '',
    passport: '',
    destination: '',
    password: '',
    acceptTerms: false,
  };

  if (isSubmitted) {
    return (
      <div className="max-w-2xl mx-auto py-12 px-4 text-center">
        <div className="bg-green-50 border-l-4 border-green-500 p-8 rounded-md shadow-sm">
          <h2 className="text-3xl font-bold text-green-800 mb-4">¡Application Received!</h2>
          <p className="text-lg text-green-700 mb-6">
            Your Global Explorer Visa application has been submitted successfully.
            We will process your request shortly.
          </p>
          <Button onClick={resetForm}>
            Submit another application
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-xl mx-auto bg-white rounded-xl shadow-md p-8 my-8 border border-gray-200">
      <h1 className="text-2xl font-bold text-gray-800 mb-6 border-b pb-2">
        Solicitud de Visado Electrónico
      </h1>

      <Formik
        initialValues={initialValues}
        validate={validateVisaForm}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="fullName">
                Nombre Completo
              </label>
              {/* Formik provee el componente Field que se enlaza automáticamente con nuestro <Input> usando as={Input} */}
              <Field
                as={Input}
                type="text"
                id="fullName"
                name="fullName"
                placeholder="Ej. Juan Pérez"
              />
              <ErrorMessage name="fullName" component="div" className="text-red-500 text-sm mt-1" />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="email">
                Correo Electrónico
              </label>
              <Field
                as={Input}
                type="email"
                id="email"
                name="email"
                placeholder="ejemplo@correo.com"
              />
              <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="passport">
                  Número de Pasaporte
                </label>
                <Field
                  as={Input}
                  type="text"
                  id="passport"
                  name="passport"
                  placeholder="Alfanumérico (6-9 carácteres)"
                />
                <ErrorMessage name="passport" component="div" className="text-red-500 text-sm mt-1" />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="destination">
                  País de Destino
                </label>
                <Field
                  as="select"
                  id="destination"
                  name="destination"
                  className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                >
                  <option value="">Seleccione un país...</option>
                  <option value="MEX">México</option>
                  <option value="CAN">Canadá</option>
                  <option value="USA">Estados Unidos</option>
                  <option value="GBR">Reino Unido</option>
                  <option value="JPN">Japón</option>
                </Field>
                <ErrorMessage name="destination" component="div" className="text-red-500 text-sm mt-1" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="password">
                Contraseña para seguimiento
              </label>
              <Field
                as={Input}
                type="password"
                id="password"
                name="password"
                placeholder="Mínimo 8 caracteres (letras y números)"
              />
              <ErrorMessage name="password" component="div" className="text-red-500 text-sm mt-1" />
            </div>

            <div className="pt-2">
              <label className="flex items-center space-x-2 text-sm text-gray-700 cursor-pointer">
                <Field type="checkbox" name="acceptTerms" className="rounded text-blue-600 focus:ring-blue-500 h-4 w-4" />
                <span>Declaro que toda la información proporcionada es verídica y acepto los términos.</span>
              </label>
              <ErrorMessage name="acceptTerms" component="div" className="text-red-500 text-sm mt-1" />
            </div>

            <div className="pt-4 border-t border-gray-100">
              <Button type="submit" disabled={isSubmitting} className="w-full flex justify-center items-center">
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Procesando solicitud...
                  </>
                ) : (
                  'Enviar Solicitud'
                )}
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}
