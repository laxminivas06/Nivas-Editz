import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Users, Globe2, Award } from 'lucide-react';

export default function Clients() {
  const featuredClients = [
    {
      name: 'Wisdom Roots',
      logo: 'https://res.cloudinary.com/dt3effj06/image/upload/v1740503763/WR.svg',
      description: 'Leading technology solutions provider',
      industry: 'Technology',
      website: 'https://wisdomroots.netlify.app/'
    },
    {
      name: 'Sri Karimalesh Caterers',
      logo: 'https://res.cloudinary.com/dt3effj06/image/upload/v1740503772/SK.svg',
      description: 'Telugu Authentic Catering Services',
      industry: 'Catering Services',
      website: 'https://srikarimaleshcaterers.netlify.app/'
    },
    {
      name: 'Padma Tutorials',
      logo: 'https://res.cloudinary.com/dt3effj06/image/upload/v1740503754/PT.svg',
      description: 'Best Tutorials in Hyderabad',
      industry: 'Education',
      website: 'https://padmatutorials.com'
    },
    {
      name: 'Smart N light Innovation',
      logo: 'https://res.cloudinary.com/dt3effj06/image/upload/v1740393371/lekgttbp04mwatgpafki.svg',
      description: 'Innovative Technology Solutions',
      industry: 'Technology & Innovation',
      website: 'https://smartnlight.com'
    }
  ];

  const clientStats = [
    {
      icon: Building2,
      value: '5+',
      label: 'Companies Served'
    },
    {
      icon: Users,
      value: '10+',
      label: 'Active Clients'
    },
    {
      icon: Globe2,
      value: '2+',
      label: 'Countries'
    },
    {
      icon: Award,
      value: '95.9%',
      label: 'Client Satisfaction'
    }
  ];

  const testimonials = [
    {
      name: 'Rajesh Morishetty',
      role: 'Founder at Sri Karimalesh Caterers',
      image: 'https://res.cloudinary.com/dt3effj06/image/upload/v1740451135/iuunwxehuixgo4is2kvv.jpg',
      quote: 'Working with Nivas Edits has been transformative for our business. Their expertise and dedication to quality are unmatched.'
    },
    {
      name: 'Sheshank Goud',
      role: 'Managing Director at Padma Tutorials',
      image: 'https://res.cloudinary.com/dt3effj06/image/upload/v1741633878/Shes.svg_devkci.jpg',
      quote: "Nivas Edits' creative solutions have helped us reach new audiences and grow our business."
    },
    {
      name: 'M Manikanta',
      role: 'Founder at Wisdom Roots',
      image: 'https://res.cloudinary.com/dt3effj06/image/upload/v1741633877/man.svg_nrzzkt.jpg',
      quote: 'We are extremely satisfied with the results of our partnership with Nivas Edits. They are truly the best in the business.'
    }
  ];

  const handleWhatsApp = () => {
    const phoneNumber = '919059160424'; // Your WhatsApp number
    const message = 'Hello! I would like to get in touch.'; // Pre-filled message
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="min-h-screen pt-16 bg-gray-50">
      {/* Hero Section */}
      <div className="bg-indigo-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl font-bold mb-4">Our Clients</h1>
            <p className="text-xl text-indigo-100">
              Trusted by leading businesses worldwide
            </p>
          </motion.div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {clientStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <stat.icon className="w-8 h-8 text-indigo-600 mx-auto mb-4" />
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Featured Clients */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Featured Clients</h2>
            <p className="text-gray-600">Success stories from our valued partners</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredClients.map((client, index) => (
              <motion.div
                key={client.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="p-6">
                  <a href={client.website} target="_blank" rel="noopener noreferrer">
                    <img
                      src={client.logo}
                      alt={client.name}
                      className="w-full h-24 object-contain mb-4"
                    />
                    <h3 className="text-xl font-semibold mb-2">{client.name}</h3>
                  </a>
                  <p className="text-gray-600 mb-2">{client.description}</p>
                  <div className="text-sm">
                    <p className="text-indigo-600 font-semibold mb-1">Industry: {client.industry}</p>
                  </div>
                  <a href={client.website} target="_blank" rel="noopener noreferrer">
                    <button className="mt-4 bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition-colors duration-300">
                      View
                    </button>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Client Testimonials</h2>
            <p className="text-gray-600">What our clients say about working with us</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-lg"
              >
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="font-semibold">{testimonial.name}</h3>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">"{testimonial.quote}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-indigo-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold mb-4">Join Our Success Story</h2>
            <p className="text-xl text-indigo-100 mb-8">
              Let's create something amazing together
            </p>
            <button 
              onClick={handleWhatsApp}
              className="bg-white text-indigo-600 px-8 py-3 rounded-full text-lg font-semibold 
                         hover:bg-indigo-50 transition-colors duration-300"
            >
              Get Started
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}