import React, { useState, useEffect } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import NewsletterForm from './NewsletterForm';

// Configure PDF.js worker - using jsDelivr CDN for best reliability
pdfjs.GlobalWorkerOptions.workerSrc = `https://cdn.jsdelivr.net/npm/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

const EbookPreview: React.FC = () => {
  const numPages = 10; // Total pages to show
  const freePages = 5; // First 5 pages are free
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [error, setError] = useState<string | null>(null);
  const [unlocked, setUnlocked] = useState<boolean>(false);
  const [showNewsletter, setShowNewsletter] = useState<boolean>(false);

  // Check localStorage on mount
  useEffect(() => {
    const isUnlocked = localStorage.getItem('ebook_newsletter_subscribed') === 'true';
    setUnlocked(isUnlocked);
  }, []);

  // Desktop PDF viewer functions
  function onDocumentLoadSuccess(): void {
    setError(null);
  }

  function onDocumentLoadError(error: Error): void {
    console.error('Error loading PDF:', error);
    setError('Nie udało się załadować podglądu PDF. Spróbuj odświeżyć stronę.');
  }

  const goToPrevPage = () => {
    setPageNumber((prev) => Math.max(1, prev - 1));
  };

  const goToNextPage = () => {
    const maxPage = unlocked ? numPages : freePages;
    if (pageNumber < maxPage) {
      setPageNumber((prev) => prev + 1);
    } else if (pageNumber === freePages && !unlocked) {
      setShowNewsletter(true);
    }
  };

  const handleNewsletterSuccess = () => {
    setUnlocked(true);
    setShowNewsletter(false);
    setPageNumber(6); // Jump to page 6
  };

  return (
    <>
      {showNewsletter && (
        <NewsletterForm 
          onSuccess={handleNewsletterSuccess}
          onClose={() => setShowNewsletter(false)}
        />
      )}
      
      <section className="py-20 px-4 bg-black">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Zajrzyj <span className="text-gradient">do środka</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Zobacz pierwsze 10 stron e-booka zupełnie za darmo
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text content */}
            <div className="space-y-6 order-2 md:order-1">
              <h3 className="text-3xl font-bold text-secondary">
                Przekonaj się sam, jak praktyczny jest ten e-book
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <span className="text-secondary text-xl flex-shrink-0">✓</span>
                  <span className="text-gray-300">Prosty, przystępny język bez prawniczego żargonu</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-secondary text-xl flex-shrink-0">✓</span>
                  <span className="text-gray-300">Konkretne wskazówki, które możesz od razu zastosować</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-secondary text-xl flex-shrink-0">✓</span>
                  <span className="text-gray-300">Przejrzysta struktura i czytelna grafika</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-secondary text-xl flex-shrink-0">✓</span>
                  <span className="text-gray-300">Sprawdzona wiedza z realnych transakcji</span>
                </li>
              </ul>
              <div className="bg-secondary/10 border-l-4 border-secondary p-4 rounded-r-lg">
                <p className="text-gray-300">
                  <strong className="text-secondary">To tylko wstęp!</strong> Pełna wersja e-booka zawiera 66 stron praktycznej wiedzy, 
                  2 rozbudowane checklisty i bonusowy rozdział.
                </p>
              </div>
            </div>

            {/* PDF Viewer with smartphone mockup on desktop, simple viewer on mobile */}
            <div className="order-1 md:order-2">
              {/* Desktop view - Smartphone mockup */}
              <div className="hidden md:flex justify-center">
                <div className="smartphone-mockup">
                  <div className="smartphone-frame">
                    <div className="smartphone-notch"></div>
                    <div className="smartphone-screen">
                      <div className="pdf-container">
                        <Document
                          file="/E-BOOK-pages.pdf"
                          onLoadSuccess={onDocumentLoadSuccess}
                          onLoadError={onDocumentLoadError}
                          loading={
                            <div className="flex items-center justify-center h-full">
                              <div className="text-gray-400">Ładowanie...</div>
                            </div>
                          }
                          error={
                            <div className="flex items-center justify-center h-full p-4 text-center">
                              <div className="text-red-400">
                                {error || 'Błąd ładowania PDF'}
                                <div className="mt-2 text-sm">
                                  <a href="/E-BOOK-pages.pdf" target="_blank" rel="noopener noreferrer" className="text-secondary underline">
                                    Otwórz PDF w nowej karcie
                                  </a>
                                </div>
                              </div>
                            </div>
                          }
                        >
                          <Page
                            pageNumber={pageNumber}
                            width={296}
                            renderTextLayer={false}
                            renderAnnotationLayer={false}
                          />
                        </Document>
                      </div>
                    </div>
                    <div className="smartphone-home-indicator"></div>
                  </div>
                </div>
              </div>

              {/* Mobile view - Vertical scroll with pages */}
              <div className="md:hidden">
                <div className="bg-gray-900 border-2 border-secondary/30 rounded-xl p-4 overflow-hidden relative">
                  <div className="space-y-4 max-h-[600px] overflow-y-auto">
                    {Array.from({ length: unlocked ? numPages : freePages }, (_, i) => i + 1).map((page) => (
                      <div key={page} className="relative">
                        <img
                          src={`/ebook-pages/page-${String(page).padStart(2, '0')}.jpg`}
                          alt={`Strona ${page} z ${numPages}`}
                          className="w-full rounded-lg shadow-lg"
                          loading="lazy"
                        />
                        <div className="text-center text-gray-400 text-sm mt-2">
                          Strona {page} / {unlocked ? numPages : freePages}
                        </div>
                      </div>
                    ))}
                    
                    {/* Locked pages blur */}
                    {!unlocked && (
                      <div className="relative">
                        <div className="relative">
                          <img
                            src={`/ebook-pages/page-06.jpg`}
                            alt="Zablokowana strona"
                            className="w-full rounded-lg blur-md"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-black/60 flex items-center justify-center rounded-lg">
                            <button
                              onClick={() => setShowNewsletter(true)}
                              className="bg-secondary text-primary px-8 py-4 rounded-xl font-bold text-lg hover:bg-yellow-300 transition-all transform hover:scale-105"
                            >
                              🔓 Odblokuj kolejne 5 stron
                            </button>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Navigation controls - Desktop only */}
              {numPages > 0 && (
                <div className="mt-6 hidden md:flex items-center justify-center gap-4">
                  <button
                    onClick={goToPrevPage}
                    disabled={pageNumber <= 1}
                    className="bg-secondary text-primary p-3 rounded-lg font-bold hover:bg-yellow-300 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                    aria-label="Previous page"
                  >
                    ← Poprzednia
                  </button>
                  <div className="text-gray-300 font-semibold">
                    <span className="text-secondary text-xl">{pageNumber}</span> / {numPages}
                  </div>
                  <button
                    onClick={goToNextPage}
                    disabled={pageNumber >= numPages}
                    className="bg-secondary text-primary p-3 rounded-lg font-bold hover:bg-yellow-300 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                    aria-label="Next page"
                  >
                    Następna →
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
        </div>
      </section>
    </>
  );
};

export default EbookPreview;
