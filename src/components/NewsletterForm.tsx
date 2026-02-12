import React, { useState } from 'react';

interface NewsletterFormProps {
  onSuccess: () => void;
  onClose: () => void;
}

const NewsletterForm: React.FC<NewsletterFormProps> = ({ onSuccess, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    rodo: false,
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.rodo) {
      setError('Musisz zaakceptować zgodę RODO');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await fetch('https://n8n.procesflow.pl/webhook/64427ef6-023d-43fe-a946-9eadd9428d9c', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          timestamp: new Date().toISOString(),
        }),
      });

      if (response.ok) {
        // Save to localStorage
        localStorage.setItem('ebook_newsletter_subscribed', 'true');
        onSuccess();
      } else {
        throw new Error('Błąd podczas zapisywania');
      }
    } catch (err) {
      console.error('Newsletter submission error:', err);
      setError('Wystąpił błąd. Spróbuj ponownie.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div 
      className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <div 
        className="bg-gray-900 border-2 border-secondary rounded-2xl p-8 max-w-md w-full relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
          aria-label="Zamknij"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <h3 className="text-2xl font-bold text-secondary mb-2 text-center">
          🎁 Odbierz więcej stron za darmo!
        </h3>
        <p className="text-gray-300 mb-6 text-center">
          Zapisz się do newslettera i zobacz kolejne 5 stron e-booka
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-gray-300 mb-2">
              Imię i nazwisko *
            </label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-secondary focus:outline-none"
              placeholder="Jan Kowalski"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-300 mb-2">
              Numer telefonu *
            </label>
            <input
              type="tel"
              required
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-secondary focus:outline-none"
              placeholder="+48 123 456 789"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-300 mb-2">
              Adres e-mail *
            </label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-secondary focus:outline-none"
              placeholder="jan@example.com"
            />
          </div>

          <div className="flex items-start space-x-3">
            <input
              type="checkbox"
              id="rodo"
              checked={formData.rodo}
              onChange={(e) => setFormData({ ...formData, rodo: e.target.checked })}
              className="mt-1 w-5 h-5 rounded border-gray-700 bg-gray-800 text-secondary focus:ring-secondary"
            />
            <label htmlFor="rodo" className="text-sm text-gray-300">
              Zgadzam się na przetwarzanie moich danych osobowych zgodnie z RODO w celu otrzymania dostępu do dodatkowych stron e-booka i newslettera. *
            </label>
          </div>

          {error && (
            <div className="bg-red-900/30 border border-red-500 rounded-lg p-3 text-red-300 text-sm">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-secondary text-primary py-3 rounded-lg font-bold text-lg hover:bg-yellow-300 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'Wysyłanie...' : 'Odbierz dostęp'}
          </button>

          <p className="text-xs text-gray-400 text-center">
            Po zapisaniu się odblokujesz strony 6-10
          </p>
        </form>
      </div>
    </div>
  );
};

export default NewsletterForm;