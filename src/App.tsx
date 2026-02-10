import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import WhyThisEbook from './components/WhyThisEbook';
import EbookPreview from './components/EbookPreview';
import Benefits from './components/Benefits';
import About from './components/About';
import ForWhom from './components/ForWhom';
import Testimonials from './components/Testimonials';
import Authors from './components/Authors';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <WhyThisEbook />
        <EbookPreview />
        <Benefits />
        <About />
        <ForWhom />
        <Testimonials />
        <Authors />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
};

export default App;