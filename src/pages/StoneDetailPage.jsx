import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { stones } from '../data/stones';
import AnimatedPage from '../components/AnimatedPage';

function StoneDetailPage() {
  const { t } = useTranslation();
  const { stoneId } = useParams();
  const stone = stones.find(s => s.id === stoneId);

  if (!stone) {
    return <div>Material não encontrado.</div>;
  }

  return (
    <AnimatedPage>
      <main className="stone-detail">
        <section className="section">
          <div className="container">
            <div className="stone-detail-grid">
              <div className="stone-detail-image">
                <img src={stone.imageUrl} alt={stone.name} />
              </div>
              <div className="stone-detail-info">
                <span className="category">{stone.category}</span>
                <h1>{stone.name}</h1>
                <p>{stone.description}</p>
                <ul>
                  <li><strong>{t('stoneDetail.origin')}:</strong> {stone.origin}</li>
                  <li><strong>{t('stoneDetail.finishes')}:</strong> {stone.finishes}</li>
                </ul>
                <Link to="/contact" className="btn" style={{marginTop: '2rem'}}>{t('stoneDetail.ctaButton')}</Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </AnimatedPage>
  );
}

export default StoneDetailPage;