import React, { useState, useEffect } from 'react';
import { Heart, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = ({ onDonateClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Our Mission', href: '#mission' },
    { name: 'Campaigns', href: '#campaigns' },
    { name: 'Impact', href: '#impact' },
    { name: 'Stories', href: '#stories' },
    { name: 'About', href: '#about' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen
          ? 'bg-kindora-bg/95 backdrop-blur-md border-b border-kindora-primary/10 py-4 shadow-sm'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/logo.jpg" alt="Kindora" className="w-10 h-10 rounded-full shadow-sm border border-white/20" />
            <span className={`text-2xl font-bold tracking-tight transition-colors ${isScrolled || isMobileMenuOpen ? 'text-kindora-primary' : 'text-white'}`}>Kindora</span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className={`text-sm font-medium transition-colors relative group ${isScrolled || isMobileMenuOpen ? 'text-kindora-text/80 hover:text-kindora-primary' : 'text-white/80 hover:text-white'}`}
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-kindora-accent transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <button className={`text-sm font-medium transition-colors ${isScrolled || isMobileMenuOpen ? 'text-kindora-text/80 hover:text-kindora-primary' : 'text-white/80 hover:text-white'}`}>
              Sign In
            </button>
            <button 
              onClick={onDonateClick}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5 ${
                isScrolled || isMobileMenuOpen 
                  ? 'bg-kindora-primary hover:bg-kindora-secondary text-white' 
                  : 'bg-kindora-accent hover:bg-yellow-500 text-kindora-primary'
              }`}
            >
              Donate Now
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className={`md:hidden ${isScrolled || isMobileMenuOpen ? 'text-kindora-text' : 'text-white'}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-kindora-bg border-b border-kindora-primary/10 overflow-hidden"
          >
            <div className="px-4 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  className="text-lg font-medium text-kindora-text py-2 border-b border-kindora-primary/5"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <div className="flex flex-col gap-3 mt-4">
                <button className="text-kindora-text font-medium py-2 border border-kindora-primary/20 rounded-xl">
                  Sign In
                </button>
                <button 
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onDonateClick();
                  }}
                  className="bg-kindora-primary text-kindora-white py-3 rounded-xl font-semibold"
                >
                  Donate Now
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
