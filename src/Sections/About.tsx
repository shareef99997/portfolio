import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ArrowRight, User, Database, BarChart as ChartBar, Target, Rocket, MapPin, Calendar, Code } from "lucide-react";
import { PrimaryButton } from "../components/buttons";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaEnvelope } from "react-icons/fa";
import SectionHeader from "../components/SectionHeader";
import personal_image from "../Assets/Images/personal image2.jpg"
import sudanFlag from "../Assets/Icons/sudan-flag-icon.svg"
import saudiFlag from "../Assets/Icons/saudi-arabia-flag-icon.svg"
import { useProjectsData } from "../Data/ProjectsData";
import { socialLinks } from "../Data/SocialLinksData";
import { useCertificationsData } from "../Data/CertificationsData";
import { useLanguage } from "../Context/LanguageContext";
function About() {
    const [ref, inView] = useInView({
        threshold: 0.1,
        triggerOnce: true,
    });

    const calculateAge = () => {
        const birthDate = new Date(2000, 7, 21); // Month is 0-based, so 7 = August
        const today = new Date();
        let age = today.getFullYear() - birthDate.getFullYear();
        const monthDiff = today.getMonth() - birthDate.getMonth();
        
        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        
        return age;
    };

    const fadeInUp = {
        hidden: { opacity: 0, y: 20 },
        visible: (delay: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: [0.6, 0.05, 0.01, 0.9],
                delay: delay || 0
            }
        })
    };

    const { t, language } = useLanguage();
    const projectsData = useProjectsData();
    const certificationsData = useCertificationsData();

    return (
        <section id="about" className="relative py-20 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-slate-500/5 to-transparent" />
            
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <SectionHeader 
                        title={t('about.title')} 
                        icon={User}
                        className="mx-auto mb-4"
                    />
                    <h2 className="text-3xl sm:text-4xl font-bold text-white">
                        {t('about.subtitle')}
                    </h2>
                </motion.div>

                {/* Main Content */}
                <div className="space-y-12">
                    {/* Top Section - Image and Introduction */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                        {/* Left Column - Image */}
                        <motion.div
                            variants={fadeInUp}
                            custom={0.2}
                            initial="hidden"
                            animate={inView ? "visible" : "hidden"}
                        >
                            <div className="relative w-[50%] max-w-md mx-auto rounded-2xl overflow-hidden group">
                                <div className="absolute inset-0 bg-gradient-to-br from-slate-500/20 to-transparent z-10" />
                                <img 
                                    src={personal_image}
                                    alt="Shareef Huzaifa"
                                    className="w-full h-full object-cover grayscale transform group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute -top-4 -right-4 w-16 h-16 bg-slate-500/10 rounded-full blur-xl" />
                                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-slate-500/10 rounded-full blur-xl" />
                            </div>
                        </motion.div>

                        {/* Right Column - Introduction */}
                        <motion.div
                            variants={fadeInUp}
                            custom={0.4}
                            initial="hidden"
                            animate={inView ? "visible" : "hidden"}
                            className="flex flex-col justify-center"
                        >
                            <p className="text-gray-300 leading-relaxed sm:text-lg text-md">
                                {t('about.intro')}
                                <span className="flex items-center gap-2 mt-2 text-slate-300">
                                    <MapPin className="w-4 h-4" />
                                    {t('about.locationValue')} <img src={saudiFlag} alt="Saudi Arabia Flag" className="w-4 h-4 inline-block" />
                                </span>
                            </p>
                        </motion.div>
                    </div>

                    {/* Middle Section - Info Cards and Expertise Areas */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Left Column - Personal Info Cards */}
                        <motion.div
                            variants={fadeInUp}
                            custom={0.3}
                            initial="hidden"
                            animate={inView ? "visible" : "hidden"}
                            className="space-y-6"
                        >
                            {/* Age and Nationality Cards */}
                            <div className="grid grid-cols-2 gap-1 sm:gap-4">
                                {[
                                    { 
                                        icon: <Calendar className="w-5 h-5 text-slate-400" />,
                                        title: t('about.age'),
                                        value: `${calculateAge()} ${language === 'ar' ? 'سنة' : 'years'}`,
                                        emoji: ""
                                    },
                                    { 
                                        icon: <User className="w-5 h-5 text-slate-400" />,
                                        title: t('about.nationality'),
                                        value: t('about.nationalityValue'),
                                        emoji: <img src={sudanFlag} alt="Sudan Flag" className="w-4 h-4 inline-block" />
                                    },
                                ].map((info, index) => (
                                    <motion.div
                                        key={index}
                                        variants={fadeInUp}
                                        custom={0.3 + index * 0.1}
                                        initial="hidden"
                                        animate={inView ? "visible" : "hidden"}
                                        className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-slate-500/10 hover:border-slate-500/20 transition-colors duration-300"
                                    >
                                        <div className="flex items-center gap-3 mb-2">
                                            {info.icon}
                                            <h3 className="text-white font-medium">{info.title}</h3>
                                        </div>
                                        <div className="text-white font-medium flex items-center gap-2">
                                            {info.value}
                                            {info.emoji}
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Quick Stats */}
                            <div className="grid grid-cols-3 gap-1 sm:gap-4">
                                {[
                                    { label: t('about.experience'), value: `${new Date().getFullYear() - 2023}+ ${language === 'ar' ? 'سنة' : 'years'}` },
                                    { label: t('about.projects'), value: `${projectsData.projects.length}+` },
                                    { label: t('about.certifications'), value: `${certificationsData.length}+` }
                                ].map((stat, index) => (
                                    // 
                                    <motion.div
                                        key={index}
                                        variants={fadeInUp}
                                        custom={0.4 + index * 0.1}
                                        initial="hidden"
                                        animate={inView ? "visible" : "hidden"}
                                        className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-slate-500/10 hover:border-slate-500/20 transition-colors duration-300 text-center"
                                    >
                                        <div className="text-slate-400 text-sm mb-1">{stat.label}</div>
                                        <div className="text-white font-medium">{stat.value}</div>
                                    </motion.div>
                                ))}
                            </div>
                            
                            {/*Desktop - Social Links and CTA */}
                            <div className="hidden lg:flex flex-col lg:flex-row items-center justify-between gap-8 ">
                                {/* Social Links */}
                                <div className="space-y-4">
                                    <div className="flex flex-wrap gap-6 justify-center lg:justify-start">
                                        {[
                                            { icon: <FaGithub size={24} />, href: "https://github.com/shareef99997", label: "GitHub" },
                                            { icon: <FaLinkedin size={24} />, href: "https://linkedin.com/in/shareef-ali", label: "LinkedIn" },
                                            { icon: <FaTwitter size={24} />, href: "https://x.com/SHIFO_99997", label: "Twitter" },
                                            { icon: <FaInstagram size={24} />, href: "https://www.instagram.com/shareef_zz/", label: "Instagram" },
                                            { icon: <FaEnvelope size={24} />, href: "mailto:Shareef.99997@gmail.com", label: "Email" }
                                        ].map((social, index) => (
                                            <motion.a
                                                key={index}
                                                whileHover={{ 
                                                    scale: 1.15,
                                                    color: "#a855f7",
                                                    transition: { duration: 0.2 }
                                                }}
                                                href={social.href}
                                                target="_blank" 
                                                rel="noopener noreferrer"
                                                className="group relative text-white/60 transition-colors duration-300 hover:drop-shadow-lg hover:drop-shadow-slate-500/20"
                                            >
                                                {social.icon}
                                                <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-black/80 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                                                    {social.label}
                                                </span>
                                            </motion.a>
                                        ))}
                                    </div>
                                </div>

                                {/* CTA Button */}
                                <div>
                                    <a href="#contact">
                                        <PrimaryButton>
                                            <div className="flex  items-center gap-2">
                                                {t('about.getInTouch')}
                                                <ArrowRight className={`${language === 'ar' ? 'rotate-180' : ''} w-5 h-5`} />
                                            </div>
                                        </PrimaryButton>
                                    </a>
                                </div>
                            </div>
                        </motion.div>

                        {/* Right Column - Expertise Areas */}
                        <motion.div
                            variants={fadeInUp}
                            custom={0.4}
                            initial="hidden"
                            animate={inView ? "visible" : "hidden"}
                        >
                            <div className="grid h-full grid-cols-1 sm:grid-cols-2 gap-4">
                                {[
                                    { 
                                        icon: <Database className="w-5 h-5 text-slate-400" />,
                                        title: t('about.expertise.dataAnalysis'),
                                        description: t('about.expertise.dataAnalysisDesc')
                                    },
                                    { 
                                        icon: <ChartBar className="w-5 h-5 text-slate-400" />,
                                        title: t('about.expertise.businessIntelligence'),
                                        description: t('about.expertise.businessIntelligenceDesc')
                                    },
                                    { 
                                        icon: <Code className="w-5 h-5 text-slate-400" />,
                                        title: t('about.expertise.softwareDevelopment'),
                                        description: t('about.expertise.softwareDevelopmentDesc')
                                    },
                                    { 
                                        icon: <Rocket className="w-5 h-5 text-slate-400" />,
                                        title: t('about.expertise.careerGoals'),
                                        description: t('about.expertise.careerGoalsDesc')
                                    }
                                ].map((area, index) => (
                                    <motion.div
                                        key={index}
                                        variants={fadeInUp}
                                        custom={0.5 + index * 0.1}
                                        initial="hidden"
                                        animate={inView ? "visible" : "hidden"}
                                        className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-slate-500/10 hover:border-slate-500/20 transition-colors duration-300"
                                    >
                                        <div className="flex items-center gap-3 mb-2">
                                            {area.icon}
                                            <h3 className="text-white font-medium">{area.title}</h3>
                                        </div>
                                        <p className="text-gray-400 text-sm">{area.description}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    {/*Mobile - Social Links and CTA */}
                    <div className="flex lg:hidden flex-col items-center space-y-8 mt-12">
                        {/* Social Links */}
                        <div className="w-full">
                            <div className="flex flex-wrap gap-6 justify-center">
                                {socialLinks.map((social, index) => (
                                    <motion.a
                                        key={index}
                                        whileHover={{ 
                                            scale: 1.15,
                                            color: "#a855f7",
                                            transition: { duration: 0.2 }
                                        }}
                                        href={social.href}
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="group relative text-white/60 transition-colors duration-300 hover:drop-shadow-lg hover:drop-shadow-slate-500/20"
                                    >
                                        {social.icon}
                                        <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-black/80 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                                            {social.label}
                                        </span>
                                    </motion.a>
                                ))}
                            </div>
                        </div>

                        {/* CTA Button */}
                        <div>
                            <a href="#contact">
                                <PrimaryButton>
                                    <div className="flex items-center gap-2">
                                        {t('about.getInTouch')}
                                        <ArrowRight className={`${language === 'ar' ? 'rotate-180' : ''} w-5 h-5`} />
                                    </div>
                                </PrimaryButton>
                            </a>
                        </div>
                    </div>
                    
                </div>
            </div>
            
        </section>
    );
}

export default About;