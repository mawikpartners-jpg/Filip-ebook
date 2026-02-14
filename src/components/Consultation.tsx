import React from 'react';

const Consultation: React.FC = () => {
  return (
    <section className="py-16 px-4 bg-black">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <div className="bg-secondary/10 border-2 border-secondary/30 rounded-xl p-8">
            <p className="text-2xl text-gray-300 mb-3 text-center">
              <span className="text-secondary font-bold text-3xl">🎁 Bonus: Darmowa Konsultacja Telefoniczna</span>
            </p>
            <p className="text-lg text-gray-300 text-center">
              Po zakupie e-booka otrzymujesz <span className="text-secondary font-semibold">30-minutową konsultację telefoniczną z Filipem Liberdą</span> – agentem nieruchomości z wieloletnim doświadczeniem. 
              To idealna okazja, żeby wyjaśnić wszelkie wątpliwości, dostosować strategie do Twojej sytuacji i uzyskać profesjonalne wsparcie.
            </p>
            <p className="text-secondary font-bold mt-4 text-2xl text-center">
              Wartość konsultacji: 300 zł – w pakiecie z e-bookiem GRATIS!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Consultation;