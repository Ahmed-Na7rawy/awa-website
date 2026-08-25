import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations } from '../locales/translations';

export type Language = 'en' | 'ar';
export type Direction = 'ltr' | 'rtl';

interface LanguageContextType {
  language: Language;
  dir: Direction;
  isRTL: boolean;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: (key: string, fallback?: string) => string;
  translations: typeof translations.en;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const STORAGE_KEY = 'awa_preferred_language';

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved === 'ar' || saved === 'en') {
        return saved;
      }
    } catch {
      // ignore
    }
    return 'en';
  });

  const dir: Direction = language === 'ar' ? 'rtl' : 'ltr';
  const isRTL = language === 'ar';

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      // ignore
    }
  };

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ar' : 'en');
  };

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = dir;
    if (language === 'ar') {
      document.body.classList.add('rtl-mode');
      document.title = 'مجموعة AWA | حلول الصناعات الغذائية، التوريد وسلاسل الإمداد المبردة';
    } else {
      document.body.classList.remove('rtl-mode');
      document.title = 'AWA Group | Food Solutions, Trading & Cold Chain Logistics';
    }
  }, [language, dir]);

  // Deep property resolver for translations
  const t = (path: string, fallback?: string): string => {
    const currentDict = translations[language] || translations.en;
    const keys = path.split('.');
    let result: any = currentDict;

    for (const key of keys) {
      if (result && typeof result === 'object' && key in result) {
        result = result[key];
      } else {
        // Fallback to English dictionary if key not found in Arabic
        let fallbackResult: any = translations.en;
        for (const fbKey of keys) {
          if (fallbackResult && typeof fallbackResult === 'object' && fbKey in fallbackResult) {
            fallbackResult = fallbackResult[fbKey];
          } else {
            return fallback || path;
          }
        }
        return typeof fallbackResult === 'string' ? fallbackResult : (fallback || path);
      }
    }

    return typeof result === 'string' ? result : (fallback || path);
  };

  const activeTranslations = translations[language] || translations.en;

  return (
    <LanguageContext.Provider
      value={{
        language,
        dir,
        isRTL,
        setLanguage,
        toggleLanguage,
        t,
        translations: activeTranslations,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
