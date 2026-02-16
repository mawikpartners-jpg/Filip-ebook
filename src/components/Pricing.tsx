import React from 'react';

const STRIPE_PAYMENT_LINK = 'https://buy.stripe.com/6oU5kD6tv1g7gNTfI1co000';

const Pricing: React.FC = () => {
  const handleCheckout = () => {
    window.location.href = STRIPE_PAYMENT_LINK;
  };

  return (
    <section id="pricing" className="py-20 px-4 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Zacznij <span className="text-gradient">oszczędzać już dziś</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Jednorazowa inwestycja, która zwróci się wielokrotnie
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-secondary/20 to-secondary/5 border-4 border-secondary rounded-3xl p-8 md:p-12 relative overflow-hidden">
            {/* Ribbon */}
            <div className="absolute top-6 -right-12 bg-red-600 text-white px-12 py-2 transform rotate-45 text-sm font-bold shadow-lg">
              PROMOCJA
            </div>

            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold mb-2">E-book + Darmowa Konsultacja</h3>
              <p className="text-gray-300 text-lg">
                Sprzedaż mieszkania krok po kroku
              </p>
            </div>

            {/* Price */}
            <div className="text-center mb-8">
              <div className="inline-block">
                <div className="text-red-500 font-bold text-xl mb-2">CENA PROMOCYJNA</div>
                <div className="text-gray-400 line-through text-2xl mb-2">499,99 zł</div>
                <div className="text-7xl font-bold text-red-500 mb-2">269,99 zł</div>
                <div className="bg-red-600 text-white px-6 py-2 rounded-lg font-bold inline-block">
                  PROMOCJA -46%
                </div>
                <div className="mt-3 text-secondary font-semibold text-lg">
                  Oszczędzasz nawet kilkanaście tysięcy złotych!
                </div>
              </div>
            </div>

            {/* What you get */}
            <div className="mb-8">
              <h4 className="text-2xl font-bold text-secondary text-center mb-6">
                Co dostajesz po zakupie:
              </h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-start space-x-3 bg-black/30 p-4 rounded-lg">
                  <span className="text-secondary text-2xl flex-shrink-0">🎁</span>
                  <div>
                    <p className="font-bold text-white">E-book PDF (66 stron)</p>
                    <p className="text-sm text-gray-400">Natychmiastowy dostęp po zakupie</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 bg-black/30 p-4 rounded-lg">
                  <span className="text-secondary text-2xl flex-shrink-0">📞</span>
                  <div>
                    <p className="font-bold text-white">Darmowa konsultacja telefoniczna</p>
                    <p className="text-sm text-gray-400">30 minut rozmowy z agentem Filipem Liberdą</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 bg-black/30 p-4 rounded-lg">
                  <span className="text-secondary text-2xl flex-shrink-0">✅</span>
                  <div>
                    <p className="font-bold text-white">8 etapów + rozdział bonusowy</p>
                    <p className="text-sm text-gray-400">Kompletny proces sprzedaży</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 bg-black/30 p-4 rounded-lg">
                  <span className="text-secondary text-2xl flex-shrink-0">📋</span>
                  <div>
                    <p className="font-bold text-white">2 rozbudowane checklisty</p>
                    <p className="text-sm text-gray-400">+ 20+ praktycznych wskazówek</p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="text-center">
              <button
                onClick={handleCheckout}
                className="bg-secondary text-primary px-12 py-5 rounded-xl font-bold text-2xl hover:bg-yellow-300 transition-all transform hover:scale-105 shadow-2xl"
              >
                Kup teraz za 269,99 zł
              </button>
              <p className="text-sm text-gray-400 mt-4">
                � Bezpieczna płatność przez Stripe • ✅ Natychmiastowy dostęp
              </p>
            </div>

            {/* Guarantees */}
            <div className="mt-8 grid md:grid-cols-3 gap-4 text-center">
              <div className="bg-black/30 p-4 rounded-lg">
                <div className="text-2xl mb-2">�</div>
                <p className="text-sm text-gray-300">Bezpieczna płatność</p>
              </div>
              <div className="bg-black/30 p-4 rounded-lg">
                <div className="text-2xl mb-2">⚡</div>
                <p className="text-sm text-gray-300">Natychmiastowy dostęp</p>
              </div>
              <div className="bg-black/30 p-4 rounded-lg">
                <div className="text-2xl mb-2">💯</div>
                <p className="text-sm text-gray-300">100% praktycznej wiedzy</p>
              </div>
            </div>
          </div>

          {/* Additional trust element */}
          <div className="mt-8 text-center">
            <div className="bg-secondary/10 border-2 border-secondary/30 rounded-xl p-6">
              <p className="text-lg text-gray-300 mb-3">
                <span className="text-secondary font-bold text-xl">🎁 Bonus: Darmowa Konsultacja Telefoniczna</span>
              </p>
              <p className="text-gray-300">
                Po zakupie e-booka otrzymujesz <span className="text-secondary font-semibold">30-minutową konsultację telefoniczną z Filipem Liberdą</span> – agentem nieruchomości z wieloletnim doświadczeniem. 
                To idealna okazja, żeby wyjaśnić wszelkie wątpliwości, dostosować strategie do Twojej sytuacji i uzyskać profesjonalne wsparcie.
              </p>
              <p className="text-secondary font-bold mt-3 text-lg">
                Wartość konsultacji: 300 zł – w pakiecie z e-bookiem GRATIS!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;