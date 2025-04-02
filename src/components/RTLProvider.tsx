import { useEffect } from 'react';
import { useLanguage } from '../Context/LanguageContext';

export function RTLProvider({ children }: { children: React.ReactNode }) {
    const { language } = useLanguage();

    useEffect(() => {
        // Update HTML dir attribute based on language
        document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
        document.documentElement.lang = language;

        // Update body class for RTL support
        document.body.classList.remove('rtl', 'ltr');
        document.body.classList.add(language === 'ar' ? 'rtl' : 'ltr');
    }, [language]);

    return <>{children}</>;
} 