import React from 'react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "Finally! Learning that doesn't feel like school. I actually get this stuff.",
      author: 'Priya S.',
      details: '19, Student',
      avatar: 'https://via.placeholder.com/60/ADB5BD/1A1D2E?text=PS' // Placeholder avatar
    },
    {
      quote: 'My confidence jumped after just one mission. Aura is seriously amazing.',
      author: 'Liam K.',
      details: '22, Aspiring Entrepreneur',
      avatar: 'https://via.placeholder.com/60/ADB5BD/1A1D2E?text=LK' // Placeholder avatar
    },
    {
      quote: 'Edukrite made understanding money actually fun. Wish I had this sooner!',
      author: 'Aisha R.',
      details: '20, Creative Pro',
      avatar: 'https://via.placeholder.com/60/ADB5BD/1A1D2E?text=AR' // Placeholder avatar
    },
  ];

  return (
    <section className="py-16 px-4 bg-pure-white text-center">
      <div className="container mx-auto max-w-5xl">
        {/* Heading */}
        <h2 className="font-satoshi text-3xl sm:text-4xl font-extrabold text-charcoal-black mb-12">
          What The Fam Is Saying About Edukrite:
        </h2>

        {/* Testimonials Grid/Carousel Placeholder */}
        {/* For a true carousel, you'd integrate a library here. This is a simple grid for now. */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-off-white p-8 rounded-lg shadow-md flex flex-col items-center justify-center">
              <img 
                src={testimonial.avatar} 
                alt={testimonial.author} 
                className="w-16 h-16 rounded-full object-cover mb-4 border-2 border-light-gray" 
              />
              <p className="font-satoshi text-lg italic text-charcoal-black mb-4 leading-relaxed">
                "{testimonial.quote}"
              </p>
              <p className="font-satoshi text-md font-bold text-charcoal-black">
                {testimonial.author}
              </p>
              <p className="font-satoshi text-sm text-medium-gray">
                {testimonial.details}
              </p>
            </div>
          ))}
        </div>
        
        {/* Optional: CTA for more testimonials or to join */}
        <div className="mt-12">
          <a
            href="/testimonials" // Link to a dedicated testimonials page if you make one
            className="font-satoshi text-charcoal-black hover:text-medium-gray transition-colors duration-300 font-semibold"
          >
            Read More Success Stories →
          </a>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;