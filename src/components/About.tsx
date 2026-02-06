import React from 'react';
import { Chapter } from '../types';

const chapters: Chapter[] = [
  {
    number: 1,
    title: 'Przygotowanie mieszkania do sprzedaży',
    description: 'Home staging, drobne remonty i maksymalizacja atrakcyjności mieszkania',
  },
  {
    number: 2,
    title: 'Wycena i ustalenie ceny',
    description: 'Jak prawidłowo wycenić mieszkanie i ustawić konkurencyjną cenę',
  },
  {
    number: 3,
    title: 'Marketing i ogłoszenia',
    description: 'Tworzenie efektywnych ogłoszeń, profesjonalna fotografia i promocja online',
  },
  {
    number: 4,
    title: 'Przeprowadzanie oględzin',
    description: 'Jak przygotować się do pokazów i skutecznie prezentować mieszkanie',
  },
  {
    number: 5,
    title: 'Negocjacje z kupującymi',
    description: 'Sprawdzone techniki negocjacyjne i unikanie typowych pułapek',
  },
  {
    number: 6,
    title: 'Aspekty prawne i dokumentacja',
    description: 'Wszystkie wymagane dokumenty, umowy i formalności prawne',
  },
  {
    number: 7,
    title: 'Finalizacja transakcji',
    description: 'Akty notarialne, przekazanie mieszkania i rozliczenia finansowe',
  },
  {
    number: 8,
    title: 'Bezpieczeństwo transakcji',
    description: 'Jak chronić się przed oszustwami i zabezpieczyć swoje interesy',
  },
];

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 px-4 bg-gray-900">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Co znajdziesz <span className="text-gradient">w e-booku?</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Kompletny przewodnik po wszystkich etapach sprzedaży mieszkania - od przygotowania do
            finalizacji transakcji
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {chapters.map((chapter) => (
            <div
              key={chapter.number}
              className="bg-black/50 border border-secondary/20 p-6 rounded-xl hover:border-secondary/50 transition-all"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-secondary text-primary rounded-lg flex items-center justify-center font-bold text-xl">
                  {chapter.number}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-white">{chapter.title}</h3>
                  <p className="text-gray-400">{chapter.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-secondary/10 to-secondary/5 border border-secondary/30 p-8 rounded-xl text-center">
            <div className="text-4xl mb-4">📄</div>
            <h3 className="text-2xl font-bold mb-2 text-secondary">120+ stron</h3>
            <p className="text-gray-300">Szczegółowej, praktycznej wiedzy</p>
          </div>
          <div className="bg-gradient-to-br from-secondary/10 to-secondary/5 border border-secondary/30 p-8 rounded-xl text-center">
            <div className="text-4xl mb-4">✅</div>
            <h3 className="text-2xl font-bold mb-2 text-secondary">15+ checklistów</h3>
            <p className="text-gray-300">Gotowych do wykorzystania</p>
          </div>
          <div className="bg-gradient-to-br from-secondary/10 to-secondary/5 border border-secondary/30 p-8 rounded-xl text-center">
            <div className="text-4xl mb-4">📝</div>
            <h3 className="text-2xl font-bold mb-2 text-secondary">10+ szablonów</h3>
            <p className="text-gray-300">Dokumentów i umów</p>
          </div>
        </div>

        <div className="mt-16 bg-black border-2 border-secondary/30 rounded-2xl p-8 md:p-12">
          <h3 className="text-3xl font-bold mb-6 text-center">
            <span className="text-gradient">BONUS:</span> Otrzymasz również...
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-start space-x-4">
              <div className="text-3xl">🎁</div>
              <div>
                <h4 className="text-xl font-bold mb-2 text-secondary">Kalkulator ROI</h4>
                <p className="text-gray-300">
                  Narzędzie do obliczania opłacalności remontów i ulepszeń
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="text-3xl">🎁</div>
              <div>
                <h4 className="text-xl font-bold mb-2 text-secondary">Lista sprawdzeń przed sprzedażą</h4>
                <p className="text-gray-300">
                  Kompletna checklista wszystkich kroków do wykonania
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="text-3xl">🎁</div>
              <div>
                <h4 className="text-xl font-bold mb-2 text-secondary">Szablony ogłoszeń</h4>
                <p className="text-gray-300">
                  Gotowe wzory ogłoszeń na popularne portale
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="text-3xl">🎁</div>
              <div>
                <h4 className="text-xl font-bold mb-2 text-secondary">Przewodnik negocjacji</h4>
                <p className="text-gray-300">
                  PDF z technikami i przykładowymi scenariuszami
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;