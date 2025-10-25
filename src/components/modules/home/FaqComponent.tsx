import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const faqData = [
  {
    question: "Is Nexus Wallet secure?",
    answer:
      "Absolutely. We use bank-grade, multi-layer encryption and state-of-the-art fraud prevention systems to keep your account and data safe. Your security is our top priority.",
  },
  {
    question: "What are the fees for transactions?",
    answer:
      "Sending money to other Nexus Wallet users is completely free. We offer competitive, transparent pricing for currency conversions and international transfers, with no hidden charges.",
  },
  {
    question: "Can I use Nexus Wallet internationally?",
    answer:
      "Yes! Nexus Wallet is designed for global use. You can hold multiple currencies, send money abroad, and pay for services worldwide with real-time exchange rates.",
  },
  {
    question: "How do I add money to my wallet?",
    answer:
      "You can easily top up your Nexus Wallet using a linked bank account, a debit or credit card, or by receiving a transfer from another user. The process is instant and straightforward.",
  },
];

const FaqComponent = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 sm:py-28 bg-brand-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-base font-semibold text-brand-primary uppercase tracking-wider">
            Help Center
          </h2>
          <p className="mt-2 text-3xl sm:text-4xl font-extrabold text-brand-dark">
            Frequently Asked Questions
          </p>
          <p className="mt-4 text-lg text-brand-muted">
            Find answers to common questions about Nexus Wallet. If you can't
            find your answer here, feel free to contact us.
          </p>
        </div>


        <div className="mt-12 max-w-3xl mx-auto">
          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-sm overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center text-left p-6"
                  aria-expanded={openIndex === index}
                >
                  <span
                    className={`text-lg font-semibold ${
                      openIndex === index
                        ? "text-brand-primary"
                        : "text-brand-dark"
                    }`}
                  >
                    {faq.question}
                  </span>
                  <span className="flex-shrink-0 ml-4">
                    {openIndex === index ? (
                      <FaMinus className="w-5 h-5 text-brand-primary" />
                    ) : (
                      <FaPlus className="w-5 h-5 text-brand-muted" />
                    )}
                  </span>
                </button>
                <div
                  className={`transition-all duration-500 ease-in-out grid ${
                    openIndex === index
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-6 pb-6 text-brand-muted">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqComponent;
