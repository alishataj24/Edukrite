import React from 'react';

const FinalCtaSection = () => {
  return (
    <section className="py-20 px-4 bg-charcoal-black text-pure-white text-center">
      <div className="container mx-auto max-w-4xl">
        {/* Headline */}
        <h2 className="font-satoshi text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight mb-8">
          Your Future Self Will Thank You. Seriously.
        </h2>

        {/* Primary Call to Action Button */}
        <a
          href="/signup" 
          className="font-satoshi bg-pure-white text-charcoal-black px-8 py-4 rounded-full text-xl font-bold shadow-lg hover:bg-light-gray hover:text-charcoal-black transition-colors duration-300 transform hover:scale-105 inline-flex items-center space-x-2"
        >
          {/* Using inline SVG for play icon */}
          <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 5v14l11-7z"/>
          </svg>
          <span>JOIN EDUKRITE FOR FREE</span>
        </a>
      </div>
    </section>
  );
};

export default FinalCtaSection;