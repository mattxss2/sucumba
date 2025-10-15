import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Componentes
import Header from './components/Header';

// Páginas
import HomePage from './pages/HomePage';
import CollectionPage from './pages/CollectionPage';
import AboutPage from './pages/AboutPage';
import ShowroomPage from './pages/ShowroomPage';
import ContactPage from './pages/ContactPage';
import AdminPage from './pages/AdminPage';

// --- ADIÇÃO NOVA ---
// Importamos o novo componente da página de detalhes do material.
import StoneDetailPage from './pages/StoneDetailPage';

function App() {
  const location = useLocation();

  return (
    <>
      {/* O Header continua aqui para aparecer em todas as páginas */}
      <Header />

      {/* O AnimatePresence continua gerenciando as animações de transição */}
      <AnimatePresence mode='wait'>
        <Routes location={location} key={location.pathname}>
          
          {/* Suas rotas existentes permanecem inalteradas */}
          <Route index element={<HomePage />} />
          <Route path='/collection' element={<CollectionPage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/showroom' element={<ShowroomPage />} />
          <Route path='/contact' element={<ContactPage />} />
          <Route path='/admin' element={<AdminPage />} />
          
          {/* --- ADIÇÃO NOVA --- */}
          {/* Esta é a nova rota para a página de detalhes. 
              O ':id' é um parâmetro dinâmico que pegará o ID do material. */}
          <Route path='/collection/:id' element={<StoneDetailPage />} />
          
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
