import React from 'react';

const Hero = () => {
  return (
    <section className="py-12 md:py-20 bg-gradient-to-b from-purple-50/50 via-white to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight tracking-tight">
            Build Your Ideal <br />
            <span className="text-gradient">Development Stack</span>
          </h1>
          <p className="mt-4 text-gray-600 text-base sm:text-lg max-w-lg">
            Explore frontend, backend, database, and tooling options, compare them side by side, and put together the stack that fits your next project.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <button className="brand-gradient text-white px-6 py-3 rounded-lg font-medium shadow-md hover:opacity-95 transition-all cursor-pointer">
              Explore Technologies
            </button>
            <button className="px-6 py-3 rounded-lg font-medium border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors cursor-pointer">
              Learn More
            </button>
          </div>
        </div>
        
       
        <div className="flex justify-center">
        <img src="./banner-stack.png" alt="Banner" className="w-full max-w-md" />
        </div>
      </div>
    </section>
  );
};

export default Hero;