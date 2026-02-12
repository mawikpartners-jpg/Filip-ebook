import React from 'react';

const Benefits: React.FC = () => {
  return (
    <section id="benefits" className="py-20 px-4 bg-gray-900">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Pośrednik <span className="text-gradient">vs</span> E-book
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Zamiast oddawać tysiące pośrednikowi – zrób to świadomie sam
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
          {/* Pośrednik */}
          <div className="bg-red-900/20 border-2 border-red-500/30 p-8 rounded-xl">
            <h3 className="text-3xl font-bold mb-6 text-red-400 text-center">Pośrednik</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <span className="text-red-400 text-2xl flex-shrink-0">❌</span>
                <span className="text-gray-300">Prowizja liczona w tysiącach złotych</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-red-400 text-2xl flex-shrink-0">❌</span>
                <span className="text-gray-300">Często presja na szybką sprzedaż</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-red-400 text-2xl flex-shrink-0">❌</span>
                <span className="text-gray-300">Mniejsza kontrola nad ceną i negocjacjami</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-red-400 text-2xl flex-shrink-0">❌</span>
                <span className="text-gray-300">Brak pełnej wiedzy, co dzieje się „w tle"</span>
              </li>
            </ul>
          </div>

          {/* E-book */}
          <div className="bg-secondary/20 border-2 border-secondary p-8 rounded-xl">
            <h3 className="text-3xl font-bold mb-6 text-secondary text-center">E-book</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <span className="text-secondary text-2xl flex-shrink-0">✅</span>
                <span className="text-gray-300">Jednorazowy koszt (ułamek prowizji)</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-secondary text-2xl flex-shrink-0">✅</span>
                <span className="text-gray-300">Pełna kontrola nad sprzedażą</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-secondary text-2xl flex-shrink-0">✅</span>
                <span className="text-gray-300">Wiedza, którą możesz wykorzystać teraz i w przyszłości</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-secondary text-2xl flex-shrink-0">✅</span>
                <span className="text-gray-300">Świadome decyzje</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Savings Calculator */}
        <div className="bg-gradient-to-br from-secondary/10 to-secondary/5 border-2 border-secondary/30 rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-8 text-secondary">
            Ile realnie zaoszczędzisz?
          </h3>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-5xl font-bold text-white mb-2">400 000 zł</div>
              <p className="text-gray-300 mb-4">Wartość mieszkania</p>
              <div className="text-2xl font-bold text-red-400">12 000 zł</div>
              <p className="text-sm text-gray-400">Prowizja pośrednika (3%)</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-white mb-2">600 000 zł</div>
              <p className="text-gray-300 mb-4">Wartość mieszkania</p>
              <div className="text-2xl font-bold text-red-400">18 000 zł</div>
              <p className="text-sm text-gray-400">Prowizja pośrednika (3%)</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-white mb-2">800 000 zł</div>
              <p className="text-gray-300 mb-4">Wartość mieszkania</p>
              <div className="text-2xl font-bold text-red-400">24 000 zł</div>
              <p className="text-sm text-gray-400">Prowizja pośrednika (3%)</p>
            </div>
          </div>
          <div className="mt-8 text-center">
            <p className="text-2xl font-bold text-secondary mb-2">E-book: tylko 269,99 zł</p>
            <p className="text-gray-300">+ Darmowa konsultacja telefoniczna z agentem nieruchomości</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;