import { forwardRef, type InputHTMLAttributes } from 'react';

/**
 * Reusable Input component using forwardRef.
 */
export const Input = forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement>>(
  ({ className = '', ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={`w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100 ${className}`}
        {...props}
      />
    );
  }
);

Input.displayName = 'Input';
