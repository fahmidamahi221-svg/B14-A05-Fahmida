import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-gray-600 hover:text-gray-900 focus:outline-none"
              aria-label="Toggle Menu"
            >
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                {isOpen ? (
                  <path fillRule="evenodd" clipRule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z" />
                ) : (
                  <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
                )}
              </svg>
            </button>
          </div>

          
          <div className="flex items-center space-x-2 flex-1 md:flex-none justify-center md:justify-start">
           <img src="./logo-text.png" alt="Logo" className="w-36" />
          </div>

          <div className="hidden md:flex space-x-8 text-sm font-medium text-gray-600">
            <a href="#home" className="hover:text-gray-900 transition-colors">Home</a>
            <a href="#technologies" className="hover:text-gray-900 transition-colors">Technologies</a>
            <a href="#projects" className="hover:text-gray-900 transition-colors">Projects</a>
            <a href="#about" className="hover:text-gray-900 transition-colors">About</a>
            <a href="#contact" className="hover:text-gray-900 transition-colors">Contact</a>
          </div>

          <div className="flex items-center space-x-2 sm:space-x-3">
            <button className="text-xs sm:text-sm font-medium text-gray-700 hover:text-gray-900 px-3 py-2 cursor-pointer">
              Sign In
            </button>
            <button className="text-xs sm:text-sm font-medium brand-gradient text-white px-4 py-2 rounded-full shadow-xs hover:opacity-95 transition-opacity cursor-pointer">
              Sign Up
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden py-4 border-t border-gray-100 space-y-3 px-2">
            <a href="#home" className="block text-gray-600 hover:text-gray-900 font-medium">Home</a>
            <a href="#technologies" className="block text-gray-600 hover:text-gray-900 font-medium">Technologies</a>
            <a href="#projects" className="block text-gray-600 hover:text-gray-900 font-medium">Projects</a>
            <a href="#about" className="block text-gray-600 hover:text-gray-900 font-medium">About</a>
            <a href="#contact" className="block text-gray-600 hover:text-gray-900 font-medium">Contact</a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;