/**
 * Pie de página simple para mantener la estructura visual.
 */
export function Footer() {
  return (
    <footer className="bg-gray-100 border-t border-gray-200 mt-auto py-6">
      <div className="max-w-7xl mx-auto px-4 text-center text-gray-500 text-sm">
        <p>© {new Date().getFullYear()} Geo-Metrics Explorer.Programming Web</p>

      </div>
    </footer>
  );
}
