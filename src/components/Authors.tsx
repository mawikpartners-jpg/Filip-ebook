import React from 'react';

const Authors: React.FC = () => {
  return (
    <section className="py-20 px-4 bg-black">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            O <span className="text-gradient">autorach</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Praktyczna wiedza prosto od profesjonalistów rynku nieruchomości
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Filip Liberda */}
          <div className="bg-gray-900 border-2 border-secondary/30 rounded-2xl p-8 hover:border-secondary transition-all">
            <div className="mb-6">
              <img 
                src="/filip.jpeg" 
                alt="Filip Liberda - Agent nieruchomości" 
                className="w-48 h-48 rounded-full mx-auto object-cover border-4 border-secondary"
                style={{ objectPosition: '50% 40%' }}
              />
            </div>
            <h3 className="text-2xl font-bold text-secondary text-center mb-4">
              Filip Liberda
            </h3>
            <div className="space-y-3 text-gray-300">
              <p className="flex items-start space-x-2">
                <span className="text-secondary flex-shrink-0">✓</span>
                <span>10 lat doświadczenia w branży nieruchomości</span>
              </p>
              <p className="flex items-start space-x-2">
                <span className="text-secondary flex-shrink-0">✓</span>
                <span>Setki udanych transakcji i zadowolonych klientów</span>
              </p>
              <p className="flex items-start space-x-2">
                <span className="text-secondary flex-shrink-0">✓</span>
                <span>Praktyczna wiedza oparta na realnych doświadczeniach rynkowych</span>
              </p>
              <p className="flex items-start space-x-2">
                <span className="text-secondary flex-shrink-0">✓</span>
                <span>Oferuje darmową konsultację telefoniczną dla kupujących e-book</span>
              </p>
            </div>
          </div>

          {/* Wiktoria Wilińska */}
          <div className="bg-gray-900 border-2 border-secondary/30 rounded-2xl p-8 hover:border-secondary transition-all">
            <div className="mb-6">
              <img 
                src="/wiktoria.jpeg" 
                alt="Wiktoria Wilińska - Specjalistka ds. marketingu nieruchomości" 
                className="w-48 h-48 rounded-full mx-auto object-cover object-top border-4 border-secondary"
              />
            </div>
            <h3 className="text-2xl font-bold text-secondary text-center mb-4">
              Wiktoria Wilińska
            </h3>
            <div className="space-y-3 text-gray-300">
              <p className="flex items-start space-x-2">
                <span className="text-secondary flex-shrink-0">✓</span>
                <span>Specjalistka ds. marketingu nieruchomości</span>
              </p>
              <p className="flex items-start space-x-2">
                <span className="text-secondary flex-shrink-0">✓</span>
                <span>Dba o przystępny język i jasny przekaz treści</span>
              </p>
              <p className="flex items-start space-x-2">
                <span className="text-secondary flex-shrink-0">✓</span>
                <span>Odpowiedzialna za graficzne i wizualne aspekty e-booka</span>
              </p>
              <p className="flex items-start space-x-2">
                <span className="text-secondary flex-shrink-0">✓</span>
                <span>Tworzy materiały zrozumiałe dla każdego, bez specjalistycznego żargonu</span>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="bg-secondary/10 border-2 border-secondary/30 rounded-xl p-6 max-w-3xl mx-auto">
            <p className="text-xl text-gray-300">
              <span className="text-secondary font-bold">Filip i Wiktoria</span> połączyli swoje doświadczenie, 
              aby stworzyć kompleksowy przewodnik, który pomoże Ci sprzedać mieszkanie 
              <span className="text-secondary font-semibold"> świadomie, bezpiecznie i z zyskiem</span>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Authors;