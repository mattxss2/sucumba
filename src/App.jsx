import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Componentes
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop'; // NOVO: Importa o componente

// Páginas
import HomePage from './pages/HomePage';
import CollectionPage from './pages/CollectionPage';
import StoneDetailPage from './pages/StoneDetailPage';
import AboutPage from './pages/AboutPage';
import ShowroomPage from './pages/ShowroomPage';
import ContactPage from './pages/ContactPage';

function App() {
  const location = useLocation();
  return (
    <>
      <ScrollToTop /> {/* NOVO: Garante a rolagem para o topo */}
      <Header />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<HomePage />} />
          <Route path="/collection" element={<CollectionPage />} />
          <Route path="/collection/:stoneId" element={<StoneDetailPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/showroom" element={<ShowroomPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </>
  );
}

export default App;