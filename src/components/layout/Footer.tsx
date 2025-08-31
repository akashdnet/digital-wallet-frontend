import Logo from '/logo.svg'
import { Link } from 'react-router'; // Corrected: 'react-router-dom' instead of 'react-router'

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 py-8 w-full transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* part 1  */}
          <div className="flex flex-col items-center md:items-center md:justify-center">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <img
                src={Logo}
                className="max-h-8 dark:invert"
                alt="logo"
              />
              <span className="text-lg font-semibold tracking-tighter text-gray-900 dark:text-white">
                Digital Wallet Solution
              </span>
            </Link>
            <p className="text-gray-600 dark:text-gray-400 text-center md:text-left">
              Lots of cashback offers that you don't want to miss!
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Quick Links</h3>
            <ul className="text-gray-600 dark:text-gray-400 text-center md:text-left">
              <li className="mb-2">
                <Link to="/" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition">
                  Home
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/services" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition">
                  Services
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/about" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition">
                  About
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/contact" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>





          {/* about*/}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Contact</h3>
            <p className="text-gray-600 dark:text-gray-400 text-center md:text-left">
              Bonosree, Rampura, Dhaka<br />
              Email: info@digitalwallet.com<br />
              Phone: +1888 45886-78090
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-200 dark:border-gray-700 pt-6 mt-8 text-center text-gray-500 dark:text-gray-400 text-sm">
          © {new Date().getFullYear()} Digital Wallet Solution. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
