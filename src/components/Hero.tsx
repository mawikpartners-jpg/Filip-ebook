import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="pt-32 pb-20 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block bg-secondary/20 text-secondary px-4 py-2 rounded-full text-sm font-semibold">
              ⚡ OFERTA LIMITOWANA - Oszczędź nawet 15 000 zł
            </div>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Sprzedaż mieszkania{' '}
              <span className="text-gradient">krok po kroku</span>
            </h1>
            <p className="text-xl text-gray-300">
              Zrób to sam i oszczędź pieniądze! Kompleksowy przewodnik dla każdego, kto chce
              sprzedać mieszkanie bez pośredników i zachować całą kwotę ze sprzedaży.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#pricing"
                className="bg-secondary text-primary px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-300 transition-all transform hover:scale-105 text-center"
              >
                Pobierz teraz za 197 zł
              </a>
              <a
                href="#about"
                className="border-2 border-secondary text-secondary px-8 py-4 rounded-lg font-bold text-lg hover:bg-secondary/10 transition-colors text-center"
              >
                Dowiedz się więcej
              </a>
            </div>
            <div className="flex items-center space-x-8 pt-4">
              <div className="flex items-center space-x-2">
                <svg className="w-6 h-6 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm">Natychmiastowy dostęp</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-6 h-6 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm">Gwarancja zwrotu</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="relative z-10 bg-gradient-to-br from-secondary/20 to-secondary/5 p-8 rounded-2xl border-2 border-secondary/30">
              <div className="aspect-[3/4] rounded-lg shadow-2xl overflow-hidden">
                <img 
                  src="/okladka.jpg" 
                  alt="Sprzedaż mieszkania krok po kroku - okładka ebooka" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 w-full h-full bg-secondary/10 rounded-2xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;