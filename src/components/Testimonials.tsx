import React from 'react';
import { Testimonial } from '../types';

const testimonials: Testimonial[] = [
  {
    name: 'Anna Kowalska',
    role: 'Warszawa',
    content: 'Dzięki e-bookowi sprzedałam mieszkanie samodzielnie i zaoszczędziłam 12 000 zł na prowizji. Wszystko było opisane krok po kroku, nawet dla laika!',
    rating: 5,
  },
  {
    name: 'Michał Nowak',
    role: 'Kraków',
    content: 'Świetny przewodnik! Szczególnie pomocne były szablony dokumentów i checklisty. Proces sprzedaży przebiegł bez problemów.',
    rating: 5,
  },
  {
    name: 'Katarzyna Wiśniewska',
    role: 'Wrocław',
    content: 'Byłam sceptyczna, ale e-book przewyższył moje oczekiwania. Wszystkie aspekty prawne i negocjacje - wszystko jasno wytłumaczone.',
    rating: 5,
  },
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Co mówią <span className="text-gradient">nasi czytelnicy?</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Dołącz do setek zadowolonych osób, które zaoszczędziły tysiące złotych
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-800/50 border border-secondary/20 p-8 rounded-xl hover:border-secondary/50 transition-all"
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-secondary"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
              <div>
                <div className="font-bold text-white">{testimonial.name}</div>
                <div className="text-secondary text-sm">{testimonial.role}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-secondary/10 via-secondary/5 to-secondary/10 border-2 border-secondary/30 rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-3xl font-bold mb-4">
            Gwarancja 100% satysfakcji
          </h3>
          <p className="text-xl text-gray-300 mb-6 max-w-3xl mx-auto">
            Jesteśmy przekonani o wartości naszego e-booka. Jeśli w ciągu 30 dni uznasz, że nie
            spełnia Twoich oczekiwań, zwrócimy Ci pełną kwotę - bez pytań.
          </p>
          <div className="flex justify-center items-center space-x-4 text-secondary">
            <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <div className="text-left">
              <div className="text-2xl font-bold">30-dniowa gwarancja</div>
              <div className="text-lg">Bez ryzyka dla Ciebie</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;