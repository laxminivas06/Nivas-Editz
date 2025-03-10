import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Users, Target, Award, Rocket, CheckCircle } from 'lucide-react';

export default function About() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const stats = [
    { label: 'Projects Completed', value: '10+' },
    { label: 'Happy Clients', value: '12+' },
    { label: 'Years Experience', value: '5+' },
    { label: 'Team Members', value: '15+' }
  ];

  const values = [
    {
      icon: Target,
      title: 'Quality First',
      description: 'We never compromise on quality, ensuring each project meets the highest standards.'
    },
    {
      icon: Users,
      title: 'Client-Centric',
      description: 'Your success is our success. We work closely with clients to exceed expectations.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We strive for excellence in every aspect of our work, from design to delivery.'
    },
    {
      icon: Rocket,
      title: 'Innovation',
      description: 'Staying ahead with the latest technologies and creative solutions.'
    }
  ];

  // Founder details
  const founder = {
    name: 'Laxmi Nivas Morishetty',
    role: 'Founder & CEO',
    image: 'https://res.cloudinary.com/dt3effj06/image/upload/v1741635393/nivas_cgckkz.jpg',
    description: 'Laxmi Nivas Morishetty is the founder and CEO of Nivas Edits. With over 5 years of experience in the digital industry, he leads the team with a vision for innovation and excellence. An AI Expert in Web Development, he is also a master in designing and creativity.',
    certifications: [
      { name: 'Canva Certified Designer', url: 'https://www.canva.com/certifications/your_certificate_link' },
      { name: 'Adobe Certified Designer', url: 'https://www.adobe.com/certifications/your_certificate_link' },
      { name: 'Avid Media', url: 'https://www.adobe.com/certifications/your_certificate_link' },
      { name: 'Corel PaintShop', url: 'https://www.adobe.com/certifications/your_certificate_link' }
    ],
    website: 'https://laxminivasmorishetty.netlify.app/' // Add your website link here
  };

  const handleViewMore = (url) => {
    window.open(url, '_blank');
  };

  const handleWhatsApp = () => {
    const phoneNumber = '+919059160424'; // Your WhatsApp number
    const message = 'Hello! I would like to get in touch.'; // Pre-filled message
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="min-h-screen pt-20 bg-gray-50">
      {/* Hero Section */}
      <div className="bg-indigo-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl font-bold mb-4">About Us</h1>
            <p className="text-xl text-indigo-100">
              Crafting digital excellence since 2019
            </p>
          </motion.div>
        </div>
      </div>

      {/* Our Story */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-6">Our Story</h2>
          <p className="text-lg text-gray- 600 max-w-3xl mx-auto">
            Founded in 2019, Nivas Edits emerged from a passion for creating exceptional digital experiences. 
            What started as a small team of dedicated professionals has grown into a full-service digital 
            agency, serving clients worldwide with innovative solutions and creative excellence.
          </p>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-indigo-600 mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Our Values */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-lg text-center"
              >
                <value.icon className="w-12 h-12 text-indigo-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Founder Section */}
        <div className="mb-20 text-center">
          <h2 className="text-3xl font-bold mb-12">Meet Our Founder</h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-lg overflow-hidden shadow-lg inline-block"
          >
            <img
              src={founder.image}
              alt={founder.name}
              className="w-100 h-180 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-1">{founder.name}</h3>
              <p className="text-gray-600">{founder.role}</p>
              <p className="text-gray-600 mt-4">{founder.description}</p>
              <h4 className="text-lg font-bold mt-6">Certifications</h4>
              <ul className="list-disc list-inside text-gray-600 mb-4">
                {founder.certifications.map((cert, index) => (
                  <li key={index} className="flex items-center justify-between">
                    <span className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-indigo-600 mr-2" />
                      {cert.name}
                    </span>
                  </li>
                ))}
              </ul>
              <h4 className="text-lg font-bold mt-4">Website</h4>
              <button 
                onClick={() => handleViewMore(founder.website)} 
                className="bg-indigo-600 text-white mt-5 px-4 py-2 rounded-full hover:bg-indigo-700 transition-colors duration-300"
              >
                View More
              </button>
            </div>
          </motion.div>
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
            <h2 className="text-3xl font-bold mb-4">Ready to Work Together?</h2>
            <p className="text-xl text-indigo-100 mb-8">
              Let's create something amazing for your business
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

      {/* Modal for Contact Us */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-6 max-w-sm mx-auto">
            <h3 className="text-lg font-semibold mb-4">Contact Us for Free!</h3>
            <p className="text-gray-600 mb-4">Fill out the form below to get in touch with us.</p>
            <form>
              <input 
                type="text" 
                placeholder="Your Name" 
                className="border border-gray-300 rounded p-2 mb-4 w-full"
                required
              />
              <input 
                type="email" 
                placeholder="Your Email" 
                className="border border-gray-300 rounded p-2 mb-4 w-full"
                required
              />
              <textarea 
                placeholder="Your Message" 
                className="border border-gray-300 rounded p-2 mb-4 w-full"
                rows="4"
                required
              />
              <button 
                type="submit" 
                className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition-colors duration-300"
              >
                Send Message
              </button>
            </form>
            <button 
              onClick={toggleModal} 
              className="mt-4 text-indigo-600 hover:underline"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}