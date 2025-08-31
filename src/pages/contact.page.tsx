import React, { useState } from "react";

export default function ContactPage() {

  return (
     <section className="w-full mx-auto px-6 py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-extrabold mb-12 text-center dark:text-white">
        Contact Us
      </h2>
      <div className="flex flex-col md:flex-row gap-10">
        {/* Address & Contact Info */}
        <div className="md:w-1/2 text-gray-700 dark:text-gray-300 space-y-6">
          <h3 className="text-xl font-semibold">Our Office</h3>
          <p>Bonosree, Rampura, Dhaka, Bangladesh</p>
          <p>Email: info@digitalwallet.com</p>
          <p>Phone: +1 888 45886-78090</p>
          <p>Working Hours: Mon - Fri, 9:00 AM - 6:00 PM</p>
        </div>

        {/* Google Map */}
        <div className="md:w-1/2 h-64 md:h-auto">
          <iframe
            title="Office Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.902588575722!2d90.423394215431!3d23.74889239456966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7607f6e936b%3A0x6f299f6d2a48ee6a!2sRampura%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1693490836489!5m2!1sen!2sbd"
            width="100%"
            height="100%"
            className="rounded-md border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      </div>
    </section>
  );
}
