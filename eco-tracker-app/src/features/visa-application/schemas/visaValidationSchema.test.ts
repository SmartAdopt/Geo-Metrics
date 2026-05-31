/// <reference types="jest" />
import { visaValidationSchema } from './visaValidationSchema';

describe('Pruebas en visaValidationSchema', () => {
  
  test('Debe fallar si el destino exige pasaporte y no se proporciona', () => {
    const invalidData = {
      fullName: 'Juan Pérez',
      originCountry: 'ECU',
      destinationCountry: 'USA',
      budget: 1000,
      requiresPassport: true, 
      passportNumber: '', // Intentionally empty field
    };

    const result = visaValidationSchema.safeParse(invalidData);
    
    expect(result.success).toBe(false);
    if (!result.success) {
      const passportError = result.error.issues.find(issue => issue.path[0] === 'passportNumber');
      expect(passportError).toBeDefined();
      expect(passportError?.message).toBe('El pasaporte es obligatorio y debe tener al menos 5 caracteres para este destino.');
    }
  });

  test('Debe pasar si los datos son correctos', () => {
    const validData = {
      fullName: 'Ana Gómez',
      originCountry: 'COL',
      destinationCountry: 'ESP',
      budget: 1500,
      requiresPassport: true,
      passportNumber: 'AB12345',
    };

    const result = visaValidationSchema.safeParse(validData);
    expect(result.success).toBe(true);
  });
});