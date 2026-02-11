import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';

// Configure PDF.js worker - using jsDelivr CDN for best reliability
pdfjs.GlobalWorkerOptions.workerSrc = `https://cdn.jsdelivr.net/npm/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

const EbookPreview: React.FC = () => {
  const numPages = 10; // Total pages to show
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [error, setError] = useState<string | null>(null);
  const [touchStart, setTouchStart] = useState<number>(0);
  const [touchEnd, setTouchEnd] = useState<number>(0);

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
    setPageNumber((prev) => Math.min(numPages, prev + 1));
  };

  // Touch handlers for mobile carousel
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe && pageNumber < numPages) {
      goToNextPage();
    }
    if (isRightSwipe && pageNumber > 1) {
      goToPrevPage();
    }

    setTouchStart(0);
    setTouchEnd(0);
  };

  return (
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

              {/* Mobile view - Image Carousel */}
              <div className="md:hidden">
                <div className="bg-gray-900 border-2 border-secondary/30 rounded-xl p-4 overflow-hidden">
                  <div
                    className="relative"
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                  >
                    <div className="relative aspect-[210/297] bg-white rounded-lg overflow-hidden">
                      <img
                        src={`/ebook-pages/page-${String(pageNumber).padStart(2, '0')}.jpg`}
                        alt={`Strona ${pageNumber} z ${numPages}`}
                        className="w-full h-full object-contain"
                        loading="lazy"
                      />
                    </div>
                    
                    {/* Swipe hint overlay on first page */}
                    {pageNumber === 1 && (
                      <div className="absolute inset-0 bg-black/50 flex items-center justify-center pointer-events-none">
                        <div className="text-white text-center p-4">
                          <div className="text-2xl mb-2">←  →</div>
                          <div className="text-sm">Przesuń palcem, aby zobaczyć więcej</div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Navigation controls */}
              {numPages > 0 && (
                <div className="mt-6 flex items-center justify-center gap-4">
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
  );
};

export default EbookPreview;