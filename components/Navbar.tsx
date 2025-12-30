
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-500 ${isScrolled || isMobileMenuOpen ? 'bg-black/95 backdrop-blur-md py-4 border-b border-white/5' : 'bg-transparent py-8'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="text-2xl font-black tracking-tighter flex items-center space-x-2 active:scale-95 transition-transform"
        >
          <span className="text-white">CARS</span>
          <span className="w-2 h-2 bg-zinc-600 rounded-full animate-pulse"></span>
        </button>
        
        {/* Desktop Links */}
        <div className="hidden md:flex space-x-12 text-sm font-medium tracking-widest text-zinc-400">
          <button onClick={() => scrollToSection('fleet')} className="hover:text-white transition-colors uppercase cursor-pointer">FLEET</button>
          <button onClick={() => scrollToSection('philosophy')} className="hover:text-white transition-colors uppercase cursor-pointer">EXPERIENCE</button>
          <button onClick={() => scrollToSection('footer')} className="hover:text-white transition-colors uppercase cursor-pointer">CONTACT</button>
        </div>

        <div className="flex items-center">
          {/* Mobile Toggle */}
          <button 
            className="md:hidden text-white active:scale-90 transition-transform"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 top-[73px] bg-black z-50 md:hidden transition-transform duration-500 ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col items-center justify-center h-full space-y-12 text-2xl font-black tracking-widest text-white uppercase">
          <button onClick={() => scrollToSection('fleet')} className="active:scale-90 transition-transform">FLEET</button>
          <button onClick={() => scrollToSection('philosophy')} className="active:scale-90 transition-transform">EXPERIENCE</button>
          <button onClick={() => scrollToSection('footer')} className="active:scale-90 transition-transform">CONTACT</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
