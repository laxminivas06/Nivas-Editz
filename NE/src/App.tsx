import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Pioneer from './components/Pioneer';
import Services from './components/Services';
import ClientShowcase from './components/ClientShowcase';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.substring(1).toLowerCase() || 'home';
      setCurrentPage(hash);
      window.scrollTo(0, 0);
    };

    // Initial load
    handleHashChange();

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const renderPage = () => {
    switch(currentPage) {
      case 'home':
        return (
          <div className="page-container">
            <Hero />
            <About />
            <Services />
            <Contact />
          </div>
        );
      case 'about':
        return (
          <div className="page-container">
            <About />
            <Contact />
          </div>
        );
      case 'services':
        return (
          <div className="page-container">
            <Services />
            <Contact />
          </div>
        );
      case 'pioneer':
        return (
          <div className="page-container">
            <Pioneer />
            <Contact />
          </div>
        );
      case 'client-showcase':
        return (
          <div className="page-container">
            <ClientShowcase />
            <Contact />
          </div>
        );
      case 'contact':
        return (
          <div className="page-container">
            <Contact />
          </div>
        );
      default:
        return (
          <div className="page-container">
            <Hero />
            <About />
            <Services />
            <Contact />
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {renderPage()}
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;