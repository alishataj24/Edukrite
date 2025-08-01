import React from 'react';

const FeaturedMissionsSection = () => {
  const missions = [
    {
      title: 'Public Speaking Power-Ups',
      description: 'Stop freezing. Start speaking.',
      image: 'https://via.placeholder.com/400x250/1A1D2E/FFFFFF?text=Public+Speaking' 
    },
    {
      title: 'My First Budget & Beyond',
      description: 'Afford what you want, stress less.',
      image: 'https://via.placeholder.com/400x250/1A1D2E/FFFFFF?text=Budgeting' 
    },
    {
      title: 'Taming Your Inner Critic',
      description: 'Silence doubt. Amplify your confidence.',
      image: 'https://via.placeholder.com/400x250/1A1D2E/FFFFFF?text=Inner+Critic' 
    },
    {
      title: 'Intro to AI for Everyday Life',
      description: 'Understand the future, today.',
      image: 'https://via.placeholder.com/400x250/1A1D2E/FFFFFF?text=AI+Basics' 
    },
  ];

  return (
    <section className="py-16 px-4 bg-off-white text-center">
      <div className="container mx-auto max-w-7xl">
        <h2 className="font-satoshi text-3xl sm:text-4xl font-extrabold text-charcoal-black mb-12">
          Ready To Level Up? Dive Into Popular Skills:
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {missions.map((mission, index) => (
            <a 
              key={index} 
              href={`/missions/${mission.title.toLowerCase().replace(/ /g, '-')}`} 
              className="group block bg-pure-white rounded-lg shadow-md overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-xl cursor-pointer"
            >
              <img 
                src={mission.image} 
                alt={mission.title} 
                className="w-full h-48 object-cover group-hover:opacity-90 transition-opacity duration-300" 
              />
              <div className="p-6">
                <h3 className="font-satoshi text-xl font-bold text-charcoal-black mb-2 group-hover:text-charcoal-black transition-colors duration-300"> 
                  {mission.title}
                </h3>
                <p className="font-satoshi text-medium-gray text-base leading-snug">
                  {mission.description}
                </p>
              </div>
            </a>
          ))}
        </div>
        
        <div className="mt-12">
          <a
            href="/skills" 
            className="font-satoshi bg-charcoal-black text-pure-white px-8 py-4 rounded-full text-lg font-bold shadow-lg hover:bg-light-gray hover:text-charcoal-black transition-colors duration-300 transform hover:scale-105"
          >
            BROWSE ALL SKILLS →
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedMissionsSection;