import React from 'react';
import { Benefit } from '../types';

const benefits: Benefit[] = [
  {
    icon: '💰',
    title: 'Oszczędź nawet 15 000 zł',
    description: 'Uniknij prowizji dla agencji nieruchomości, która wynosi średnio 3-5% wartości mieszkania.',
  },
  {
    icon: '⏱️',
    title: 'Pełna kontrola nad procesem',
    description: 'Sam decydujesz o terminach oglądzeń, negocjacjach i warunkach sprzedaży.',
  },
  {
    icon: '📋',
    title: 'Kompletna wiedza prawna',
    description: 'Dowiesz się wszystkiego o dokumentach, umowach i formalności przy sprzedaży.',
  },
  {
    icon: '🎯',
    title: 'Sprawdzone strategie marketingu',
    description: 'Skuteczne metody promowania mieszkania i dotarcia do najlepszych kupujących.',
  },
  {
    icon: '🔒',
    title: 'Bezpieczne transakcje',
    description: 'Nauczysz się jak zabezpieczyć się przed oszustwami i problemami prawnymi.',
  },
  {
    icon: '📱',
    title: 'Gotowe szablony i checklisty',
    description: 'Praktyczne narzędzia, które możesz od razu wykorzystać w sprzedaży.',
  },
];

const Benefits: React.FC = () => {
  return (
    <section id="benefits" className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Dlaczego warto <span className="text-gradient">sprzedać samodzielnie?</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Poznaj wszystkie korzyści, które czekają na Ciebie po przeczytaniu e-booka
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-gray-800/50 border border-secondary/20 p-8 rounded-xl hover:border-secondary/50 transition-all hover:transform hover:scale-105"
            >
              <div className="text-5xl mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-secondary">{benefit.title}</h3>
              <p className="text-gray-300">{benefit.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-16 bg-secondary/10 border-2 border-secondary/30 rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-secondary mb-2">15 000 zł</div>
              <p className="text-gray-300">Średnia oszczędność na prowizji</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-secondary mb-2">7 dni</div>
              <p className="text-gray-300">Wystarczy, aby przeczytać i zastosować</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-secondary mb-2">100%</div>
              <p className="text-gray-300">Praktyczna wiedza bez zbędnej teorii</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;