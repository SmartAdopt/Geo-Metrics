/**
 * Spinner Component
 * Global loading indicator component
 */



interface SpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  message?: string;
  fullScreen?: boolean;
}

/**
 * Spinner Component - A loading indicator with optional message
 * @param size - The size of the spinner (sm, md, lg)
 * @param message - Optional message to display below the spinner
 * @param fullScreen - If true, displays as full-screen overlay
 */
function Spinner({
  size = 'md',
  message,
  fullScreen,
}: SpinnerProps) {
  // Size mapping for spinner
  const sizeStyles = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
  };

  const spinner = (
    <div className="flex flex-col items-center justify-center">
      <svg
        className={`${sizeStyles[size]} animate-spin text-blue-600`}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        ></circle>
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        ></path>
      </svg>
      {message && (
        <p className="mt-4 text-gray-600 text-lg font-medium">{message}</p>
      )}
    </div>
  );

  // If fullScreen, render as overlay
  if (fullScreen) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        {spinner}
      </div>
    );
  }

  return spinner;
}

export default Spinner;

