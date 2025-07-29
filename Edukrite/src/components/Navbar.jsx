import React, { useState } from 'react';
import EdukriteLogo from '../assets/edukrite-logo.svg'; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); 

  return (
    <nav className="bg-off-white p-4 shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between relative"> 
        {/* Logo (always left) */}
        <a href="/" className="flex items-center"> 
          <img src={EdukriteLogo} alt="Edukrite Logo" className="h-8" />
        </a>

        {/* Desktop Navigation Links (Expanded and Centered) */}
        <div className="hidden md:flex flex-1 justify-center items-center"> 
          <div className="flex space-x-8"> {/* Container for the actual nav links */}
            <a href="/how-it-works" className="font-satoshi text-charcoal-black hover:text-medium-gray transition-colors duration-300">How It Works</a>
            <a href="/skills" className="font-satoshi text-charcoal-black hover:text-medium-gray transition-colors duration-300">Skills</a>
            <a href="/creators" className="font-satoshi text-charcoal-black hover:text-medium-gray transition-colors duration-300">Creators</a>
            <a href="/community" className="font-satoshi text-charcoal-black hover:text-medium-gray transition-colors duration-300">Community</a>
            <a href="/pricing" className="font-satoshi text-charcoal-black hover:text-medium-gray transition-colors duration-300">Pricing</a>
            {/* New: About Us link */}
            <a href="/about-us" className="font-satoshi text-charcoal-black hover:text-medium-gray transition-colors duration-300">About Us</a> 
          </div>
        </div>

        {/* Login and GET STARTED FREE button (always right on desktop) */}
        <div className="hidden md:flex items-center space-x-4"> 
          <a href="/login" className="font-satoshi text-charcoal-black hover:text-medium-gray transition-colors duration-300">Login</a>
          <a 
            href="/signup" 
            className="font-satoshi bg-charcoal-black text-pure-white px-6 py-2 rounded-full font-semibold hover:bg-light-gray hover:text-charcoal-black transition-colors duration-300 shadow-lg"
          >
            GET STARTED FREE
          </a>
        </div>

        {/* Mobile Menu Button (Hamburger) */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)} className="text-charcoal-black focus:outline-none focus:text-charcoal-black">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu (Slide-out) - Expanded links here too */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} bg-off-white border-t border-light-gray mt-4 py-2`}>
        <ul className="flex flex-col space-y-2 px-4">
          <li><a href="/how-it-works" className="font-satoshi block text-charcoal-black hover:text-medium-gray py-2">How It Works</a></li>
          <li><a href="/skills" className="font-satoshi block text-charcoal-black hover:text-medium-gray py-2">Skills</a></li>
          <li><a href="/creators" className="font-satoshi block text-charcoal-black hover:text-medium-gray py-2">Creators</a></li>
          <li><a href="/community" className="font-satoshi block text-charcoal-black hover:text-medium-gray py-2">Community</a></li>
          <li><a href="/pricing" className="font-satoshi block text-charcoal-black hover:text-medium-gray py-2">Pricing</a></li>
          <li><a href="/about-us" className="font-satoshi block text-charcoal-black hover:text-medium-gray py-2">About Us</a></li> {/* New: About Us link */}
          <li><a href="/login" className="font-satoshi block text-charcoal-black hover:text-medium-gray py-2">Login</a></li>
          <li>
            <a 
              href="/signup" 
              className="font-satoshi block bg-charcoal-black text-pure-white text-center px-4 py-2 rounded-full font-semibold hover:bg-light-gray hover:text-charcoal-black transition-colors duration-300 shadow-lg mt-2"
            >
              GET STARTED FREE
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;