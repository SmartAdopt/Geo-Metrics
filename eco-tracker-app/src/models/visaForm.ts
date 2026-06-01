/**
 * Visa form models
 */

export interface VisaFormInputs {
  fullName: string;
  email: string;
  passport: string;
  nationality: string;
  destinationCountry: string;
  purpose: 'tourism' | 'business' | 'work' | 'study' | 'other';
  startDate: string;
  endDate: string;
  acceptTerms: boolean;
}

export type VisaApplicationStatus = 'idle' | 'submitting' | 'success' | 'error';

