/**
 * Footer Component
 * Bottom footer section of the application
 */



/**
 * Footer Component - Application footer with copyright information
 */
function Footer() {
  return (
    <footer className="bg-gray-800 text-white mt-12">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-bold mb-3">About Geo-Metrics</h3>
            <p className="text-gray-400 text-sm">
              Exploring countries data and visa information with ease.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-3">Quick Links</h3>
            <ul className="text-gray-400 text-sm space-y-1">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Info */}
          <div>
            <h3 className="text-lg font-bold mb-3">Data Source</h3>
            <p className="text-gray-400 text-sm">Data powered by REST Countries API</p>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400 text-sm">
          <p>&copy; 2026 Geo-Metrics. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

