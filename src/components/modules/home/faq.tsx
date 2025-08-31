import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQSection() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-12">
          Frequently Asked Questions
        </h2>

        <Accordion
          type="single"
          collapsible
          className="w-full text-left space-y-2"
        >
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-gray-900 dark:text-white">
              How to create an account?
            </AccordionTrigger>
            <AccordionContent className="text-gray-700 dark:text-gray-300">
              Sign up using your email and phone number.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger className="text-gray-900 dark:text-white">
              Is my money safe?
            </AccordionTrigger>
            <AccordionContent className="text-gray-700 dark:text-gray-300">
              Yes, we use strong security to protect your money.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger className="text-gray-900 dark:text-white">
              Can I add multiple banks?
            </AccordionTrigger>
            <AccordionContent className="text-gray-700 dark:text-gray-300">
              Yes, you can link more than one bank account.
            </AccordionContent>
          </AccordionItem>


          <AccordionItem value="item-4">
            <AccordionTrigger className="text-gray-900 dark:text-white">
              How to earn cashback?
            </AccordionTrigger>
            <AccordionContent className="text-gray-700 dark:text-gray-300">
              Use the wallet to pay bills and send money.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}
