import React, { useState, useEffect } from 'react';
import AnimatedPage from '../components/AnimatedPage';
import StoneCard from '../components/StoneCard';

const API_URL = 'http://localhost:8080';

function CollectionPage() {
  // --- NOVOS ESTADOS PARA O FILTRO ---
  const [todosOsMateriais, setTodosOsMateriais] = useState([]); // Guarda a lista completa e original
  const [materiaisFiltrados, setMateriaisFiltrados] = useState([]); // Guarda a lista que será exibida
  const [filtroAtivo, setFiltroAtivo] = useState('Todos'); // Guarda o tipo de filtro selecionado
  
  const [loading, setLoading] = useState(true);

  // Busca os dados da API apenas uma vez, quando a página carrega
  useEffect(() => {
    fetch(`${API_URL}/api/materiais`)
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) {
          setTodosOsMateriais(data);
          setMateriaisFiltrados(data); // Inicialmente, mostra todos
        }
        setLoading(false);
      })
      .catch(err => {
        console.error("Erro ao buscar materiais:", err);
        setLoading(false);
      });
  }, []);

  // Função para lidar com a mudança de filtro
  const handleFilterChange = (tipo) => {
    setFiltroAtivo(tipo);
    if (tipo === 'Todos') {
      setMateriaisFiltrados(todosOsMateriais);
    } else {
      const filtrados = todosOsMateriais.filter(material => material.tipo === tipo);
      setMateriaisFiltrados(filtrados);
    }
  };

  if (loading) {
    return (
        <main className="main-content">
            <p style={{ textAlign: 'center' }}>Carregando materiais...</p>
        </main>
    );
  }

  return (
    <AnimatedPage>
      <main className="main-content">
        <h1>Nossa Coleção</h1>

        {/* --- BARRA DE FILTROS --- */}
        <div className="filter-bar">
          <button 
            onClick={() => handleFilterChange('Todos')}
            className={filtroAtivo === 'Todos' ? 'active' : ''}
          >
            Todos
          </button>
          <button 
            onClick={() => handleFilterChange('Quartzito')}
            className={filtroAtivo === 'Quartzito' ? 'active' : ''}
          >
            Quartzito
          </button>
          <button 
            onClick={() => handleFilterChange('Granito')}
            className={filtroAtivo === 'Granito' ? 'active' : ''}
          >
            Granito
          </button>
          <button 
            onClick={() => handleFilterChange('Mármore')}
            className={filtroAtivo === 'Mármore' ? 'active' : ''}
          >
            Mármore
          </button>
        </div>

        <div className="materials-gallery">
          {/* O map agora usa a lista de materiais filtrados */}
          {materiaisFiltrados.length > 0 ? (
            materiaisFiltrados.map(stone => (
              <StoneCard
                key={stone._id}
                id={stone._id}
                name={stone.nome}
                image={stone.imagens && stone.imagens.length > 0 
                  ? `${API_URL}${stone.imagens[0]}` 
                  : 'https://placehold.co/600x400?text=Imagem+Indisponível'
                }
              />
            ))
          ) : (
            <p>Nenhum material encontrado para este tipo.</p>
          )}
        </div>
      </main>
    </AnimatedPage>
  );
}

export default CollectionPage;

