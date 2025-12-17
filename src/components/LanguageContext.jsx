import React, { createContext, useContext, useState } from 'react';

const translations = {
  en: {
    home: 'Home',
    expertise: 'Expertise',
    solutions: 'Solutions',
    about: 'About',
    contact: 'Contact',
    organizationalTransformation: 'Organizational Transformation',
    employeeEngagement: 'Employee Engagement',
    performanceOptimization: 'Performance Optimization',
    leadershipDevelopment: 'Leadership & Professional Development',
    customerExperience: 'Customer Experience',
    dataManagementInsights: 'Data Management & Insights',
    ourStory: 'Our Story',
    weHelpYou: 'We help you...',
    leadThroughChange: 'Lead Through Change',
    leadThroughChangeDesc: 'Unleashing potential in your teams and organization starts with you.',
    transformForGrowth: 'Transform for Growth',
    transformForGrowthDesc: "Potential can't be unleashed without the supporting structures, skillsets and culture.",
    findKeepTopTalent: 'Find and Keep Top Talent',
    findKeepTopTalentDesc: "You can hire people with high potential but unless they're engaged, you won't be able to maximize it.",
  },
  fr: {
    home: 'Accueil',
    expertise: 'Expertise',
    solutions: 'Solutions',
    about: 'À propos',
    contact: 'Contact',
    organizationalTransformation: 'Transformation Organisationnelle',
    employeeEngagement: 'Engagement des Employés',
    performanceOptimization: 'Optimisation de la Performance',
    leadershipDevelopment: 'Leadership & Développement Professionnel',
    customerExperience: 'Expérience Client',
    dataManagementInsights: 'Gestion des Données & Perspectives',
    ourStory: 'Notre Histoire',
    weHelpYou: 'Nous vous aidons...',
    leadThroughChange: 'Mener le Changement',
    leadThroughChangeDesc: 'Libérer le potentiel de vos équipes et de votre organisation commence avec vous.',
    transformForGrowth: 'Transformer pour Croître',
    transformForGrowthDesc: "Le potentiel ne peut être libéré sans les structures, compétences et culture appropriées.",
    findKeepTopTalent: 'Trouver et Retenir les Meilleurs Talents',
    findKeepTopTalentDesc: "Vous pouvez recruter des personnes à fort potentiel, mais sans engagement, vous ne pourrez pas le maximiser.",
  }
};

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('en');

  const t = (key) => {
    return translations[language][key] || key;
  };

  const switchLanguage = (lang) => {
    setLanguage(lang);
  };

  return (
    <LanguageContext.Provider value={{ language, switchLanguage, t }}>
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