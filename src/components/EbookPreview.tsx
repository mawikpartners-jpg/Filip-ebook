import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';

// Configure PDF.js worker
pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.mjs`;

const EbookPreview: React.FC = () => {
  const [numPages, setNumPages] = useState<number>(0);
  const [pageNumber, setPageNumber] = useState<number>(1);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
    setNumPages(Math.min(numPages, 10)); // Show max 10 pages
  }

  const goToPrevPage = () => {
    setPageNumber((prev) => Math.max(1, prev - 1));
  };

  const goToNextPage = () => {
    setPageNumber((prev) => Math.min(numPages, prev + 1));
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
                          loading={
                            <div className="flex items-center justify-center h-full">
                              <div className="text-gray-400">Ładowanie...</div>
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

              {/* Mobile view - Simple card with PDF */}
              <div className="md:hidden">
                <div className="bg-gray-900 border-2 border-secondary/30 rounded-xl p-4">
                  <div className="pdf-container-mobile">
                    <Document
                      file="/E-BOOK-pages.pdf"
                      onLoadSuccess={onDocumentLoadSuccess}
                      loading={
                        <div className="flex items-center justify-center h-64">
                          <div className="text-gray-400">Ładowanie...</div>
                        </div>
                      }
                    >
                      <Page
                        pageNumber={pageNumber}
                        width={Math.min(window.innerWidth - 80, 400)}
                        renderTextLayer={false}
                        renderAnnotationLayer={false}
                      />
                    </Document>
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