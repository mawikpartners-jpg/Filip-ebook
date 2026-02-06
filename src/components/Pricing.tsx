import React, { useState } from 'react';
import { handleCheckout } from '../utils/stripe';

const Pricing: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handlePurchase = async () => {
    setIsLoading(true);
    setError(null);
    
    try {
      // Replace with your actual Stripe Price ID
      await handleCheckout('price_1234567890');
    } catch (err) {
      setError('Wystąpił błąd podczas przetwarzania płatności. Spróbuj ponownie.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="pricing" className="py-20 px-4 bg-black">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Zacznij oszczędzać <span className="text-gradient">już dziś</span>
          </h2>
          <p className="text-xl text-gray-300">
            Jednorazowa inwestycja, która zwróci się wielokrotnie
          </p>
        </div>

        <div className="bg-gradient-to-br from-gray-900 to-black border-4 border-secondary rounded-2xl p-8 md:p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 bg-secondary text-primary px-6 py-2 rounded-bl-2xl font-bold">
            OFERTA SPECJALNA
          </div>

          <div className="mt-8">
            <div className="flex items-baseline justify-center mb-8">
              <span className="text-gray-400 line-through text-3xl mr-4">397 zł</span>
              <span className="text-6xl font-bold text-secondary">197 zł</span>
            </div>

            <div className="text-center mb-8">
              <div className="inline-block bg-red-500/20 text-red-400 px-4 py-2 rounded-lg font-semibold">
                ⚠️ Cena promocyjna obowiązuje tylko do końca tygodnia!
              </div>
            </div>

            <ul className="space-y-4 mb-10">
              {[
                'Kompletny e-book (120+ stron)',
                '8 szczegółowych rozdziałów',
                '15+ praktycznych checklistów',
                '10+ szablonów dokumentów',
                '4 bonusy premium (wartość 147 zł)',
                'Natychmiastowy dostęp online',
                'Dożywotni dostęp do aktualizacji',
                '30-dniowa gwarancja zwrotu pieniędzy',
              ].map((feature, index) => (
                <li key={index} className="flex items-center text-lg">
                  <svg
                    className="w-6 h-6 text-secondary mr-3 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            {error && (
              <div className="mb-6 bg-red-500/20 border border-red-500/50 text-red-400 px-4 py-3 rounded-lg">
                {error}
              </div>
            )}

            <button
              onClick={handlePurchase}
              disabled={isLoading}
              className="w-full bg-secondary text-primary py-6 rounded-xl font-bold text-2xl hover:bg-yellow-300 transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              {isLoading ? 'Przetwarzanie...' : 'Kup teraz za 197 zł'}
            </button>

            <div className="mt-8 text-center text-gray-400 text-sm">
              <p className="mb-2">🔒 Bezpieczna płatność przez Stripe</p>
              <p>✅ Gwarancja zwrotu pieniędzy w ciągu 30 dni</p>
            </div>
          </div>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6 text-center">
          <div className="bg-gray-900 p-6 rounded-xl">
            <div className="text-3xl mb-2">💳</div>
            <h3 className="font-bold mb-2">Bezpieczna płatność</h3>
            <p className="text-gray-400 text-sm">Szyfrowane połączenie SSL</p>
          </div>
          <div className="bg-gray-900 p-6 rounded-xl">
            <div className="text-3xl mb-2">⚡</div>
            <h3 className="font-bold mb-2">Natychmiastowy dostęp</h3>
            <p className="text-gray-400 text-sm">Pobierz zaraz po zakupie</p>
          </div>
          <div className="bg-gray-900 p-6 rounded-xl">
            <div className="text-3xl mb-2">🛡️</div>
            <h3 className="font-bold mb-2">Gwarancja zwrotu</h3>
            <p className="text-gray-400 text-sm">30 dni bez pytań</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;