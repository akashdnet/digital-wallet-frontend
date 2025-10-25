import { Wallet } from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import { Link } from "react-router-dom";

function FooterComponent() {
  return (
    <footer className="bg-brand-dark text-brand-light pt-8 pb-8 border-t border-gray-700 ">
      <h1 className=" text-xl text-center  font-semibold ">Your trusted digital wallet partner</h1>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pb-12 ">
          <div>
            <Link to="/" className="flex items-center space-x-2">
            <Wallet className="w-6 h-6 text-primary" />
            <span className="text-xl font-bold">D-Wallet</span>
          </Link>
            <p className="mt-4 text-sm  leading-relaxed">
              Manage your finances effortlessly. Send, spend, and save your money with Nexus Wallet—the secure, smart, and simple way to handle your digital cash.
            </p>
          </div>

          <div className="">
            <h3 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/" className="hover:text-brand-primary transition">
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#features"
                  className="hover:text-brand-primary transition"
                >
                  Features
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-brand-primary transition">
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-brand-primary transition"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="#"
                  className="hover:text-brand-primary transition"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="hover:text-brand-primary transition"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="hover:text-brand-primary transition"
                >
                  Support
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <Link
                to="#"
                className="p-2 rounded-full bg-black text-white hover:bg-brand-primary transition"
              >
                <FaFacebookF className="w-4 h-4" />
              </Link>
              <Link
                to="#"
                className="p-2 rounded-full bg-black text-white hover:bg-brand-primary transition"
              >
                <FaTwitter className="w-4 h-4" />
              </Link>
              <Link
                to="#"
                className="p-2 rounded-full bg-black text-white hover:bg-brand-primary transition"
              >
                <FaLinkedinIn className="w-4 h-4" />
              </Link>
              <Link
                to="#"
                className="p-2 rounded-full bg-black text-white hover:bg-brand-primary transition"
              >
                <FaInstagram className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        
      </div>
      <hr className=""/>
      <div className="mt-8 text-center text-sm text-gray-400 ">
          <p>© {new Date().getFullYear()} D-Wallet. All rights reserved.</p>
          
        </div>
    </footer>
  );
}

export default FooterComponent;
