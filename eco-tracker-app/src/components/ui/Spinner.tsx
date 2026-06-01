/**
 * Reusable loading spinner component.
 */
export function Spinner() {
  return (
    <div className="flex justify-center items-center p-4">
      <div className="animate-spin rounded-full h-10 w-10 border-4 border-gray-300 border-t-blue-600"></div>
    </div>
  );
}
