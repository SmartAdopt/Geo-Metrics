import { z } from 'zod';

export const visaValidationSchema = z.object({
  fullName: z.string().min(3, 'El nombre debe tener al menos 3 caracteres'),
  originCountry: z.string().min(1, 'Selecciona tu país de origen'),
  destinationCountry: z.string().min(1, 'Selecciona el país de destino'),
  budget: z.number({ error: "Debes ingresar un monto válido" })
    .min(500, 'El presupuesto mínimo exigido para viajar es de $500'),
  requiresPassport: z.boolean(), // A simple checkbox to simulate the rule
  passportNumber: z.string().optional(),
}).superRefine((data, ctx) => {
  // Here is the complex conditional validation requested by your challenge
  if (data.requiresPassport && (!data.passportNumber || data.passportNumber.trim().length < 5)) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      path: ['passportNumber'], // We tell Zod which field should show the error
      message: 'El pasaporte es obligatorio y debe tener al menos 5 caracteres para este destino.',
    });
  }
});

// Extract the TypeScript type directly from the schema to avoid repeating code
export type VisaFormData = z.infer<typeof visaValidationSchema>;