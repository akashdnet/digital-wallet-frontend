import { Card } from "@/components/ui/card";
import { FiLock, FiZap, FiGlobe, FiGift } from "react-icons/fi";

const features = [
  {
    icon: <FiLock className="text-4xl text-indigo-600" />,
    title: "Send Money Securely",
    description: "All your payments are safe and secure with us.",
  },
  {
    icon: <FiZap className="text-4xl text-indigo-600" />,
    title: "Top-Up & Withdraw",
    description: "Get daily necessary transitions.",
  },
  {
    icon: <FiGlobe className="text-4xl text-indigo-600" />,
    title: "Go Global",
    description: "Use from any where.",
  },
  {
    icon: <FiGift className="text-4xl text-indigo-600" />,
    title: "Rewards & Cashback",
    description: "Earn rewards and cashback on transactions.",
  },
];

export default function FeatureSection() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-12">
          Our Features
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {features.map(({ icon, title, description }, idx) => (
            <Card
              key={idx}
              className="p-6 flex flex-col items-center bg-white dark:bg-gray-800 dark:border-gray-700 text-gray-900 dark:text-gray-100 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div>{icon}</div>
              <h3 className="mt-4 text-xl font-semibold">{title}</h3>
              <p className="mt-2 text-center text-gray-600 dark:text-gray-400">
                {description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
