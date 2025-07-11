import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, User, FileText, FolderGit2, Mail, Globe, Menu, X, Brain } from 'lucide-react';
import { useLanguage } from '../Context/LanguageContext';
import { useNavigate, useLocation } from 'react-router-dom';

function NavBar() {
    const [isVisible, setIsVisible] = useState(false);
    const [activeSection, setActiveSection] = useState('hero');
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { language, setLanguage, t } = useLanguage();
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsVisible(window.scrollY > 0);

            const sections = ['hero', 'about', 'resume', 'skills', 'projects', 'contact'];
            const current = sections.find(section => {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    return rect.top <= 100 && rect.bottom >= 100;
                }
                return false;
            });
            if (current) setActiveSection(current);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { id: 'hero', Icon: Home, label: t('nav.home') },
        { id: 'about', Icon: User, label: t('nav.about') },
        { id: 'resume', Icon: FileText, label: t('nav.resume') },
        { id: 'skills', Icon: Brain, label: t('nav.skills') },
        { id: 'projects', Icon: FolderGit2, label: t('nav.projects') },
        { id: 'contact', Icon: Mail, label: t('nav.contact') }
    ];

    const languages = [
        { code: 'en', label: 'English' },
        { code: 'ar', label: 'العربية' }
    ];

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setIsMobileMenuOpen(false);
    };

    const toggleLanguage = () => {
        const currentIndex = languages.findIndex(lang => lang.code === language);
        const nextIndex = (currentIndex + 1) % languages.length;
        const newLang = languages[nextIndex].code;
        setLanguage(newLang as 'en' | 'ar');
        navigate(`/${newLang}`);
    };

    return (
        <>
            <AnimatePresence>
                {isVisible && (
                    <motion.nav
                        initial={{ y: -100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -100, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeOut' }}
                        className="fixed top-4 md:left-0 right-0 md:mx-auto me-6 w-fit z-50 bg-black/20 backdrop-blur-lg rounded-full border border-slate-500/10 shadow-lg shadow-slate-500/5"
                    >
                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center justify-center px-4 py-2">
                            <ul className="flex items-center gap-4">
                                {navItems.map(({ id, Icon, label }) => (
                                    <motion.li
                                        key={id}
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="flex items-center justify-center"
                                    >
                                        <button
                                            onClick={() => scrollToSection(id)}
                                            className={`relative group p-3 rounded-full transition-all duration-300 ${
                                                activeSection === id 
                                                    ? 'bg-slate-500 text-white shadow-lg shadow-slate-500/20' 
                                                    : 'text-white/60 hover:text-white hover:bg-slate-500/10'
                                            }`}
                                            aria-label={label}
                                        >
                                            <Icon size={20} strokeWidth={2} />
                                            <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-black/80 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                                                {label}
                                            </span>
                                        </button>
                                    </motion.li>
                                ))}
                                <motion.li
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="flex items-center justify-center"
                                >
                                    <button
                                        onClick={toggleLanguage}
                                        className="relative group p-3 rounded-full text-white/60 hover:text-white hover:bg-slate-500/10 transition-all duration-300"
                                        aria-label="Switch Language"
                                    >
                                        <Globe size={20} strokeWidth={2} />
                                        <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-black/80 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                                            {languages.find(lang => lang.code === language)?.label}
                                        </span>
                                    </button>
                                </motion.li>
                            </ul>
                        </div>

                        {/* Mobile Menu Button */}
                        <div className="md:hidden flex items-center justify-end px-2 py-2">
                            <button
                                onClick={() => setIsMobileMenuOpen(true)}
                                className="p-2 rounded-full text-white/60 hover:text-white hover:bg-slate-500/10 transition-all duration-300"
                                aria-label="Open Menu"
                            >
                                <Menu size={24} strokeWidth={2} />
                            </button>
                        </div>
                    </motion.nav>
                )}
            </AnimatePresence>

            {/* Mobile Sidebar */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="fixed inset-0 bg-black/20 backdrop-blur-lg z-50 md:hidden"
                            onClick={() => setIsMobileMenuOpen(false)}
                        />
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                            className="fixed top-0 right-0 h-full w-64 bg-black/20 backdrop-blur-lg border-l border-slate-500/10 z-50 md:hidden shadow-lg shadow-slate-500/5"
                        >
                            <div className="p-4 flex justify-between items-center border-b border-slate-500/10">
                                <h2 className="text-white font-medium">Menu</h2>
                                <button
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="p-2 rounded-full text-white/60 hover:text-white hover:bg-slate-500/10 transition-all duration-300"
                                    aria-label="Close Menu"
                                >
                                    <X size={24} strokeWidth={2} />
                                </button>
                            </div>
                            <ul className="flex flex-col gap-2 p-4">
                                {navItems.map(({ id, Icon, label }) => (
                                    <motion.li
                                        key={id}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <button
                                            onClick={() => scrollToSection(id)}
                                            className={`w-full flex items-center gap-3 p-3 rounded-lg transition-all duration-300 ${
                                                activeSection === id 
                                                    ? 'bg-slate-500 text-white shadow-lg shadow-slate-500/20' 
                                                    : 'text-white/60 hover:text-white hover:bg-slate-500/10'
                                            }`}
                                        >
                                            <Icon size={20} strokeWidth={2} />
                                            <span>{label}</span>
                                        </button>
                                    </motion.li>
                                ))}
                                <motion.li
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <button
                                        onClick={toggleLanguage}
                                        className="w-full flex items-center gap-3 p-3 rounded-lg text-white/60 hover:text-white hover:bg-slate-500/10 transition-all duration-300"
                                    >
                                        <Globe size={20} strokeWidth={2} />
                                        <span>{languages.find(lang => lang.code === language)?.label}</span>
                                    </button>
                                </motion.li>
                            </ul>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}

export default NavBar;

export { NavBar }