import React from 'react';

const WhyThisEbook: React.FC = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Dlaczego warto wybrać <span className="text-gradient">właśnie ten e-book?</span>
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          <div className="bg-gray-800/50 border-2 border-secondary/30 p-6 rounded-xl hover:border-secondary transition-all">
            <div className="text-4xl mb-4">📊</div>
            <h3 className="text-xl font-bold mb-3 text-secondary">Opiera się na realnych transakcjach</h3>
            <p className="text-gray-300">Wiedza z praktyki, nie teoria z internetu</p>
          </div>
          
          <div className="bg-gray-800/50 border-2 border-secondary/30 p-6 rounded-xl hover:border-secondary transition-all">
            <div className="text-4xl mb-4">👥</div>
            <h3 className="text-xl font-bold mb-3 text-secondary">Stworzony przez praktyków</h3>
            <p className="text-gray-300">Autorzy z wieloletnim doświadczeniem na rynku nieruchomości</p>
          </div>
          
          <div className="bg-gray-800/50 border-2 border-secondary/30 p-6 rounded-xl hover:border-secondary transition-all">
            <div className="text-4xl mb-4">💬</div>
            <h3 className="text-xl font-bold mb-3 text-secondary">Bez prawniczego języka</h3>
            <p className="text-gray-300">Jasne, przystępne wyjaśnienia dla każdego</p>
          </div>
          
          <div className="bg-gray-800/50 border-2 border-secondary/30 p-6 rounded-xl hover:border-secondary transition-all">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-xl font-bold mb-3 text-secondary">Bez teorii i lania wody</h3>
            <p className="text-gray-300">Tylko konkretna, praktyczna wiedza do wykorzystania</p>
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-2xl font-semibold text-secondary mb-2">
            To wiedza, która pomoże Ci zaoszczędzić nawet kilkanaście tysięcy złotych
          </p>
          <p className="text-gray-400 text-lg">
            Unikniesz kosztów prowizji pośrednika oraz własnych błędów w procesie sprzedaży
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyThisEbook;