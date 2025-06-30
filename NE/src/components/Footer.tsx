import React from 'react';
import { Instagram,  Mail, Phone, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' }
  ];

  const socialLinks = [
    {
      icon: Instagram,
      href: 'https://instagram.com/nivaseditz2024',
      label: 'Instagram'
    }
  ];

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId.replace('#', ''));
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hi, I would like to discuss custom requirements for a project.");
    const whatsappUrl = `https://wa.me/919059160424?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="text-3xl font-bold mb-4 text-red-500">
              Nivas <span className="text-white">Editz</span>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
              Transforming ideas into exceptional digital experiences. We specialize in web development, 
              branding, and social media solutions that drive business growth.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-blue-400 mr-3" />
                <span className="text-gray-300">nivaseditz@gmail.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-green-400 mr-3" />
                <span className="text-gray-300">+91 9059160424</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-200"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect Section */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Connect With Us</h3>
            
            {/* Social Media Icons */}
            <div className="flex space-x-4 mb-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 hover:bg-blue-600 text-gray-300 hover:text-white rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>

            {/* WhatsApp CTA */}
            <button
              onClick={handleWhatsAppClick}
              className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg font-semibold transition-colors duration-200 flex items-center"
            >
              <Phone className="w-4 h-4 mr-2" />
              WhatsApp Us
            </button>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} Nivas Editz. All rights reserved.
            </div>
            <div className="flex items-center text-gray-400 text-sm">
              Built with <Heart className="w-4 h-4 text-red-500 mx-1" /> by Nivas Editz Team
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;