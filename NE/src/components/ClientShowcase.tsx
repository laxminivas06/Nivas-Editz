import React from 'react';
import { Star, Quote, ExternalLink } from 'lucide-react';

const ClientShowcase: React.FC = () => {
  const testimonials = [
    {
      name: 'Rajesh Morishetty',
      role: 'Founder at Sri Karimalesh Caterers',
      content: 'Working with Nivas Edits has been transformative for our business. Their expertise and dedication to quality are unmatched.',
      rating: 5,
      avatar: 'https://i.postimg.cc/J7bKCMPN/sk.png'
    },
    {
      name: 'Sheshank Goud',
      role: 'Managing Director at Padma Tutorials',
      content: 'Nivas Edits creative solutions have helped us reach new audiences and grow our business.',
      rating: 5,
      avatar: 'https://i.postimg.cc/TYD7wndD/pt.png'
    },
    {
      name: 'Raghava Hemanth',
      role: 'Associative Director at Padma Tutorials',
      content: 'Smart N Light Innovation has been a game-changer for us. Their innovative approach and attention to detail have set them apart.',
      rating: 5,
      avatar: 'https://i.postimg.cc/VvbRJc88/snlmain.png'
    },
    {
      name: 'M Manikanta',
      role: 'Founder at Wisdom Roots',
      content: 'We are extremely satisfied with the results of our partnership with Nivas Edits. They are truly the best in the business.',
      rating: 4,
      avatar: 'https://i.postimg.cc/mZzfYzZb/wr.png'
    },
    {
      name: 'Venkatesh',
      role: 'Dosa Delight',
      content: 'Nivas Edits delivered exceptional digital solutions that significantly boosted our online presence and customer engagement.',
      rating: 5,
      avatar: 'https://i.postimg.cc/gJFh4T6Y/logo-final.png'
    }
  ];

  const clientLogos = [
    { 
      name: 'Sri Karimalesh Caterers', 
      url: 'https://srikarimaleshcaterers.com.au',
      logo: 'https://i.postimg.cc/J7bKCMPN/sk.png'
    },
    { 
      name: 'Padma Tutorials', 
      url: 'https://padmatutorials.netlify.app',
      logo: 'https://i.postimg.cc/TYD7wndD/pt.png'
    },
    { 
      name: 'Wisdom Roots', 
      url: 'https://wisdomroots.netlify.app',
      logo: 'https://i.postimg.cc/mZzfYzZb/wr.png'
    },
    { 
      name: 'Dosa Delight', 
      url: 'https://dosadelight.com.au',
      logo: 'https://i.postimg.cc/gJFh4T6Y/logo-final.png'
    },
    { 
      name: 'Smart n Light Innovation', 
      url: 'https://smartnlightinnovation.netlify.app',
      logo: 'https://i.postimg.cc/VvbRJc88/snlmain.png'
    }
  ];

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Client Logos */}
        <div className="mb-16 md:mb-20">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-8 md:mb-12">
            Trusted by Leading Brands
          </h2>
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            {clientLogos.map((client, index) => (
              <a
                key={index}
                href={client.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors duration-300 group cursor-pointer relative"
                style={{
                  width: 'calc(50% - 0.5rem)',
                  height: '0',
                  paddingBottom: 'calc(50% - 0.5rem)',
                  position: 'relative'
                }}
              >
                <div className="absolute inset-0 flex items-center justify-center p-4">
                  <img 
                    src={client.logo} 
                    alt={client.name}
                    className="w-auto h-auto max-w-full max-h-full object-contain"
                    loading="lazy"
                    style={{
                      maxWidth: '80%',
                      maxHeight: '80%'
                    }}
                  />
                  <ExternalLink 
                    size={14} 
                    className="absolute top-2 right-2 text-gray-400 group-hover:text-blue-500 transition-colors" 
                  />
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 md:mb-6">
              Client Testimonials
            </h2>
            <p className="text-lg md:text-xl text-gray-600">
              What our clients say about working with us
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl md:rounded-2xl p-6 md:p-8 relative hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 ${
                  testimonials.length % 2 !== 0 && index === testimonials.length - 1 && 'sm:col-span-2 lg:col-span-1'
                }`}
              >
                {/* Quote Icon */}
                <div className="absolute top-4 md:top-6 right-4 md:right-6 text-blue-200">
                  <Quote size={24} className="md:w-8 md:h-8" />
                </div>

                {/* Stars */}
                <div className="flex mb-4 md:mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} className="w-4 h-4 md:w-5 md:h-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Testimonial Content */}
                <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-4 md:mb-6 italic">
                  "{testimonial.content}"
                </p>

                {/* Client Info */}
                <div className="flex items-center">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden mr-3 md:mr-4 border-2 border-white shadow-sm">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 text-sm md:text-base">{testimonial.name}</h4>
                    <p className="text-gray-600 text-xs md:text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 md:mt-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-12 text-white">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 lg:gap-8 text-center">
            <div>
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1 md:mb-2">100%</div>
              <div className="text-blue-100 text-xs md:text-sm">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1 md:mb-2">50+</div>
              <div className="text-blue-100 text-xs md:text-sm">Projects Delivered</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1 md:mb-2">24/7</div>
              <div className="text-blue-100 text-xs md:text-sm">Support Available</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1 md:mb-2">3+</div>
              <div className="text-blue-100 text-xs md:text-sm">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientShowcase;