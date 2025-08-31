import React from "react";
import { Link } from "react-router";
import HeroMoney from "@/assets/3d-money.png"

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-r from-indigo-900 via-purple-800 to-pink-700 text-white  flex items-center justify-center  py-20 overflow-hidden">
      <div className="absolute top-[-100px] left-[-100px] w-72 h-72 bg-pink-500 rounded-full opacity-30 animate-pulse"></div>
      <div className="absolute bottom-[-80px] right-[-80px] w-96 h-96 bg-indigo-700 rounded-full opacity-30 animate-pulse animation-delay-2000"></div>

      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center md:space-x-16">
        <div className="text-center md:text-left max-w-lg space-y-6 z-10">
          <h1 className="text-5xl font-extrabold tracking-tight leading-tight drop-shadow-lg">
            Bangladeshi <br /> Digital Wallet
          </h1>
          <p className="text-lg text-indigo-200 drop-shadow-md">
            Fast, secure, and Lowest service fees.
          </p>

          <div className="flex justify-center md:justify-start space-x-6 mt-6">
            <button className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 transition text-white font-semibold px-8 py-3 rounded-xl shadow-lg transform hover:scale-105 duration-300">
             <Link to="/register">Get Started</Link>
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-xl hover:bg-white hover:text-indigo-800 transition font-semibold shadow-md transform hover:scale-105 duration-300">
              <Link to="/about">Learn more</Link>
            </button>
          </div>
        </div>

       
       



        <div className="mb-12 md:mb-0 w-full max-w-md">
          <img
            src={HeroMoney}
            alt="Digital Wallet"
            className="rounded-3xl shadow-2xl object-cover"
          />
        </div>




      </div>
    </section>
  );
};

export default HeroSection;
