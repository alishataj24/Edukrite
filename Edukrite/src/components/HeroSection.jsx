import React from 'react';

const AuraIntroVideoPath = '/aura-intro.mp4'; // Confirm this path is correct for your video file

const HeroSection = () => {
  return (
    <section className="relative h-screen flex bg-charcoal-black text-pure-white">
      {/* Background Overlay for text readability over video */}
      <div className="absolute inset-0 bg-charcoal-black opacity-40 z-10"></div>

      {/* Content Container - Split into two columns on medium screens and up */}
      <div className="container mx-auto flex flex-col md:flex-row items-center relative z-20 px-6">
        
        {/* Left Column for Text */}
        <div className="w-full md:w-1/2 text-center md:text-left py-8 md:py-0 pr-0 md:pr-12"> 
          {/* New Headline - Removed dots, made more impactful */}
          <h1 className="font-satoshi text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-4">
            MASTER WHAT MATTERS.
          </h1>

          {/* New Sub-headline - Broader scope, genuine hook */}
          <p className="font-satoshi text-lg sm:text-xl md:text-2xl font-medium mb-8 opacity-90">
            The essential skills schools skip. Learn to thrive in every aspect of your real world.
          </p>

          {/* Buttons were removed in previous steps as requested */}
        </div>

        {/* Right Column for Aura Video */}
        <div className="w-full md:w-1/2 h-64 md:h-full flex items-center justify-center relative overflow-hidden rounded-lg shadow-xl">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="absolute inset-0 w-full h-full object-cover" 
          >
            <source src={AuraIntroVideoPath} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {/* Optional: An overlay on the video itself if text needs to be more legible over it */}
          {/* <div className="absolute inset-0 bg-charcoal-black opacity-20"></div> */}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;