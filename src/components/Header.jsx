import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LanguageSelector from './LanguageSelector';

function Header() {
  const { t } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle('mobile-nav-open', isMobileMenuOpen);
  }, [isMobileMenuOpen]);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header id="header" className={isScrolled ? 'scrolled' : ''}>
      <div className="pre-header">
        <div className="container">
          <span>{t('header.email')}</span>
          <span>{t('header.phone')}</span>
          <LanguageSelector />
        </div>
      </div>
      <div className="main-header">
        <div className="container">
          <NavLink to="/" className="logo" onClick={closeMenu}>MINERAÇÃO COTO</NavLink>
          <nav className="main-nav">
            <ul>
              <li><NavLink to="/" onClick={closeMenu}>{t('header.home')}</NavLink></li>
              <li><NavLink to="/about" onClick={closeMenu}>{t('header.about')}</NavLink></li>
              <li><NavLink to="/collection" onClick={closeMenu}>{t('header.collection')}</NavLink></li>
              <li><NavLink to="/showroom" onClick={closeMenu}>{t('header.showroom')}</NavLink></li>
              <li><NavLink to="/contact" onClick={closeMenu}>{t('header.contact')}</NavLink></li>
            </ul>
          </nav>
          <button 
            className="mobile-nav-toggle" 
            aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={isMobileMenuOpen}
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span></span><span></span><span></span>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;