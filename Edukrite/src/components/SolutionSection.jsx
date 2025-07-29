import React from 'react';

const SolutionSection = () => {
  // Placeholder for icons. You would replace these with actual SVG imports or an icon library.
  const solutions = [
    { 
      title: 'Speak With Confidence', 
      description: 'Own every room, every conversation.', 
      icon: '🗣️' // Placeholder emoji
    },
    { 
      title: 'Build Your Unstoppable Mindset', 
      description: 'Master emotions, bounce back stronger.', 
      icon: '🧠' // Placeholder emoji
    },
    { 
      title: 'Money & Smart Decisions', 
      description: 'Budget, invest, and make your money work for you.', 
      icon: '💸' // Placeholder emoji
    },
    { 
      title: 'Leadership & Real-Life Comm', 
      description: 'Inspire others, collaborate, get your point across.', 
      icon: '🤝' // Placeholder emoji
    },
    { 
      title: 'Tech Fluency & Future-Proofing', 
      description: 'Navigate the digital world, understand AI basics.', 
      icon: '💻' // Placeholder emoji
    },
  ];

  return (
    <section className="py-16 px-4 bg-off-white text-center">
      <div className="container mx-auto max-w-6xl">
        {/* Heading */}
        <h2 className="font-satoshi text-3xl sm:text-4xl font-extrabold text-charcoal-black mb-12">
          Meet Your New OS: Skills That Set You Free.
        </h2>

        {/* Grid for Solutions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <div 
              key={index} 
              className="bg-pure-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col items-center"
            >
              <div className="text-5xl text-purple-600 mb-4">
                {solution.icon} {/* Replace with actual icon component */}
              </div>
              <h3 className="font-satoshi text-2xl font-bold text-charcoal-black mb-3">
                {solution.title}
              </h3>
              <p className="font-satoshi text-medium-gray text-lg leading-relaxed">
                {solution.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;