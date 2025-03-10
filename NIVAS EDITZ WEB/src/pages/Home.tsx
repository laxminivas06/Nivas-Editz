import React from 'react';
import { ArrowDown, Code, Image, MessageSquare,PenTool,Video,Globe } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Home() {
  const scrollToServices = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleWhatsApp = () => {
    const phoneNumber = '+919059160424'; // Replace with your WhatsApp number
    const message = 'Hello! I would like to get in touch.'; // Pre-filled message
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80"
            alt="Background"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-4 max-w-4xl mx-auto"
        >
          <div>
            <a href="https://example.com" target="_blank" rel="noopener noreferrer">
              <img src="https://res.cloudinary.com/dt3effj06/image/upload/v1740503970/NE.svg" alt="Clickable Link" />
            </a>
          </div>
          <p className="text-xl md:text-2xl text-gray-700 mb-8">
            Affordable Solutions for Your Digital Needs
          </p>
          <button
            onClick={scrollToServices}
            className="bg-indigo-600 text-white px-8 py-3 rounded-full text-lg font-semibold 
                     hover:bg-indigo-700 transition-colors duration-300 flex items-center mx-auto"
          >
            Get Started
            <ArrowDown className="ml-2 w-5 h-5" />
          </button>
        </motion.div>

        <div className="absolute bottom-0 left-0 right-0 flex justify-center gap-8 pb-12">
          <motion.div 
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Code className="w-12 h-12 text-indigo-600" />
          </motion.div>
          <motion.div 
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
          >
            <MessageSquare className="w-12 h-12 text-indigo-600" />
          </motion.div>
          <motion.div 
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
          >
            <Image className="w-12 h-12 text-indigo-600" />
          </motion.div>
        </div>
      </div>

      {/* Services Preview */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-lg text-gray-600">
              Comprehensive digital solutions tailored to your needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Globe,
                title: 'Website Development',
                description: 'We create user-friendly, automated websites tailored to your needs, all within a low budget.',
                features: ['Responsive Design', 'SEO Optimization', 'Custom Functionality', 'Fast Loading Speed']
              },
              {
                icon: MessageSquare,
                title: 'Social Media Marketing',
                description: 'Boost your online presence with our creative posters and advertisements.',
                features: ['Content Strategy', 'Campaign Management', 'Analytics & Reporting', 'Engagement Growth']
              },
              {
                icon: Video,
                title: 'Video Editing',
                description: 'Professional video editing services to enhance your content and tell your story.',
                features: ['Color Grading', 'Motion Graphics', 'Sound Design', 'Visual Effects']
              },
              {
                icon: Image,
                title: 'Photo Editing',
                description: 'Transform your photos with professional editing and retouching services.',
                features: ['Color Correction', 'Retouching', 'Background Removal', 'Image Enhancement']
              },
              {
                icon: PenTool,
                title: 'Graphic Design',
                description: 'Create stunning visuals that capture attention and communicate your message.',
                features: ['Logo Design', 'Brand Identity', 'Marketing Materials', 'Social Media Graphics']
              },
              {
                icon: Code,
                title: 'Custom Development',
                description: 'Tailored solutions for your specific digital needs and challenges.',
                features: ['API Integration', 'Custom Applications', 'E-commerce Solutions', 'Performance Optimization']
              }
            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <service.icon className="w-12 h-12 text-indigo-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-indigo-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Digital Presence?
            </h2>
            <p className="text-indigo-100 mb-8 text-lg">
              Let's create something amazing together
            </p>
            <button 
              onClick={handleWhatsApp}
              className="bg-white text-indigo-600 px-8 py-3 rounded-full text-lg font-semibold 
                         hover:bg-indigo-50 transition-colors duration-300"
            >
              Get in Touch
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}