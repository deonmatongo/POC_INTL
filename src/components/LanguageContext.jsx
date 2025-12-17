import React, { createContext, useContext, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import '../i18n/config';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const { i18n, t } = useTranslation();

  const switchLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <LanguageContext.Provider value={{ language: i18n.language, switchLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}