
import { FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function ContactComponent() {
  return (
    <section id="contact" className="py-20 sm:py-28 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-base font-semibold text-brand-primary uppercase tracking-wider">
            Contact Us
          </h2>
          <p id="joy-contact" className="mt-2 text-3xl sm:text-4xl font-extrabold text-brand-dark">
            Get In Touch
          </p>
          <p className="mt-4 text-lg text-brand-muted">
            Have questions about our services or need support? We're here to
            help. Reach out to our team.
          </p>
        </div>


        <div className="mt-12 flex justify-center">
          <Link
            to="mailto:mdakashka@gmail.com"
            className="inline-flex items-center gap-4 bg-brand-light p-6 rounded-2xl shadow-md hover:shadow-xl hover:bg-indigo-100 transition-all duration-300 group"
          >
            <div className="flex-shrink-0 h-16 w-16 rounded-full bg-brand-primary/10 text-brand-primary flex items-center justify-center">
              <FaEnvelope className="h-8 w-8" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-brand-dark">
                Email Support
              </h3>
              <p className="text-brand-primary font-medium group-hover:underline">
                mdakashka@gmail.com
              </p>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}

