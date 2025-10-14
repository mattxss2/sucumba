import { useTranslation } from 'react-i18next';

const languages = [
  { code: 'pt', lang: 'PT' },
  { code: 'en', lang: 'EN' },
  { code: 'es', lang: 'ES' },
  { code: 'it', lang: 'IT' },
  { code: 'zh', lang: '中文' },
];

function LanguageSelector() {
  const { i18n } = useTranslation();

  const changeLanguage = (lngCode) => {
    i18n.changeLanguage(lngCode);
  };

  // Pega o idioma atual. Pode ser 'pt-BR', 'en-US', etc.
  // Usamos a primeira parte ('pt', 'en') para a comparação.
  const currentLanguage = i18n.language.split('-')[0];

  return (
    <div className="language-selector">
      {languages.map((lng) => (
        <button
          key={lng.code}
          className={currentLanguage === lng.code ? 'active' : ''}
          onClick={() => changeLanguage(lng.code)}
        >
          {lng.lang}
        </button>
      ))}
    </div>
  );
}

export default LanguageSelector;