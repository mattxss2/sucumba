import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import AnimatedPage from '../components/AnimatedPage';

const API_URL = 'http://localhost:8080';

// As suas variantes de animação (sem alterações)
const textContainerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const textItemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
};

function HomePage() {
  const { t } = useTranslation();

  // Estados para controlar o material aleatório e o carregamento
  const [randomMaterial, setRandomMaterial] = useState(null);
  const [loading, setLoading] = useState(true);

  // Efeito que busca os dados da API
  useEffect(() => {
    fetch(`${API_URL}/api/materiais`)
      .then(res => res.json())
      .then(data => {
        if (data && data.length > 0) {
          const randomIndex = Math.floor(Math.random() * data.length);
          setRandomMaterial(data[randomIndex]);
        }
        setLoading(false);
      })
      .catch(err => {
        console.error("Erro ao buscar material em destaque:", err);
        setLoading(false);
      });
  }, []);

  // Função para renderizar o conteúdo do "hero"
  const renderHeroContent = () => {
    if (loading) {
      return <div className="container hero-content"><p>Carregando Destaque...</p></div>;
    }
    
    // Fallback para o conteúdo estático se nenhum material for encontrado
    if (!randomMaterial || !randomMaterial.imagens || randomMaterial.imagens.length === 0) {
      return (
        <div className="container hero-content">
            <motion.div className="hero-text" initial="hidden" animate="visible" variants={textContainerVariants}>
                <motion.h1 variants={textItemVariants}>{t('home.heroTitle')}</motion.h1>
                <motion.p variants={textItemVariants}>{t('home.heroSubtitle')}</motion.p>
            </motion.div>
        </div>
      );
    }

    // Se tivermos um material, usamos seus dados dinâmicos
    const backgroundImageUrl = `${API_URL}${randomMaterial.imagens[0]}`;

    return (
      <>
        <div className="hero-background">
          <img src={backgroundImageUrl} alt={randomMaterial.nome} />
        </div>
        <div className="container hero-content">
          <motion.div 
            className="hero-text"
            variants={textContainerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* --- CORREÇÃO AQUI --- */}
            {/* Agora exibe o TIPO do material dinamicamente */}
            <motion.span className="stone-category" variants={textItemVariants}>
              {randomMaterial.tipo}
            </motion.span>
            
            {/* --- CORREÇÃO AQUI --- */}
            {/* Exibe o NOME do material dinamicamente */}
            <motion.h1 variants={textItemVariants}>
              {randomMaterial.nome}
            </motion.h1>

            <motion.p variants={textItemVariants}>{t('home.heroSubtitle')}</motion.p>
            <motion.div variants={textItemVariants}>
              <Link to="/collection" className="btn btn-primary">{t('home.ctaButton')}</Link>
            </motion.div>
          </motion.div>
        </div>
      </>
    );
  };

  return (
    <AnimatedPage>
      <main className="main-content">
        <section className="hero">
          {renderHeroContent()}
        </section>
        
        <section className="section">
          <div className="container">
            <h2 className="section-title">{t('home.sectionTitle')}</h2>
            <p className="section-subtitle">{t('home.sectionSubtitle')}</p>
            <Link to="/about" className="btn">{t('home.sectionButton')}</Link>
          </div>
        </section>
      </main>
    </AnimatedPage>
  );
}

export default HomePage;
