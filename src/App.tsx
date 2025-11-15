import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Header, Footer } from './components';
import { Home, PeakProjectPage } from './pages';

// Componente para scroll to top al cambiar de ruta
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      {/* Skip link para accesibilidad */}
      <a href="#main-content" className="skip-link">
        Saltar al contenido principal
      </a>
      
      <Header />
      
      <main 
        id="main-content" 
        className="min-h-screen bg-white text-black selection:bg-black selection:text-white scroll-smooth"
        role="main"
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/peak-project" element={<PeakProjectPage />} />
        </Routes>
      </main>
      
      <Footer />
    </Router>
  );
}

export default App;
