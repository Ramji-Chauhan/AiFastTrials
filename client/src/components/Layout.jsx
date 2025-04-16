import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const Layout = ({ children }) => {
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <nav className="bg-white shadow-sm fixed w-full z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-14">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="text-xl font-semibold text-gray-900">
                AI Fast Trials
              </Link>
            </div>

            {/* Navigation Links and Auth Buttons */}
            <div className="hidden sm:flex sm:items-center sm:space-x-8">
              <Link
                to="/"
                className="text-sm font-medium text-gray-500 hover:text-gray-900"
              >
                Home
              </Link>
              <Link
                to="/voice-agent"
                className="text-sm font-medium text-gray-500 hover:text-gray-900"
              >
                Voice Agent
              </Link>
              <Link
                to="/recruitment"
                className="text-sm font-medium text-gray-500 hover:text-gray-900"
              >
                Recruitment
              </Link>
              <Link
                to="/about"
                className="text-sm font-medium text-gray-500 hover:text-gray-900"
              >
                About
              </Link>
              <Link
                to="/contact"
                className="text-sm font-medium text-gray-500 hover:text-gray-900"
              >
                Contact
              </Link>
              <div className="h-5 w-px bg-gray-200"></div>
              <Link
                to="/login"
                className="text-sm font-medium text-gray-500 hover:text-gray-900"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="text-sm font-medium px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow pt-14">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-50">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">AI Fast Trials</h3>
              <p className="text-gray-400">
                Accelerating clinical trials with AI-powered patient recruitment, screening, and management solutions.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link to="/" className="text-gray-400 hover:text-white">Home</Link></li>
                <li><Link to="/voice-agent" className="text-gray-400 hover:text-white">Voice Agent</Link></li>
                <li><Link to="/recruitment" className="text-gray-400 hover:text-white">Recruitment</Link></li>
                <li><Link to="/about" className="text-gray-400 hover:text-white">About</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><Link to="/clinical-trial-guide" className="text-gray-400 hover:text-white">Clinical Trial Guide</Link></li>
                <li><Link to="/ai-in-healthcare" className="text-gray-400 hover:text-white">AI in Healthcare</Link></li>
                <li><Link to="/patient-resources" className="text-gray-400 hover:text-white">Patient Resources</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <ul className="space-y-2 text-gray-400">
                <li>30 Mount Elizabeth Rd, Singapore 228519</li>
                <li>+65 8178 1675 (SG)</li>
                <li>+1 917 704 8264 (US)</li>
                <li>info@aifasttrials.com</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800">
            <p className="text-gray-400 text-sm">
              © 2025 AI Fast Trials. All Rights Reserved.
            </p>
            <div className="mt-4 flex space-x-6">
              <Link to="/privacy" className="text-gray-400 hover:text-white text-sm">Privacy Policy</Link>
              <Link to="/terms" className="text-gray-400 hover:text-white text-sm">Terms of Service</Link>
              <Link to="/hipaa" className="text-gray-400 hover:text-white text-sm">HIPAA Compliance</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout; 