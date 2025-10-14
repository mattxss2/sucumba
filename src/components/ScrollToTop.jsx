import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Este componente garante que a página role para o topo a cada nova navegação.
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]); // O efeito é re-executado toda vez que o 'pathname' (URL) muda

  return null; // Este componente não renderiza nada na tela
}

export default ScrollToTop;