import { useState } from 'react';
import type { VisaFormValues } from '../schemas/visaSchema';

export function useVisaForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (
    values: VisaFormValues,
    { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }
  ) => {
    // Simulate API call
    setTimeout(() => {
      console.log('Visa Application Data:', values);
      setIsSubmitted(true);
      setSubmitting(false);
    }, 1500);
  };

  const resetForm = () => {
    setIsSubmitted(false);
  };

  return {
    isSubmitted,
    handleSubmit,
    resetForm,
  };
}
