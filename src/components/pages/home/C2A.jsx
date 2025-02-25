import React from 'react';

const C2A = () => {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
        {/* Image Section */}
        <div className="w-full md:w-1/2">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/container-fluid-CCbAkV9a5AqtN0kB1vGTAPOmez0i6u.png"
            alt="Happy couple wearing red plaid clothing"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>

        {/* Content Section */}
        <div className="w-full md:w-1/2 space-y-6">
          <span className="text-gray-500 uppercase tracking-wider text-sm">
            SUMMER 2020
          </span>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            Part of the Neural Universe
          </h2>
          
          <p className="text-gray-600 text-lg">
            We know how large objects will act, but things on a small scale.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-md transition duration-300 text-sm font-semibold">
              BUY NOW
            </button>
            <button className="border-2 border-gray-200 hover:border-gray-300 text-gray-700 px-8 py-3 rounded-md transition duration-300 text-sm font-semibold">
              READ MORE
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default C2A;