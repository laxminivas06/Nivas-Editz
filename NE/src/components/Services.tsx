import React from 'react';
import { 
  Globe, 
  Smartphone, 
  Share2, 
  Zap, 
  Palette, 
  ShoppingCart, 
  Paintbrush, 
  BarChart3 
} from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: Globe,
      title: 'Website Development',
      description: 'Custom, responsive websites built with modern technologies and best practices.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Zap,
      title: 'Custom Web Applications',
      description: 'Tailored web applications designed to solve your specific business challenges.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Smartphone,
      title: 'Social Media Development',
      description: 'Engaging social media platforms and tools to connect with your audience.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Share2,
      title: 'Social Media Enhancement',
      description: 'Strategic social media management to boost your online presence and engagement.',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: Palette,
      title: 'Branding & Digital Identity',
      description: 'Complete brand identity design that reflects your vision and values.',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      icon: ShoppingCart,
      title: 'E-Commerce Integration',
      description: 'Seamless online shopping experiences with secure payment processing.',
      color: 'from-teal-500 to-blue-500'
    },
    {
      icon: Paintbrush,
      title: 'UI/UX Design',
      description: 'User-centered design solutions that create intuitive and beautiful interfaces.',
      color: 'from-pink-500 to-rose-500'
    },
    {
      icon: BarChart3,
      title: 'Analytics & SEO Optimization',
      description: 'Data-driven insights and search engine optimization for maximum visibility.',
      color: 'from-yellow-500 to-orange-500'
    }
  ];

  const handleWhatsAppRedirect = (serviceTitle: string) => {
    const phoneNumber = '+919059160424';
    const message = `Hi, I'm interested in your ${serviceTitle} service. Can you tell me more about it?`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="services" className="py-12 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4 md:mb-6">
            Services Offered
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive digital solutions tailored to elevate your business and brand presence
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-lg md:rounded-xl p-3 sm:p-4 md:p-6 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 cursor-pointer h-full flex flex-col"
            >
              <div className={`inline-flex p-3 md:p-4 rounded-lg md:rounded-xl bg-gradient-to-r ${service.color} text-white mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon size={18} className="md:size-6" />
              </div>
              
              <h3 className="text-sm sm:text-base md:text-lg font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
                {service.title}
              </h3>
              
              <p className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4 flex-grow">
                {service.description}
              </p>

              <div 
                className="mt-auto pt-2 sm:pt-3 border-t border-gray-100"
                onClick={() => handleWhatsAppRedirect(service.title)}
              >
                <span className="text-blue-600 font-medium text-xs sm:text-sm group-hover:text-purple-600 transition-colors">
                  Learn More →
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12 md:mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl md:rounded-2xl p-6 md:p-8 lg:p-10 text-white max-w-4xl mx-auto">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 md:mb-4">
              Ready to Transform Your Digital Presence?
            </h3>
            <p className="text-sm sm:text-base md:text-lg mb-4 md:mb-6 opacity-90">
              Let's discuss how we can bring your vision to life with our comprehensive digital solutions.
            </p>
            <button 
              onClick={() => handleWhatsAppRedirect('services')}
              className="inline-flex items-center px-5 py-2 md:px-6 md:py-3 bg-white text-blue-600 font-medium rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 text-sm md:text-base"
            >
              Get Started Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;