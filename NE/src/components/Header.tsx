import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigateTo = (item: string) => {
    const hash = item.toLowerCase() === 'clientshowcase' 
      ? 'client-showcase' 
      : item.toLowerCase();
    window.location.hash = hash;
    setIsMobileMenuOpen(false);
  };

  const navItems = ['Home', 'About', 'Services', 'Pioneer', 'ClientShowcase', 'Contact'];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled || isMobileMenuOpen ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          {/* Logo with background container */}
          <div className="flex items-center">
            <div className={`rounded-lg p-1 sm:p-2 mr-2 sm:mr-3 transition-all duration-300 ${
              isScrolled || isMobileMenuOpen ? 'bg-blue-100' : 'bg-white/70 backdrop-blur-sm'
            }`}>
              <img 
                src="https://i.postimg.cc/152k79tp/snl-final.png" 
                alt="NivasEditz Logo" 
                className="h-7 sm:h-8 w-auto"
              />
            </div>
            <div className={`text-xl sm:text-2xl font-bold ${
              isScrolled || isMobileMenuOpen ? 'text-red-600' : 'text-red-600'
            }`}>
              Nivas<span className={isScrolled || isMobileMenuOpen ? "text-black" : "text-black"}>Editz</span>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6 lg:space-x-8">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => navigateTo(item)}
                className={`transition-colors duration-200 hover:text-blue-600 ${
                  isScrolled || isMobileMenuOpen ? 'text-gray-700' : 'text-white'
                }`}
              >
                {item.replace(/([a-z])([A-Z])/g, '$1 $2')}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button - Always black in mobile view */}
          <button
            className="md:hidden text-black" // Always black in mobile view
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation - Always visible with white background when open */}
        {isMobileMenuOpen && (
          <nav className="md:hidden mt-3 pb-3 bg-white rounded-lg shadow-lg">
            <div className="flex flex-col space-y-3 px-4">
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => navigateTo(item)}
                  className="text-left py-2 transition-colors duration-200 hover:text-blue-600 text-gray-700"
                >
                  {item.replace(/([a-z])([A-Z])/g, '$1 $2')}
                </button>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;