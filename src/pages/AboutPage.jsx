import React from 'react';
import AnimatedPage from '../components/AnimatedPage';
import { useTranslation } from 'react-i18next';

function AboutPage() {
  const { t } = useTranslation();

  return (
    <AnimatedPage>
      <main className="main-content">
        <section className="section">
          <div className="container">
            <h1>{t('about.title')}</h1>
            <p>{t('about.paragraph1')}</p>
            <p>{t('about.paragraph2')}</p>
          </div>
        </section>
      </main>
    </AnimatedPage>
  );
}

export default AboutPage;