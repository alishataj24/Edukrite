import React from 'react';

const ProblemSection = () => { // The component name itself should still be PascalCase (ProblemSection)
  return (
    <section className="py-16 px-4 bg-off-white text-center">
      <div className="container mx-auto max-w-3xl">
        {/* Heading */}
        <h2 className="font-satoshi text-3xl sm:text-4xl font-extrabold text-charcoal-black mb-6">
          Grew Up Memorizing. Nobody Taught Us How To Live.
        </h2>

        {/* Body Text */}
        <p className="font-satoshi text-lg sm:text-xl text-medium-gray leading-relaxed mb-8">
          Let's be real. School nailed the history dates and the quadratic formula. But when it came to speaking up, understanding a budget, or leading a team? Crickets. We felt it too. It's time for an upgrade.
        </p>

        {/* Visuals Placeholder (Optional: Add actual images/emojis later) */}
        <div className="flex justify-center space-x-6 text-5xl sm:text-6xl">
          <span role="img" aria-label="Exploding head">🤯</span>
          <span role="img" aria-label="Money with wings">💸</span>
          <span role="img" aria-label="Speaking head">🗣️</span>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection; // Exporting as ProblemSection