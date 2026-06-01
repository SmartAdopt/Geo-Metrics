/**
 * VisaForm Component
 * React Hook Form implementation for visa application
 * Optimized for instant validation and performance
 */

import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import Input from './Input';
import Button from './Button';
import Spinner from './Spinner';
import type { VisaFormInputs } from '../models/visaForm';
import { useVisaSubmit } from '../hooks/useVisaSubmit';

/**
 * VisaForm Component - Visa application form using React Hook Form
 * Features:
 * - Real-time field validation
 * - Optimized re-renders using React Hook Form
 * - Clean error handling and display
 * - Success/error message feedback
 */
function VisaForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm<VisaFormInputs>({
    mode: 'onChange', // Validate on change for instant feedback
    defaultValues: {
      purpose: 'tourism',
      acceptTerms: false,
    },
  });

  const { submitApplication, status, error, resetStatus } = useVisaSubmit();

  // Handle form submission
  const onSubmit = async (data: VisaFormInputs) => {
    await submitApplication(data);
  };

  // Reset form on success
  useEffect(() => {
    if (status === 'success') {
      reset();
      setTimeout(() => {
        resetStatus();
      }, 3000);
    }
  }, [status, reset, resetStatus]);

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8">
      {/* Title */}
      <h1 className="text-3xl font-bold text-gray-800 mb-2">
        Visa Application Form
      </h1>
      <p className="text-gray-600 mb-8">
        Fill out this form to apply for a visa to your destination country
      </p>

      {/* Success Message */}
      {status === 'success' && (
        <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 mb-6">
          <p className="font-bold">Application Submitted Successfully!</p>
          <p>Your visa application has been submitted. We will review it shortly.</p>
        </div>
      )}

      {/* Error Message */}
      {status === 'error' && error && (
        <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-6">
          <p className="font-bold">Submission Error</p>
          <p>{error}</p>
        </div>
      )}

      {/* Loading State */}
      {status === 'submitting' && (
        <div className="mb-6 flex justify-center">
          <Spinner size="md" message="Submitting your application..." />
        </div>
      )}

      {/* Form */}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Full Name */}
        <Input
          {...register('fullName', {
            required: 'Full name is required',
            minLength: { value: 3, message: 'Name must be at least 3 characters' },
          })}
          label="Full Name *"
          placeholder="Enter your full name"
          error={errors.fullName?.message}
        />

        {/* Email */}
        <Input
          {...register('email', {
            required: 'Email is required',
            pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Invalid email format' },
          })}
          label="Email Address *"
          type="email"
          placeholder="Enter your email"
          error={errors.email?.message}
        />

        {/* Passport Number */}
        <Input
          {...register('passport', {
            required: 'Passport number is required',
            minLength: { value: 6, message: 'Passport number must be at least 6 characters' },
          })}
          label="Passport Number *"
          placeholder="Enter your passport number"
          error={errors.passport?.message}
        />

        {/* Nationality */}
        <Input
          {...register('nationality', {
            required: 'Nationality is required',
          })}
          label="Nationality *"
          placeholder="Enter your nationality"
          error={errors.nationality?.message}
        />

        {/* Destination Country */}
        <Input
          {...register('destinationCountry', {
            required: 'Destination country is required',
          })}
          label="Destination Country *"
          placeholder="Enter destination country"
          error={errors.destinationCountry?.message}
        />

        {/* Purpose */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Purpose of Visit *
          </label>
          <select
            {...register('purpose', {
              required: 'Purpose is required',
            })}
            className="w-full px-3 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
          >
            <option value="tourism">Tourism</option>
            <option value="business">Business</option>
            <option value="work">Work</option>
            <option value="study">Study</option>
            <option value="other">Other</option>
          </select>
          {errors.purpose && (
            <p className="text-red-500 text-sm mt-1">{errors.purpose.message}</p>
          )}
        </div>

        {/* Start Date */}
        <Input
          {...register('startDate', {
            required: 'Start date is required',
          })}
          label="Start Date *"
          type="date"
          error={errors.startDate?.message}
        />

        {/* End Date */}
        <Input
          {...register('endDate', {
            required: 'End date is required',
          })}
          label="End Date *"
          type="date"
          error={errors.endDate?.message}
        />

        {/* Terms Checkbox */}
        <div className="flex items-center">
          <input
            {...register('acceptTerms', {
              required: 'You must accept the terms',
            })}
            type="checkbox"
            id="acceptTerms"
            className="w-4 h-4 rounded border-gray-300 focus:ring-blue-600"
          />
          <label htmlFor="acceptTerms" className="ml-2 text-sm text-gray-700">
            I accept the terms and conditions *
          </label>
          {errors.acceptTerms && (
            <p className="text-red-500 text-sm ml-auto">{errors.acceptTerms.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <div className="flex gap-4 pt-4">
          <Button
            type="submit"
            variant="primary"
            size="lg"
            disabled={!isValid || status === 'submitting'}
            isLoading={status === 'submitting'}
            className="flex-1"
          >
            {status === 'submitting' ? 'Submitting...' : 'Submit Application'}
          </Button>
          <Button
            type="button"
            variant="outline"
            size="lg"
            onClick={() => {
              reset();
              resetStatus();
            }}
            className="flex-1"
          >
            Reset Form
          </Button>
        </div>
      </form>
    </div>
  );
}

export default VisaForm;

