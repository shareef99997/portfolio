import { createContext, useContext, useState, ReactNode } from 'react';
import { navbarTranslations } from '../translations/navbar';
import { heroTranslations } from '../translations/hero';
import { aboutTranslations } from '../translations/about';
import { resumeTranslations } from '../translations/resume';
import { skillsTranslations } from '../translations/skills';
import { projectsTranslations } from '../translations/projects';
import { contactTranslations } from '../translations/contact';

type Language = 'en' | 'ar';

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: (key: string) => string;
}

const translations = {
    en: {
        ...navbarTranslations.en,
        ...heroTranslations.en,
        ...aboutTranslations.en,
        ...resumeTranslations.en,
        ...skillsTranslations.en,
        ...projectsTranslations.en,
        ...contactTranslations.en,
    },
    ar: {
        ...navbarTranslations.ar,
        ...heroTranslations.ar,
        ...aboutTranslations.ar,
        ...resumeTranslations.ar,
        ...skillsTranslations.ar,
        ...projectsTranslations.ar,
        ...contactTranslations.ar,
    }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [language, setLanguage] = useState<Language>('en');

    const t = (key: string): string => {
        return translations[language][key as keyof typeof translations[typeof language]] || key;
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
} 