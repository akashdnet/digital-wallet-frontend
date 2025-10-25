import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import OnlinePayPng from "@/assets/online-pay.png"

const HeroComponent = () => {
  return (
    <section className="relative bg-white overflow-hidden">
      
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-100 via-white to-emerald-100"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative max-w-6xl">
        <div className="py-24 sm:py-32 lg:py-40 grid lg:grid-cols-2 gap-12 items-center">
          
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-brand-dark tracking-tight">
              <span className="block">The Future of</span>
              <span className="block text-brand-primary">Digital Payments</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-brand-muted max-w-lg mx-auto lg:mx-0">
              Manage your finances effortlessly. Send, spend, and save your money
              with Nexus Wallet—the secure, smart, and simple way to handle your
              digital cash.
            </p>

            
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Link
                to="/sing-in"
                className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 text-lg font-semibold bg-brand-primary rounded-lg shadow-lg hover:bg-brand-primary-light focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-primary transition-all duration-300 transform hover:scale-105"
              >
                Get Started
                <FaArrowRight className="w-5 h-5 ml-2" />
              </Link>

              <Link
              id="joy-about"
                to="/about"
                className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 text-lg font-semibold text-brand-primary bg-indigo-100 rounded-lg hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-300"
              >
                Learn More
              </Link>
            </div>
          </div>

          
          <div className="hidden lg:block">
            <img
              src={OnlinePayPng}
              className="rounded-2xl w-full shadow-2xl transform hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroComponent;
