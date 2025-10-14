import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import AnimatedPage from '../components/AnimatedPage';

const textContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const textItemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

function HomePage() {
  const { t } = useTranslation();

  return (
    <AnimatedPage>
      <main>
        <section className="hero">
          <div className="hero-background">
            <img src="https://images.unsplash.com/photo-1599387737243-e27b2a4c4e51?q=80&w=2070&auto-format&fit=crop" alt="Pedra Titanium Gold" />
          </div>
          <div className="container hero-content">
            <motion.div 
              className="hero-text"
              variants={textContainerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.span className="stone-category" variants={textItemVariants}>{t('home.heroCategory')}</motion.span>
              <motion.h1 variants={textItemVariants}>{t('home.heroTitle')}</motion.h1>
              <motion.p variants={textItemVariants}>{t('home.heroSubtitle')}</motion.p>
              <motion.div variants={textItemVariants}>
                <Link to="/collection" className="btn btn-primary">{t('home.ctaButton')}</Link>
              </motion.div>
            </motion.div>
          </div>
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