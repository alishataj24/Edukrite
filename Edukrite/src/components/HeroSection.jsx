import React from 'react';
// Import your Aura video file. Make sure it's in your public/ directory or public/videos/
// Example: import AuraIntroVideo from '/aura-intro.mp4'; 

const HeroSection = () => {
  return (
    // Changed background to use vibrant accent colors
    <section className="relative h-screen flex items-center justify-center text-center text-pure-white overflow-hidden bg-gradient-to-br from-accent-purple-dark to-accent-indigo">
      {/* Background Overlay (for visual effect and readability) */}
      <div className="absolute inset-0 bg-charcoal-black opacity-40 z-10"></div>

      {/* Aura's Video Integration */}
      {/* IMPORTANT: Replace the 'src' with the actual path to your 15-second Aura video file.
          Place your video file in the 'public/' directory (e.g., public/aura-intro.mp4)
          or within a 'public/videos/' subfolder if you create one (e.g., '/videos/aura-intro.mp4')
      */}
      <video 
        autoPlay 
        loop 
        muted 
        playsInline 
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/aura-intro.mp4" type="video/mp4" /> {/* Adjust this path to your video */}
        Your browser does not support the video tag.
      </video>

      {/* Content */}
      <div className="relative z-20 p-6 max-w-4xl mx-auto">
        {/* Headline - Removed emojis, focused on genuine hook */}
        <h1 className="font-satoshi text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-4 animate-fade-in-up">
          YOUR REAL LIFE. UNLOCKED.
        </h1>

        {/* Sub-headline - Genuine and relatable content */}
        <p className="font-satoshi text-lg sm:text-xl md:text-2xl font-medium mb-8 opacity-90 animate-fade-in-up delay-200">
          Edukrite is Gen Z's personal learning OS. Master the confidence, money, and leadership skills schools <span className="italic">should've</span> taught you, in a way that feels like your favorite scroll.
        </p>

        {/* Call-to-Action Buttons - Using new accent colors */}
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
          <a
            href="/signup" 
            className="font-satoshi bg-pure-white text-accent-purple-dark px-8 py-4 rounded-full text-lg font-bold shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 animate-fade-in-up delay-400"
          >
            <span>▶️</span>
            <span>START YOUR FREE JOURNEY</span>
          </a>
          <a
            href="/how-it-works" 
            className="font-satoshi text-pure-white border-2 border-pure-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-pure-white hover:text-accent-purple-dark transition-all duration-300 transform hover:scale-105 animate-fade-in-up delay-600"
          >
            What is "Learning OS"? Learn How It Works →
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;