import { z } from 'zod';

export const visaValidationSchema = z.object({
  // Personal Information
  fullName: z
    .string()
    .min(3, 'El nombre completo debe tener al menos 3 caracteres')
    .max(100, 'El nombre no puede exceder 100 caracteres'),
  
  email: z
    .string()
    .email('Ingresa un correo electrónico válido'),
  
  phone: z
    .string()
    .regex(/^\+\d{1,3}\d{6,14}$/, 'Teléfono debe estar en formato internacional (+XXxxxxxxxxxx)'),
  
  dateOfBirth: z
    .string()
    .refine((date) => {
      const birthDate = new Date(date);
      const today = new Date();
      const age = today.getFullYear() - birthDate.getFullYear();
      return age >= 18;
    }, 'Debes tener al menos 18 años'),

  // Passport Information
  passportNumber: z
    .string()
    .min(6, 'El número de pasaporte debe tener al menos 6 caracteres')
    .max(20, 'El número de pasaporte no puede exceder 20 caracteres')
    .regex(/^[A-Z0-9]+$/, 'El número de pasaporte debe contener solo letras mayúsculas y números'),
  
  passportExpirationDate: z
    .string()
    .refine((date) => {
      const expirationDate = new Date(date);
      const today = new Date();
      return expirationDate > today;
    }, 'El pasaporte debe tener una fecha de expiración futura'),
  
  nationality: z
    .string()
    .min(1, 'Selecciona una nacionalidad'),

  // Visa Details
  destinationCountry: z
    .string()
    .min(1, 'Selecciona un país de destino'),
  
  visaType: z
    .enum(['tourist', 'business', 'student', 'work', 'family'])
    .refine((val) => !!val, 'Selecciona un tipo de visa válido'),
  
  purposeOfVisit: z
    .string()
    .min(10, 'La descripción del propósito debe tener al menos 10 caracteres')
    .max(500, 'La descripción no puede exceder 500 caracteres'),
  
  expectedDuration: z
    .coerce
    .number()
    .min(1, 'La duración debe ser al menos 1 día')
    .max(730, 'La duración no puede exceder 2 años (730 días)'),
  
  startDate: z
    .string()
    .refine((date) => {
      const startDate = new Date(date);
      const today = new Date();
      return startDate >= today;
    }, 'La fecha de inicio debe ser igual o posterior a hoy'),

  // Emergency Contact
  emergencyContactName: z
    .string()
    .min(3, 'El nombre del contacto debe tener al menos 3 caracteres')
    .max(100, 'El nombre no puede exceder 100 caracteres'),
  
  emergencyContactPhone: z
    .string()
    .regex(/^\+\d{1,3}\d{6,14}$/, 'Teléfono debe estar en formato internacional (+XXxxxxxxxxxx)'),
  
  emergencyContactRelationship: z
    .enum(['family', 'friend', 'colleague', 'other'])
    .refine((val) => !!val, 'Selecciona una relación válida'),

  // Additional
  previousVisaRejections: z
    .boolean()
    .default(false),
  
  visaRejectionExplanation: z
    .string()
    .max(500, 'La explicación no puede exceder 500 caracteres')
    .optional()
    .nullable(),
  
  healthConditions: z
    .string()
    .array()
    .default([])
    .optional(),
  
  agreeToTerms: z
    .boolean()
    .refine((val) => val === true, 'Debes aceptar los términos y condiciones'),
});

export type VisaApplicationFormData = z.infer<typeof visaValidationSchema>;

// Convert Zod errors to Formik-compatible format
export const validateWithZod = async (values: unknown) => {
  try {
    await visaValidationSchema.parseAsync(values);
    return {};
  } catch (error) {
    if (error instanceof z.ZodError) {
      const formikErrors: Record<string, string> = {};
      error.issues.forEach((issue) => {
        const path = issue.path.join('.');
        formikErrors[path] = issue.message;
      });
      return formikErrors;
    }
    return {};
  }
};
