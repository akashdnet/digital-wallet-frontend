import React from "react";
import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    name: "Munna Bhai",
    image: "https://i.pravatar.cc/150?img=3",
    rating: 5,
    review: "Very easy to use and super fast! I send money in seconds.",
  },
  {
    name: "Jol Pori",
    image: "https://i.pravatar.cc/150?img=5",
    rating: 4,
    review: "Safe and reliable wallet for daily payments.",
  },
  {
    name: "Kuddus Bayti",
    image: "https://i.pravatar.cc/150?img=7",
    rating: 5,
    review: "I love the cashback! Totally worth using every day.",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-12">
          What Users Say
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map(({ name, image, rating, review }, idx) => (
            <div
              key={idx}
              className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex justify-center mb-4">
                <img
                  src={image}
                  alt={name}
                  className="w-16 h-16 rounded-full object-cover"
                />
              </div>
              <p className="text-gray-700 dark:text-gray-300 text-sm italic mb-4">
                "{review}"
              </p>
              <div className="flex justify-center mb-2">
                {[...Array(rating)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400 mr-1" />
                ))}
              </div>
              <h4 className="text-md font-semibold text-gray-800 dark:text-white">
                {name}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
