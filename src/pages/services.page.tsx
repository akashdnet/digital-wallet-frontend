import { Button } from "@/components/ui/button";
import { Link } from "react-router";

const features = [
  "Send money instantly",
  "Recharge mobile phones",
  "Get cashback rewards",
  "Get Signup bonus",
  "Withdraw money",
  "Become an agent and earn commission",
];

export default function ServicesPage() {
  return (
   <section className="w-full mx-auto px-6 py-20 bg-white dark:bg-gray-900">
     <div className="max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-12">
        {/* Left side: Title + description + buttons */}
        <div className="md:flex-1 max-w-lg">
          <h1 className="text-5xl font-extrabold text-gray-900 dark:text-white mb-6 leading-tight">
            Everything You Need in One Wallet
          </h1>
          <p className="text-gray-700 dark:text-gray-400 text-lg mb-8">
            Explore our digital services — send money, recharge mobile, Withdraw, become agent and much more.
          </p>
          <div className="flex gap-4 flex-wrap">
            <Button asChild>
              <Link to="/register">Get Started</Link>
            </Button>
            <Button asChild variant="outline">
              <Link to="/about">Learn More</Link>
            </Button>
          </div>
        </div>
        
        <div className="md:w-1/3">
          <ul className="list-disc list-inside space-y-3 text-gray-700 dark:text-gray-400 text-lg">
            {features.map((feature, i) => (
              <li key={i}>{feature}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
   </section>
  );
}
