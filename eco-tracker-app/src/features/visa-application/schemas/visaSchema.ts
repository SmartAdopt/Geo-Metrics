import { z } from 'zod';

/**
 * Zod validation schema for Visa Application form.
 */
export const visaSchema = z.object({
  fullName: z
    .string()
    .min(1, 'El nombre completo es obligatorio')
    .min(3, 'El nombre debe tener al menos 3 caracteres'),
  email: z
    .string()
    .min(1, 'El correo electrónico es obligatorio')
    .email('Dirección de correo inválida'),
  passport: z
    .string()
    .min(1, 'El número de pasaporte es obligatorio')
    .regex(/^[A-Z0-9]{6,9}$/i, 'El pasaporte debe ser alfanumérico (6-9 caracteres)'),
  destination: z
    .string()
    .min(1, 'Debe seleccionar un país de destino'),
  password: z
    .string()
    .min(1, 'La contraseña es obligatoria')
    .min(8, 'Debe tener al menos 8 caracteres')
    .regex(/(?=.*[A-Za-z])(?=.*\d)/, 'Debe contener al menos una letra y un número'),
  acceptTerms: z
    .boolean()
    .refine((val) => val === true, {
      message: 'Debe aceptar los términos y condiciones',
    }),
});

// Inferimos el tipo directamente del esquema de Zod
export type VisaFormValues = z.infer<typeof visaSchema>;

/**
 * Adapter function to connect Zod with Formik native validation.
 */
export const validateVisaForm = (values: VisaFormValues) => {
  const result = visaSchema.safeParse(values);
  if (result.success) return {};

  const errors: Partial<Record<keyof VisaFormValues, string>> = {};
  result.error.issues.forEach((issue) => {
    const key = issue.path[0] as keyof VisaFormValues;
    if (!errors[key]) {
      errors[key] = issue.message;
    }
  });
  return errors;
};
