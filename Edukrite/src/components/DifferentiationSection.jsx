import React from 'react';

const DifferentiationSection = () => {
  const features = [
    {
      icon: '📱', // Placeholder: consider a video reel icon
      title: 'Bite-Sized Content',
      description: 'Like your favorite Reels, but every scroll makes you smarter. Designed for YOUR attention span.'
    },
    {
      icon: '🎮', // Placeholder: consider a game controller icon
      title: 'Learn Through Play',
      description: 'Swipe, story, mission. Real challenges, zero boring lectures.'
    },
    {
      icon: '🧠', // Placeholder: consider a brain or robot head icon
      title: 'Your AI Mentor, Aura',
      description: 'Personalized guidance, instant feedback, always challenging you forward.'
    },
    {
      icon: '🔥', // Placeholder: consider a person or creator icon
      title: 'Built By Creators, For Gen Z',
      description: 'Relatable faces, real talk, no textbooks allowed.'
    },
  ];

  return (
    <section className="py-16 px-4 bg-pure-white text-center">
      <div className="container mx-auto max-w-5xl">
        {/* Heading */}
        <h2 className="font-satoshi text-3xl sm:text-4xl font-extrabold text-charcoal-black mb-12">
          Not Just Another Course Site. It's A Vibe.
        </h2>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="text-6xl text-purple-600 mb-4">
                {feature.icon} {/* Replace with actual SVG icon */}
              </div>
              <h3 className="font-satoshi text-2xl font-bold text-charcoal-black mb-3">
                {feature.title}
              </h3>
              <p className="font-satoshi text-lg text-medium-gray leading-relaxed max-w-md">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DifferentiationSection;