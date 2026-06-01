/**
 * Input Component
 * Reusable input field with label support and various sizes
 */

import React from 'react';

interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?: string;
  error?: string;
  size?: 'sm' | 'md' | 'lg';
  helperText?: string;
}

/**
 * Input Component - A flexible input field with label and error support
 * @param label - Optional label text displayed above the input
 * @param error - Error message to display below the input
 * @param size - The size of the input (sm, md, lg)
 * @param helperText - Additional helper text below the input
 */
function Input({
  label,
  error,
  size = 'md',
  helperText,
  className,
  ...props
}: InputProps) {
  // Size styles mapping
  const sizeStyles = {
    sm: 'px-2 py-1 text-sm',
    md: 'px-3 py-2 text-base',
    lg: 'px-4 py-3 text-lg',
  };

  // Base input styles
  const baseStyles =
    'w-full rounded-lg border-2 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';

  // Border color based on error state
  const borderColor = error
    ? 'border-red-500 focus:border-red-600 focus:ring-red-500'
    : 'border-gray-300 focus:border-blue-600 focus:ring-blue-600';

  const classes = `${baseStyles} ${sizeStyles[size]} ${borderColor} ${className || ''}`;

  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
      )}
      <input className={classes} {...props} />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
      {helperText && !error && <p className="text-gray-500 text-sm mt-1">{helperText}</p>}
    </div>
  );
};

export default Input;

