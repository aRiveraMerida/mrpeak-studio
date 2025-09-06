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
    <main className="min-h-screen bg-white text-black selection:bg-black selection:text-white scroll-smooth">
      <Header />
      <Hero />
      <Services />
      <Process />
      <Results />
      <Cases />
      <Team />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
