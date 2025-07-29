import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection'; 
import ProblemSection from './components/problemSection'; // IMPORTANT: Using lowercase 'p' to match your file name
import SolutionSection from './components/SolutionSection';
import DifferentiationSection from './components/DifferentiationSection'; // The latest section we added

function App() {
  return (
    // Sets a minimum height to fill the screen and applies your off-white background color
    <div className="min-h-screen bg-off-white">
      {/* Renders the Navbar at the top of the page */}
      <Navbar />
      
      {/* Renders the Hero Section, which is the main visual above the fold */}
      <HeroSection />
      
      {/* Renders the Problem Section, articulating the core issue Edukrite solves */}
      <ProblemSection /> 
      
      {/* Renders the Solution Section, highlighting Edukrite's core benefits */}
      <SolutionSection /> 
      
      {/* Renders the Differentiation Section, showcasing Edukrite's unique selling points */}
      <DifferentiationSection />
      
      {/* This is a general placeholder for any content that doesn't fit into a specific section yet,
        or for testing purposes. You can remove or replace this <main> tag as you build more components.
      */}
      <main className="container mx-auto p-4 text-center py-16">
        <h1 className="font-satoshi text-4xl font-bold text-charcoal-black mb-4">
          Building the Future of Learning!
        </h1>
        <p className="font-satoshi text-lg text-medium-gray mt-4">
          Continue adding your amazing content sections below.
        </p>
      </main>
    </div>
  );
}

export default App;