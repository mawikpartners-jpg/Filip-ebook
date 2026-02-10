import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 px-4 bg-black">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Co zawiera <span className="text-gradient">ten e-book?</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Proces sprzedaży mieszkania od A do Z – od przygotowania nieruchomości po przekazanie kluczy
          </p>
        </div>

        {/* Main features */}
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6 mb-16">
          <div className="bg-secondary/10 border border-secondary/30 p-6 rounded-xl text-center">
            <div className="text-4xl mb-3">📄</div>
            <div className="text-3xl font-bold text-secondary mb-2">66 stron</div>
            <p className="text-gray-300">Praktycznej wiedzy w formie PDF</p>
          </div>
          <div className="bg-secondary/10 border border-secondary/30 p-6 rounded-xl text-center">
            <div className="text-4xl mb-3">�</div>
            <div className="text-3xl font-bold text-secondary mb-2">2 checklisty</div>
            <p className="text-gray-300">Rozbudowane listy kontrolne</p>
          </div>
          <div className="bg-secondary/10 border border-secondary/30 p-6 rounded-xl text-center">
            <div className="text-4xl mb-3">🎯</div>
            <div className="text-3xl font-bold text-secondary mb-2">8 etapów</div>
            <p className="text-gray-300">+ bonusowy rozdział</p>
          </div>
          <div className="bg-secondary/10 border border-secondary/30 p-6 rounded-xl text-center">
            <div className="text-4xl mb-3">�</div>
            <div className="text-3xl font-bold text-secondary mb-2">20+ wskazówek</div>
            <p className="text-gray-300">Praktycznych porad i list kontrolnych</p>
          </div>
        </div>

        {/* Full content list */}
        <div className="bg-gray-900 border-2 border-secondary/30 rounded-2xl p-8 md:p-12 mb-16">
          <h3 className="text-2xl font-bold mb-6 text-secondary text-center">
            Kompletna zawartość e-booka:
          </h3>
          <ul className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            <li className="flex items-start space-x-3">
              <span className="text-secondary text-xl flex-shrink-0">✔️</span>
              <span className="text-gray-300">Proces sprzedaży mieszkania od A do Z – od przygotowania nieruchomości po przekazanie kluczy</span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-secondary text-xl flex-shrink-0">✔️</span>
              <span className="text-gray-300">8 kluczowych etapów sprzedaży mieszkania opisanych krok po kroku</span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-secondary text-xl flex-shrink-0">✔️</span>
              <span className="text-gray-300">66 stron praktycznej wiedzy w formie e-booka PDF</span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-secondary text-xl flex-shrink-0">✔️</span>
              <span className="text-gray-300">Jasne i zrozumiałe wyjaśnienie dokumentów oraz formalności (bez prawniczego języka)</span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-secondary text-xl flex-shrink-0">✔️</span>
              <span className="text-gray-300">2 rozbudowane checklisty</span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-secondary text-xl flex-shrink-0">✔️</span>
              <span className="text-gray-300">Dokładne omówienie umów i kluczowych zapisów</span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-secondary text-xl flex-shrink-0">✔️</span>
              <span className="text-gray-300">Ponad 20 praktycznych wskazówek i list kontrolnych, które oszczędzają czas i stres</span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-secondary text-xl flex-shrink-0">✔️</span>
              <span className="text-gray-300">Przykłady rozmów, negocjacji i realnych sytuacji z rynku nieruchomości</span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-secondary text-xl flex-shrink-0">✔️</span>
              <span className="text-gray-300">Wiedza oparta na realnych transakcjach, a nie teorii z internetu</span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-secondary text-xl flex-shrink-0">✔️</span>
              <span className="text-gray-300">Bonusowy rozdział o najczęstszych błędach sprzedających i sposobach na przyspieszenie sprzedaży</span>
            </li>
          </ul>
        </div>

        {/* Important note */}
        <div className="bg-secondary/10 border-l-4 border-secondary p-6 rounded-r-xl max-w-3xl mx-auto">
          <div className="flex items-start space-x-4">
            <span className="text-4xl">ℹ️</span>
            <div>
              <h4 className="text-xl font-bold text-secondary mb-2">Ważne!</h4>
              <p className="text-gray-300">
                Wszystkie checklisty i materiały są bezpośrednio w treści e-booka. 
                Nie ma osobnych plików PDF do pobrania – wszystko dostępne w jednym, przejrzystym dokumencie.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;