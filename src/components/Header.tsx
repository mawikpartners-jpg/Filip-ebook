import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-sm border-b border-secondary/20">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <img 
            src="/83r9p1uwquwpmiinhgzfhqsbbho.avif" 
            alt="best-investments logo" 
            className="h-12 w-auto object-contain"
          />
          <span className="text-white font-bold text-xl">Best Investments</span>
        </div>
        <nav className="hidden md:flex space-x-6">
          <a href="#benefits" className="text-white hover:text-secondary transition-colors">
            Korzyści
          </a>
          <a href="#preview" className="text-white hover:text-secondary transition-colors">
            Podgląd
          </a>
          <a href="#for-whom" className="text-white hover:text-secondary transition-colors">
            Dla kogo
          </a>
          <a href="#authors" className="text-white hover:text-secondary transition-colors">
            Autorzy
          </a>
          <a href="#about" className="text-white hover:text-secondary transition-colors">
            O e-booku
          </a>
          <a href="#pricing" className="text-white hover:text-secondary transition-colors">
            Cena
          </a>
        </nav>
        <a
          href="#pricing"
          className="bg-secondary text-primary px-6 py-2 rounded-lg font-semibold hover:bg-yellow-300 transition-colors"
        >
          Kup teraz
        </a>
      </div>
    </header>
  );
};

export default Header;