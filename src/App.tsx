import Sections from './Sections';
import { BrowserRouter as Router, Route, Routes, Navigate, useParams } from 'react-router-dom';
import { LanguageProvider, useLanguage } from './Context/LanguageContext';
import { RTLProvider } from './Components/RTLProvider';

function LanguageRoute() {
    const { lang } = useParams();
    const { setLanguage } = useLanguage();

    // Set language based on URL parameter
    if (lang === 'ar' || lang === 'en') {
        setLanguage(lang as 'ar' | 'en');
    }

    return <Sections />;
}

function App() {
    return (
        <LanguageProvider>
            <RTLProvider>
                <Router future={{ v7_startTransition: true }}>
                    <Routes>
                        <Route path="/" element={<Navigate to="/en" replace />} />
                        <Route path="/:lang" element={<LanguageRoute />} />
                    </Routes>
                </Router>
            </RTLProvider>
        </LanguageProvider>
    );
}

export default App;