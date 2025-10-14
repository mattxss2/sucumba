import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-col">
            <h4>MINERAÇÃO COTO</h4>
            <p>{t('footer.companyInfo')}</p>
          </div>
          <div className="footer-col">
            <h4>{t('footer.navigation')}</h4>
            <ul>
              <li><Link to="/">{t('header.home')}</Link></li>
              <li><Link to="/about">{t('header.about')}</Link></li>
              <li><Link to="/collection">{t('header.collection')}</Link></li>
              <li><Link to="/showroom">{t('header.showroom')}</Link></li>
              <li><Link to="/contact">{t('header.contact')}</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>{t('header.contact')}</h4>
            <p>{t('header.email')}</p>
            <p>{t('header.phone')}</p>
            <p>{t('footer.address')}</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>{t('footer.copyright', { year: new Date().getFullYear() })}</p>
        </div>
      </div>
    </footer>
  );
}
export default Footer;