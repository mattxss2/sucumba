import AnimatedPage from '../components/AnimatedPage';
import { useTranslation } from 'react-i18next';

function AboutPage() {
    const { t } = useTranslation();
    return (
        <AnimatedPage>
            <main>
                <section className="section page-title-section">
                    <div className="container">
                        <h1>{t('about.title')}</h1>
                        <p className="section-subtitle" style={{textAlign: 'left', margin: '1rem 0 0 0'}}>{t('about.subtitle')}</p>
                    </div>
                </section>
                <section className="section" style={{paddingTop: 0}}>
                    <div className="container" style={{maxWidth: '800px', textAlign: 'center'}}>
                        <p>{t('about.paragraph1')}</p>
                        <p style={{marginTop: '1rem'}}>{t('about.paragraph2')}</p>
                    </div>
                </section>
            </main>
        </AnimatedPage>
    );
}

export default AboutPage;