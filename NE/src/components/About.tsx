import React from 'react';
import { Users, Award, Clock, Target } from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    { icon: Users, value: '50+', label: 'Happy Clients' },
    { icon: Award, value: '3+', label: 'Years Experience' },
    { icon: Clock, value: '24/7', label: 'Support' },
    { icon: Target, value: '100+', label: 'Projects Completed' }
  ];

  return (
    <section id="about" className="py-10 md:py-16 lg:py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 md:mb-14 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-3 md:mb-4 lg:mb-6">
            Who We Are
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We are a dynamic freelance editorial company specializing in cutting-edge digital solutions. 
            Our passion lies in transforming ideas into powerful digital experiences that drive business growth 
            and enhance brand presence across all platforms.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 md:gap-8 mb-10 md:mb-14 lg:mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg sm:rounded-xl md:rounded-2xl mb-2 sm:mb-3 group-hover:scale-110 transition-transform duration-300">
                <stat.icon size={18} className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
              </div>
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-1">{stat.value}</div>
              <div className="text-xs sm:text-sm md:text-base text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Company Description */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl sm:rounded-2xl md:rounded-3xl p-5 sm:p-6 md:p-8 lg:p-10 shadow-md md:shadow-lg">
            <div className="flex flex-col md:flex-row gap-6 md:gap-8 lg:gap-10 items-center">
              <div className="order-2 md:order-1 w-full md:w-1/2">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mb-3 sm:mb-4 md:mb-5">
                  Our Mission
                </h3>
                <p className="text-gray-600 mb-3 sm:mb-4 md:mb-5 leading-relaxed text-sm sm:text-base md:text-lg">
                  We believe in the power of digital transformation. Every project we undertake 
                  is driven by innovation, creativity, and a deep understanding of modern business needs.
                </p>
                <div className="space-y-2 sm:space-y-3 md:space-y-4">
                  <div className="flex items-center">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-600 rounded-full mr-2 sm:mr-3"></div>
                    <span className="text-gray-700 text-xs sm:text-sm md:text-base">Full-Stack Development Expertise</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-purple-600 rounded-full mr-2 sm:mr-3"></div>
                    <span className="text-gray-700 text-xs sm:text-sm md:text-base">Creative Branding Solutions</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-orange-600 rounded-full mr-2 sm:mr-3"></div>
                    <span className="text-gray-700 text-xs sm:text-sm md:text-base">Strategic Digital Marketing</span>
                  </div>
                </div>
              </div>
              <div className="order-1 md:order-2 w-21 md:w-1/2">
                <div className="aspect-square bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl sm:rounded-2xl md:rounded-3xl flex items-center justify-center p-3 sm:p-4">
                  <div className="w-full h-full flex items-center justify-center">
                    <img 
                      src="https://i.postimg.cc/tRDy1sM7/Nivas.png" 
                      alt="NivasEditz Logo" 
                      className="w-auto h-auto object-contain border-2 sm:border-3 md:border-4 border-white/20 shadow-sm md:shadow-md"
                      style={{
                        maxWidth: 'min(100%, 200px)',
                        maxHeight: 'min(100%, 200px)',
                        width: 'auto',
                        height: 'auto'
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;