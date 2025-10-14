import AnimatedPage from '../components/AnimatedPage';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function ShowroomPage() {
    const { t } = useTranslation();
    return (
        <AnimatedPage>
            <main>
                <section className="section page-title-section">
                    <div className="container">
                        <h1>{t('showroom.title')}</h1>
                        <p className="section-subtitle" style={{textAlign: 'left', margin: '1rem 0 0 0'}}>{t('showroom.subtitle')}</p>
                    </div>
                </section>
                <section className="section" style={{paddingTop: 0}}>
                    <div className="container">
                        <img src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1916&auto-format&fit=crop" alt="Showroom da Mineração Coto" style={{width:'100%', marginBottom: '4rem'}} />
                        <div className="showroom-details">
                            <div className="showroom-info">
                                <h3>{t('showroom.ctaTitle')}</h3>
                                <p>{t('showroom.ctaSubtitle')}</p>
                                <ul>
                                    <li><strong>{t('showroom.addressLabel')}:</strong> PB-221, Rod. Gov. Antonio Mariz, Santa Luzia - PB, 58600-000</li>
                                    <li><strong>{t('showroom.hoursLabel')}:</strong> {t('showroom.hoursValue')}</li>
                                    <li><strong>{t('showroom.phoneLabel')}:</strong> +55 83 99927-9822</li>
                                </ul>
                                <Link to="/contact" className="btn" style={{marginTop: '1rem'}}>{t('showroom.ctaButton')}</Link>
                            </div>
                            <div className="showroom-map">
                                <iframe 
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3962.336143936941!2d-36.92488818882069!3d-6.729118093153303!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7a89c922a90967b%3A0x6b4324f11e1f13b1!2sPB-221%2C%20Santa%20Luzia%20-%20PB%2C%2058600-000!5e0!3m2!1spt-BR!2sbr!4v1728104152778!5m2!1spt-BR!2sbr" 
                                    width="100%" 
                                    height="350" 
                                    style={{border:0}} 
                                    allowFullScreen="" 
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade">
                                </iframe>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </AnimatedPage>
    );
}

export default ShowroomPage;