import OnlinePayPng from "@/assets/online-pay.png";
import { FaBolt, FaGlobe, FaShieldAlt } from "react-icons/fa";



function AboutPage() {
  return (
    <section  className="pb-20 sm:py-10 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-base font-semibold text-brand-primary uppercase tracking-wider">
            About Us
          </h2>
          <p className="mt-2 text-3xl sm:text-4xl font-extrabold text-brand-dark">
            Who We Are
          </p>
          <p className="mt-4 text-lg text-brand-muted">
            D-Wallet is built to redefine the way you manage money. We
            believe in secure, fast, and borderless financial experiences for
            everyone.
          </p>
        </div>


        <div className="mt-16 grid gap-12 lg:grid-cols-2 items-center">

          <div className="relative">
            <img
              src={OnlinePayPng}
              alt="About Nexus Wallet"
              className="rounded-2xl shadow-xl transform hover:scale-105 transition-transform duration-500"
            />
          </div>

          
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 h-12 w-12 rounded-full bg-brand-primary/10 text-brand-primary flex items-center justify-center">
                <FaShieldAlt className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-brand-dark">
                  Bank-Grade Security
                </h3>
                <p className="mt-2 text-brand-muted">
                  Multi-layer encryption and fraud prevention keep your money
                  safe at all times.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 h-12 w-12 rounded-full bg-brand-primary/10 text-brand-primary flex items-center justify-center">
                <FaBolt className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-brand-dark">
                  Lightning Fast
                </h3>
                <p className="mt-2 text-brand-muted">
                  Send and receive money instantly, without delays or hidden
                  fees.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 h-12 w-12 rounded-full bg-brand-primary/10 text-brand-primary flex items-center justify-center">
                <FaGlobe className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-brand-dark">
                  Global Access
                </h3>
                <p className="mt-2 text-brand-muted">
                  Pay and transfer worldwide with real-time exchange rates and
                  zero hassle.
                </p>
              </div>
            </div>

            
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutPage;
