import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { stones } from '../data/stones';
import AnimatedPage from '../components/AnimatedPage';

const StoneCard = ({ stone }) => (
  <motion.div 
    className="gallery-item"
    layout
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.5 }}
    whileHover={{ scale: 1.03 }}
  >
    <Link to={`/collection/${stone.id}`}>
      <div className="gallery-image-wrapper">
        <img src={stone.imageUrl} alt={stone.name} />
      </div>
      <div className="gallery-caption">{stone.name}</div>
    </Link>
  </motion.div>
);

function CollectionPage() {
  const { t } = useTranslation();
  const [filter, setFilter] = useState('All');
  const filteredStones = filter === 'All' ? stones : stones.filter(s => s.category === filter);

  return (
    <AnimatedPage>
      <main>
        <section className="section page-title-section">
          <div className="container"><h1>{t('collection.title')}</h1></div>
        </section>
        <section className="section">
          <div className="container">
            <div className="collection-filters">
              <button onClick={() => setFilter('All')} className={filter === 'All' ? 'active' : ''}>{t('collection.filterAll')}</button>
              <button onClick={() => setFilter('Granito')} className={filter === 'Granito' ? 'active' : ''}>{t('collection.filterGranite')}</button>
              <button onClick={() => setFilter('Quartzito')} className={filter === 'Quartzito' ? 'active' : ''}>{t('collection.filterQuartzite')}</button>
            </div>
            <motion.div layout className="gallery">
                {filteredStones.map(stone => <StoneCard key={stone.id} stone={stone} />)}
            </motion.div>
          </div>
        </section>
      </main>
    </AnimatedPage>
  );
}

export default CollectionPage;