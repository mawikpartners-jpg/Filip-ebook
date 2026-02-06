import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-secondary/20 py-12 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center">
                <span className="text-primary font-bold text-xl">BI</span>
              </div>
              <span className="text-2xl font-bold text-secondary">best-investments</span>
            </div>
            <p className="text-gray-400">
              Kompleksowe rozwiązania w zakresie nieruchomości i inwestycji.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-secondary">Kontakt</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Email: biurobestinvestments@gmail.com</li>
              <li>Telefon: +48 515 616 384</li>
              <li>Gołębia 85/3, 85-309 Bydgoszcz</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-secondary">Linki</h3>
            <ul className="space-y-2">
              <li>
                <a href="#benefits" className="text-gray-400 hover:text-secondary transition-colors">
                  Korzyści
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-secondary transition-colors">
                  O e-booku
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-gray-400 hover:text-secondary transition-colors">
                  Cena
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
          <p className="mb-2">
            © {new Date().getFullYear()}{' '}
            <a 
              href="https://procesflow.pl/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-secondary hover:text-yellow-300 transition-colors"
            >
              Procesflow
            </a>
            . Wszelkie prawa zastrzeżone.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;