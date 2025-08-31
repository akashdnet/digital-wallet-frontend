import { Button } from '@/components/ui/button'
import React from 'react'
import { Link } from 'react-router'

export default function AboutPage() {
  return (
    <>
    <section className="bg-gray-50 dark:bg-gray-900 py-20 transition-colors duration-300">
      <div className="max-w-3xl mx-auto px-4 text-center">

        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white mb-4 leading-tight">
          Your All-In-One Digital Wallet <br /> For Every Transaction
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-10">
          Our Team is always ready serve the best of you.
        </p>

        <div className="flex justify-center gap-6 flex-wrap mb-14">
          <Button asChild>
            <Link to="/register">Get Started</Link>
          </Button>
          <Button asChild variant="outline">
            <Link to="/services">Browse Services</Link>
          </Button>
        </div>


        <div className="flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d"
            alt="Digital wallet"
            className="w-full max-w-lg rounded-lg shadow-xl"
          />
        </div>
      </div>
    </section>


    <section className="bg-white dark:bg-gray-900 py-20 px-4 sm:px-6 lg:px-8">
  <div className="max-w-4xl mx-auto text-center">
    <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-8">
      Our Team & Work
    </h2>

    <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-6">
      We have a great team. They work hard every day. Our team wants to help you with easy and safe money services.
    </p>

    <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-6">
      We have many services like sending money fast and giving cashback. We keep making our service better and safer for you.
    </p>

    <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
      We work hard to give you the best experience. Your money is safe and easy to use with us.
    </p>
  </div>
</section>


    </>
  )
}
