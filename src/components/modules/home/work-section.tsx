import React from "react";
import { FiUserPlus, FiCreditCard, FiSend, FiCheckCircle } from "react-icons/fi";

const steps = [
  {
    icon: <FiUserPlus className="text-indigo-600 text-3xl" />,
    title: "Sign Up",
    description: "Create your free account quickly and securely.",
  },
  {
    icon: <FiCreditCard className="text-indigo-600 text-3xl" />,
    title: "Instant TK50 Deposit",
    description: "You will get welcome gift with TK50 for the first time when you sign up.",
  },
  {
    icon: <FiSend className="text-indigo-600 text-3xl" />,
    title: "Send Money | Receive Money | Top-Up | Withdraw",
    description: "Transfer money instantly",
  },
  {
    icon: <FiCheckCircle className="text-indigo-600 text-3xl" />,
    title: "Enjoy Rewards",
    description: "Get cashback and rewards on transactions.",
  },
];

export default function HowItWorksSection() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-extrabold text-center text-gray-900 dark:text-white mb-16">
          How It Works
        </h2>







        <div className="space-y-10 relative">
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-indigo-200 dark:bg-indigo-500"></div>

          {steps.map((step, index) => (
            <div key={index} className="flex items-start space-x-6 relative z-10">
              <div className="flex flex-col items-center">
                <div className="bg-white dark:bg-gray-800 border-2 border-indigo-600 rounded-full p-3 shadow-md">
                  {step.icon}
                </div>
                {index !== steps.length - 1 && (
                  <div className="h-full w-0.5 bg-indigo-200 dark:bg-indigo-500 mt-2"></div>
                )}



        </div>




            <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {step.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mt-2">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
