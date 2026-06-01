/**
 * Visa Application Page
 * Displays the visa application form
 */


import VisaForm from '../components/VisaForm';

/**
 * VisaApplicationPage Component - Page for visa application
 */
function VisaApplicationPage() {
  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4">
        <VisaForm />
      </div>
    </div>
  );
};

export default VisaApplicationPage;
