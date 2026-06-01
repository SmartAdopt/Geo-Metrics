import type { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
}

/**
 * Reusable Button component with different variants.
 */
export function Button({ children, variant = 'primary', className = '', ...props }: ButtonProps) {
  const baseStyle = "px-4 py-2 rounded-md font-medium transition-colors focus:outline-none disabled:opacity-50";
  
  let variantStyle = "";
  if (variant === 'primary') {
    variantStyle = "bg-blue-600 text-white hover:bg-blue-700";
  } else if (variant === 'secondary') {
    variantStyle = "bg-gray-200 text-gray-800 hover:bg-gray-300";
  } else if (variant === 'outline') {
    variantStyle = "border border-gray-300 bg-transparent text-gray-700 hover:bg-gray-50";
  }

  return (
    <button className={`${baseStyle} ${variantStyle} ${className}`} {...props}>
      {children}
    </button>
  );
}
