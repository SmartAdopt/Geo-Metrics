/**
 * Hook for managing visa application submission
 * Handles form validation, submission, and response handling
 */

import { useState } from 'react';
import type { VisaFormInputs } from '../models/visaForm';
import type { VisaApplicationStatus } from '../models/visaForm';

interface UseVisaSubmitReturn {
  submitApplication: (data: VisaFormInputs) => Promise<void>;
  status: VisaApplicationStatus;
  error: string | null;
  resetStatus: () => void;
}

/**
 * Custom hook to handle visa application submission
 * Simulates API call (no real backend yet)
 * @returns Object with submission handler and status states
 */
export const useVisaSubmit = (): UseVisaSubmitReturn => {
  const [status, setStatus] = useState<VisaApplicationStatus>('idle');
  const [error, setError] = useState<string | null>(null);

  // Simulate API submission
  const submitApplication = async (data: VisaFormInputs): Promise<void> => {
    try {
      setStatus('submitting');
      setError(null);

      // Validate data
      if (!data.fullName || !data.email || !data.passport) {
        throw new Error('Please fill all required fields');
      }

      // Simulate API call (delay 2 seconds)
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Log form data to console (for demonstration)
      console.log('Visa Application Submitted:', data);

      // Set success status
      setStatus('success');
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Failed to submit application';
      setError(message);
      setStatus('error');
    }
  };

  // Reset status
  const resetStatus = () => {
    setStatus('idle');
    setError(null);
  };

  return {
    submitApplication,
    status,
    error,
    resetStatus,
  };
};
