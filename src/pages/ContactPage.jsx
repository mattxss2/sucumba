import AnimatedPage from '../components/AnimatedPage';
import { useTranslation } from 'react-i18next';

function ContactPage() {
    const { t } = useTranslation();
    return (
        <AnimatedPage>
            <main>
                <section className="section page-title-section">
                    <div className="container">
                        <h1>{t('contact.title')}</h1>
                        <p className="section-subtitle" style={{textAlign: 'left', margin: '1rem 0 0 0'}}>{t('contact.subtitle')}</p>
                    </div>
                </section>
                <section className="section" style={{paddingTop: 0}}>
                    <div className="container" style={{maxWidth: '800px', textAlign: 'center'}}>
                        <p>{t('contact.mainText')}</p>
                        <h3 style={{color: 'var(--color-dark)', margin: '2rem 0 1rem 0'}}>{t('header.email')}</h3>
                        <h3 style={{color: 'var(--color-dark)'}}>{t('header.phone')}</h3>
                    </div>
                </section>
            </main>
        </AnimatedPage>
    );
}

export default ContactPage;