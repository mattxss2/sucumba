import React from 'react';
import AnimatedPage from '../components/AnimatedPage';
import { useTranslation } from 'react-i18next';

function ContactPage() {
  const { t } = useTranslation();
  
  return (
    <AnimatedPage>
      <main className="main-content">
        <section className="section">
          <div className="container">
            <h1>{t('contact.title')}</h1>
            <p>{t('contact.subtitle')}</p>
            {/* Adicione aqui o seu formulário de contato ou informações de contato detalhadas */}
          </div>
        </section>
      </main>
    </AnimatedPage>
  );
}

export default ContactPage;