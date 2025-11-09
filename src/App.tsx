import { 
  Header, 
  Hero, 
  Services, 
  Process, 
  Results, 
  Cases, 
  Team,
  Contact, 
  Footer 
} from './components';

function App() {
  return (
    <>
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
        <Hero />
        <Services />
        <Process />
        <Results />
        <Cases />
        <Team />
        <Contact />
      </main>
      
      <Footer />
    </>
  );
}

export default App;
