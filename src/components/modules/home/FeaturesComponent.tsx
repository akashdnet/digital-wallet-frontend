import React from "react";
import { FaLock, FaBolt, FaGlobe } from "react-icons/fa";

const features = [
  {
    name: "Bank-Grade Security",
    description:
      "Your data and transactions are protected with multi-layer encryption and fraud prevention.",
    icon: FaLock,
  },
  {
    name: "Instant Transfers",
    description:
      "Send and receive money in seconds, anytime, anywhere, with just a few taps.",
    icon: FaBolt,
  },
  {
    name: "Global Access",
    description:
      "Pay for goods and services worldwide without worrying about currency conversion fees.",
    icon: FaGlobe,
  },
];

const FeaturesComponent = () => {
  return (
    <section id="features" className="py-20 sm:py-28 bg-brand-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        
        <div className="text-center">
          <h2 id="joy-features" className="text-base font-semibold text-brand-primary uppercase tracking-wider">
            Why Choose Us
          </h2>
          <p className="mt-2 text-3xl sm:text-4xl font-extrabold text-brand-dark">
            A Better Way to Manage Your Money
          </p>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-brand-muted">
            Nexus Wallet is packed with features designed to make your financial
            life simpler and more secure.
          </p>
        </div>

        {/* Features Grid */}
        <div className="mt-16 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.name}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-2"
            >
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-brand-primary/10 text-brand-primary">
                <feature.icon className="h-8 w-8" aria-hidden="true" />
              </div>
              <h3 className="mt-6 text-xl font-bold text-brand-dark">
                {feature.name}
              </h3>
              <p className="mt-2 text-base text-brand-muted">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesComponent;
