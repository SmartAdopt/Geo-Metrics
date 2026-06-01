import { z } from 'zod';

/**
 * Zod validation schema for Visa Application form.
 */
export const visaSchema = z.object({
  fullName: z
    .string()
    .min(1, 'Full name is required')
    .min(3, 'Name must be at least 3 characters long'),
  email: z
    .string()
    .min(1, 'Email address is required')
    .email('Invalid email address'),
  passport: z
    .string()
    .min(1, 'Passport number is required')
    .regex(/^[A-Z0-9]{6,9}$/i, 'Passport must be alphanumeric (6-9 characters)'),
  destination: z
    .string()
    .min(1, 'You must select a destination country'),
  password: z
    .string()
    .min(1, 'Password is required')
    .min(8, 'Must be at least 8 characters long')
    .regex(/(?=.*[A-Za-z])(?=.*\d)/, 'Must contain at least one letter and one number'),
  acceptTerms: z
    .boolean()
    .refine((val) => val === true, {
      message: 'You must accept the terms and conditions',
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
