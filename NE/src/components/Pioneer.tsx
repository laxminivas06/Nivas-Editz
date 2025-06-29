import React from 'react';
import { Instagram, Linkedin, Globe, Phone } from 'lucide-react';

const Pioneer: React.FC = () => {
  const socialLinks = [
    {
      icon: Instagram,
      label: '@laxminivasmorishetty',
      url: 'https://instagram.com/laxminivasmorishetty',
      color: 'from-pink-500 to-purple-500'
    },
    {
      icon: Linkedin,
      label: 'Laxmi Nivas Morishetty',
      url: 'https://www.linkedin.com/in/laxmi-nivas-morishetty-02468m/',
      color: 'from-blue-600 to-blue-700'
    },
    {
      icon: Globe,
      label: 'Portfolio Website',
      url: 'https://laxminivasmorishetty.netlify.app/',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Phone,
      label: '+91 9059160424',
      url: 'tel:+919059160424',
      color: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            The Pioneer
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-6 md:p-12 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-200/20 to-purple-200/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-orange-200/20 to-pink-200/20 rounded-full blur-3xl"></div>
            
            <div className="relative z-10 flex flex-col md:flex-row gap-8 md:gap-12 items-center">
              {/* Profile Content - Order changes on mobile */}
              <div className="order-2 md:order-1 w-full md:w-1/2">
                <div className="mb-6 md:mb-8">
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">
                    Laxmi Nivas Morishetty
                  </h3>
                  <p className="text-blue-600 font-semibold text-base sm:text-lg">
                    Visionary Digital Architect
                  </p>
                </div>
                
                <p className="text-gray-700 leading-relaxed mb-6 md:mb-8 text-base sm:text-lg">
                  Laxmi Nivas Morishetty is the visionary force behind our editorial revolution. 
                  With years of hands-on experience in digital innovation, he transforms ideas into 
                  interactive experiences. From smart branding to full-scale digital transformations, 
                  his passion fuels every project we deliver.
                </p>

                {/* Social Links */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  {socialLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center p-3 sm:p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                    >
                      <div className={`p-2 sm:p-3 rounded-lg bg-gradient-to-r ${link.color} text-white mr-3 sm:mr-4 group-hover:scale-110 transition-transform`}>
                        <link.icon size={18} className="sm:w-5 sm:h-5" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-800 text-xs sm:text-sm">
                          {link.label}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Profile Visual - Order changes on mobile */}
              <div className="order-1 md:order-2 w-full md:w-1/2">
                <div className="aspect-square w-full max-w-md mx-auto bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl flex items-center justify-center text-white relative overflow-hidden">
                  {/* Avatar Placeholder */}
                  <div className="absolute inset-3 sm:inset-4 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                    <div className="text-center w-full h-full flex items-center justify-center">
                      <img 
                        src="https://i.postimg.cc/rsFNVLYg/nivasimg.jpg" 
                        alt="Laxmi Nivas Morishetty" 
                        className="rounded-full w-3/4 h-3/4 object-cover border-4 border-white/20"
                      />
                    </div>
                  </div>
                  
                  {/* Floating Elements */}
                  <div className="absolute top-3 right-3 sm:top-4 sm:right-4 w-6 h-6 sm:w-8 sm:h-8 bg-yellow-400 rounded-full animate-bounce delay-300"></div>
                  <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 w-5 h-5 sm:w-6 sm:h-6 bg-pink-400 rounded-full animate-bounce delay-700"></div>
                  <div className="absolute top-1/2 left-3 sm:left-4 w-4 h-4 sm:w-5 sm:h-5 bg-green-400 rounded-full animate-bounce delay-500"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pioneer;