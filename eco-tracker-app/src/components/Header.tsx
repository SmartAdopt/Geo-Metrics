/**
 * Header Component
 * Top navigation bar for the application
 */


import { Link } from 'react-router-dom';

/**
 * Header Component - Main navigation bar with links to all pages
 */
function Header() {
  return (
    <header className="bg-blue-600 text-white shadow-lg sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo / Brand */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
            <span className="font-bold text-blue-600">GM</span>
          </div>
          <h1 className="text-2xl font-bold">Geo-Metrics</h1>
        </div>

        {/* Navigation Links */}
        <nav className="flex items-center gap-6">
          <Link to="/countries" className="hover:text-blue-200 transition-colors">
            Countries
          </Link>
          <Link to="/visa-application" className="hover:text-blue-200 transition-colors">
            Visa Application
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;

