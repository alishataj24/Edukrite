import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection'; 
import ProblemSection from './components/problemSection'; // IMPORTANT: Using lowercase 'p' to match your file name
import SolutionSection from './components/SolutionSection';
import DifferentiationSection from './components/DifferentiationSection';
import FeaturedMissionsSection from './components/FeaturedMissionsSection'; 
import TestimonialsSection from './components/TestimonialsSection';     
import FinalCtaSection from './components/FinalCtaSection'; 
import Footer from './components/Footer'; // Import the new Footer component

function App() {
  return (
    // Sets a minimum height to fill the screen and applies your off-white background color.
    // flex-col and flex-grow on <main> ensure the footer stays at the bottom.
    <div className="min-h-screen bg-off-white flex flex-col">
      {/* Renders the Navbar at the top of the page */}
      <Navbar />
      
      {/* All the main content sections of the homepage are wrapped in <main> with flex-grow */}
      <main className="flex-grow">
        {/* Renders the Hero Section */}
        <HeroSection />
        
        {/* Renders the Problem Section */}
        <ProblemSection /> 
        
        {/* Renders the Solution Section */}
        <SolutionSection /> 
        
        {/* Renders the Differentiation Section */}
        <DifferentiationSection />
        
        {/* Renders the Featured Missions Section */}
        <FeaturedMissionsSection />
        
        {/* Renders the Testimonials Section */}
        <TestimonialsSection />
        
        {/* Renders the Final Call to Action Section */}
        <FinalCtaSection />
      </main>
      
      {/* The new professional footer is rendered at the very bottom */}
      <Footer />
    </div>
  );
}

export default App;