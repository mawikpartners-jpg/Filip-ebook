import React from 'react';

const ForWhom: React.FC = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Dla kogo jest <span className="text-gradient">ten e-book?</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-secondary/10 border-2 border-secondary/30 p-8 rounded-xl hover:border-secondary transition-all">
            <div className="text-5xl mb-4 text-center">🏠</div>
            <h3 className="text-xl font-bold mb-3 text-secondary text-center">Osoby sprzedające po raz pierwszy</h3>
            <p className="text-gray-300 text-center">
              Jeśli nie wiesz od czego zacząć i potrzebujesz przewodnika krok po kroku przez cały proces sprzedaży
            </p>
          </div>

          <div className="bg-secondary/10 border-2 border-secondary/30 p-8 rounded-xl hover:border-secondary transition-all">
            <div className="text-5xl mb-4 text-center">💰</div>
            <h3 className="text-xl font-bold mb-3 text-secondary text-center">Właściciele chcący zaoszczędzić</h3>
            <p className="text-gray-300 text-center">
              Chcesz uniknąć prowizji pośrednika i zachować pełną kontrolę nad ceną i warunkami sprzedaży
            </p>
          </div>

          <div className="bg-secondary/10 border-2 border-secondary/30 p-8 rounded-xl hover:border-secondary transition-all">
            <div className="text-5xl mb-4 text-center">🎓</div>
            <h3 className="text-xl font-bold mb-3 text-secondary text-center">Osoby ceniące wiedzę</h3>
            <p className="text-gray-300 text-center">
              Wolisz podejmować świadome decyzje oparte na solidnej wiedzy, zamiast polegać wyłącznie na innych
            </p>
          </div>
        </div>

        <div className="mt-12 text-center max-w-3xl mx-auto">
          <div className="bg-secondary/10 border-l-4 border-secondary p-6 rounded-r-xl">
            <p className="text-lg text-gray-300">
              <strong className="text-secondary">Ten e-book to dla Ciebie,</strong> jeśli chcesz przejąć kontrolę nad sprzedażą swojego mieszkania, 
              zaoszczędzić tysiące złotych i czuć się pewnie na każdym etapie procesu.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForWhom;