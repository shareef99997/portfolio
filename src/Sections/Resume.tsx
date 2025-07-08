import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FileText, Briefcase, GraduationCap, Trophy, Calendar, Building, ArrowUpRight, Clock, Code } from "lucide-react";
import SectionHeader from "../components/SectionHeader";
import { useResumeData } from "../Data/ResumeData";
import { useCertificationsData } from "../Data/CertificationsData";
import { useLanguage } from "../Context/LanguageContext";
import { FaHashtag } from "react-icons/fa";
import "../index.css";
function Resume() {
    const [ref, inView] = useInView({
        threshold: 0.1,
        triggerOnce: true,
    });

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
    const { workExperience, education, courses } = useResumeData();
    const certifications = useCertificationsData();
    return (
        <section id="resume" className="relative py-20 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 to-transparent" />
            
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
                        title={t('resume.title')} 
                        icon={FileText}
                        className="mx-auto mb-4"
                    />
                    <h2 className="text-3xl sm:text-4xl font-bold text-white">
                        {t('resume.title')}
                    </h2>
                </motion.div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Left Column - Experience */}
                    <motion.div
                        variants={fadeInUp}
                        custom={0.3}
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                        className="space-y-12"
                    >
                        {/* Work Experience */}
                        <div className="space-y-6">
                            <div className="flex items-center gap-3 mb-6">
                                <Briefcase className="w-6 h-6 text-purple-400" />
                                <h3 className="text-2xl font-bold text-white">{t('resume.workExperience')}</h3>
                            </div>
                            <div className="space-y-8">
                                {workExperience.map((job, index) => (
                                    <motion.div
                                        key={index}
                                        variants={fadeInUp}
                                        custom={0.4 + index * 0.1}
                                        className="relative pl-12"
                                    >
                                        {/* Timeline line with gradient and glow */}
                                        <div className="absolute left-5 top-0 bottom-0 w-[2px] bg-gradient-to-b from-purple-500 via-purple-500/50 to-purple-500/20 animate-pulse" />
                                        
                                        {/* Timeline dot with glow */}
                                        <div className="absolute left-[18px] top-1/2 -translate-y-1/2">
                                            <div className="w-4 h-4 bg-purple-500 rounded-full transform -translate-x-1/2 
                                                          ring-2 ring-purple-500 ring-offset-2 ring-offset-black
                                                          shadow-[0_0_10px_theme(colors.purple.500)]" />
                                            {/* Connected line to card */}
                                            <div className="absolute top-1/2 left-1/2 h-[2px] w-6 
                                                          bg-gradient-to-r from-purple-500 to-purple-500/20
                                                          transform -translate-y-1/2" />
                                        </div>
                                        
                                        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-purple-500/10 
                                                    hover:border-purple-500/20 transition-all duration-300 ">
                                            <div className="flex items-start gap-4">
                                                {job.companyLogo && (
                                                    <div className="sm:w-12 sm:h-12 w-10 h-10 rounded-lg overflow-hidden flex-shrink-0 
                                                                bg-white/5 border border-purple-500/10">
                                                        <motion.img
                                                            src={job.companyLogo}
                                                            alt={job.company}
                                                            className="w-full h-full object-contain p-2"
                                                            initial={{ opacity: 0 }}
                                                            animate={{ opacity: 1 }}
                                                            transition={{ duration: 0.3 }}
                                                        />
                                                    </div>
                                                )}
                                                <div className="flex-1">
                                                    <div className="flex items-center gap-2 text-purple-400 text-sm mb-2">
                                                        <Calendar className="w-4 h-4" />
                                                        <span>{job.period}</span>
                                                    </div>
                                                    <h4 className="text-xl font-bold text-white mb-1">{job.title}</h4>
                                                    <div className="flex items-center gap-2 text-gray-400 mb-4">
                                                        <Building className="w-4 h-4" />
                                                        <span>{job.company}</span>
                                                    </div>
                                                    <p className="text-gray-300 mb-4">{job.description}</p>
                                                    <ul className="space-y-2">
                                                        {job.highlights.map((highlight, idx) => (
                                                            <li key={idx} className="flex items-start gap-2 text-gray-300">
                                                                <span className="mt-1.5 w-2 h-2 bg-purple-500 rounded-full" />
                                                                {highlight}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column - Education & Courses */}
                    <motion.div
                        variants={fadeInUp}
                        custom={0.4}
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                        className="space-y-6 h-full"
                    >
                        {/* Education Section */}
                        <div className="space-y-6">
                            <div className="flex items-center gap-3 mb-6">
                                <GraduationCap className="w-6 h-6 text-purple-400" />
                                <h3 className="text-2xl font-bold text-white">{t('resume.education')}</h3>
                            </div>
                            <div className="space-y-8">
                                {education.map((edu, index) => (
                                    <motion.div
                                        key={index}
                                        variants={fadeInUp}
                                        custom={0.6 + index * 0.1}
                                        className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-purple-500/10 white-space-nowrap
                                                hover:border-purple-500/20 transition-all duration-300"
                                    >
                                        <div className="flex items-start gap-4">
                                            {edu.institutionLogo && (
                                                <div className="sm:w-12 sm:h-12 w-10 h-10 rounded-lg overflow-hidden flex-shrink-0 
                                                            bg-white/5 border border-purple-500/10">
                                                    <motion.img
                                                        src={edu.institutionLogo}
                                                        alt={edu.institution}
                                                        className="w-full h-full object-contain p-2"
                                                        initial={{ opacity: 0 }}
                                                        animate={{ opacity: 1 }}
                                                        transition={{ duration: 0.3 }}
                                                    />
                                                </div>
                                            )}
                                            <div className="flex-1">
                                                <div className="flex items-center gap-2 text-purple-400 text-sm mb-2">
                                                    <Calendar className="w-4 h-4" />
                                                    <span>{edu.period}</span>
                                                </div>
                                                <h4 className="text-xl font-bold text-white mb-1">{edu.degree}</h4>
                                                <div className="flex items-center gap-2 text-gray-400 mb-4">
                                                    <Building className="w-4 h-4" />
                                                    <span>{edu.institution}</span>
                                                </div>
                                                <p className="text-gray-300">{edu.description}</p>
                                                {(edu.credentialUrl || edu.credentialFile) && (
                                                    <div className="flex items-center justify-end gap-3 mt-4">
                                                        <motion.a
                                                            href={edu.credentialUrl || edu.credentialFile}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="inline-flex items-center gap-2 px-4 py-2 
                                                                    bg-purple-500/10 rounded-full text-purple-400 sm:text-sm text-[8px] white-space-nowrap
                                                                    hover:bg-purple-500/20 transition-colors duration-300"
                                                            whileHover={{ scale: 1.05 }}
                                                        >
                                                            <Trophy className="sm:w-4 sm:h-4 w-3 h-3" />
                                                            {t('resume.viewCredential')}
                                                            <ArrowUpRight className="w-4 h-4" />
                                                        </motion.a>
                                                        {edu.credentialFile && (
                                                            <motion.a
                                                                href={edu.credentialFile}
                                                                download
                                                                className="inline-flex items-center gap-2 px-4 py-2 
                                                                        bg-purple-500/10 rounded-full text-purple-400 sm:text-sm text-[8px] white-space-nowrap
                                                                        hover:bg-purple-500/20 transition-all duration-300"
                                                                whileHover={{ scale: 1.05 }}
                                                            >
                                                                <FileText className="sm:w-4 sm:h-4 w-3 h-3" />
                                                                {t('resume.download')}
                                                            </motion.a>
                                                        )}
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Courses Section */}
                        <div className="space-y-6">
                            <div className="flex items-center gap-3 mb-6">
                                <GraduationCap className="w-6 h-6 text-purple-400" />
                                <h3 className="text-2xl font-bold text-white">{t('resume.courses')}</h3>
                            </div>
                            <div className="grid gap-6">
                                {courses.map((course, index) => (
                                    <motion.div
                                        key={index}
                                        variants={fadeInUp}
                                        custom={0.7 + index * 0.1}
                                        className="relative bg-white/5 backdrop-blur-sm rounded-xl p-6 border 
                                                border-purple-500/10 hover:border-purple-500/20 transition-all duration-300
                                                group"
                                    >
                                        <div className="flex items-start gap-4">
                                            {course.platformLogo && (
                                                <div className="sm:w-12 sm:h-12 w-10 h-10 rounded-lg overflow-hidden flex-shrink-0 
                                                            bg-white/5 border border-purple-500/10">
                                                    <motion.img
                                                        src={course.platformLogo}
                                                        alt={course.platform}
                                                        className="w-full h-full object-contain p-2"
                                                        initial={{ opacity: 0 }}
                                                        animate={{ opacity: 1 }}
                                                        transition={{ duration: 0.3 }}
                                                    />
                                                </div>
                                            )}
                                            <div className="flex-1">
                                                <div className="flex justify-between items-start sm:gap-2 gap-1">
                                                    <h4 className="sm:text-lg text-base font-semibold text-white sm:max-w-[80%] min-[380px]:max-w-[60%] max-w-[50%] group-hover:text-purple-400 
                                                            transition-colors duration-300">
                                                        {course.title}
                                                    </h4>
                                                    <div className="flex items-center gap-2">
                                                        <div className="flex items-center gap-2 sm:px-3 sm:py-1 px-2 py-1 bg-purple-500/10 rounded-full
                                                                    text-purple-400 sm:text-sm min-[380px]:text-[8px] text-[6px] whitespace-nowrap group-hover:bg-purple-500/20 
                                                                    transition-all duration-300">
                                                            <Clock className="w-3 h-3" />
                                                            <span>{course.hours} {t('resume.hours')}</span>
                                                        </div>
                                                        <div className="sm:px-3 sm:py-1 px-2 py-1 bg-purple-500/10 rounded-full text-purple-400 sm:text-sm min-[380px]:text-[8px] text-[6px] sm:whitespace-nowrap
                                                                    group-hover:bg-purple-500/20 transition-all duration-300">
                                                            {course.date}
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="flex items-center gap-2 text-gray-400 text-sm mt-2">
                                                    <Building className="w-4 h-4" />
                                                    <span>{course.platform}</span>
                                                </div>
                                                <p className="text-gray-300 text-sm mt-2">{course.description}</p>
                                                {(course.credentialUrl || course.credentialFile) && (
                                                    <div className="flex items-center justify-end gap-3 mt-4">
                                                        <motion.a
                                                            href={course.credentialUrl || course.credentialFile}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="inline-flex items-center gap-2 px-4 py-2 whitespace-nowrap
                                                                    bg-purple-500/10 rounded-full text-purple-400 sm:text-sm text-[8px]
                                                                    hover:bg-purple-500/20 transition-all duration-300
                                                                    group-hover:translate-x-1"
                                                            whileHover={{ scale: 1.05 }}
                                                        >
                                                            <Trophy className="sm:w-4 sm:h-4 w-3 h-3" />
                                                            {t('resume.viewCredential')}
                                                            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 
                                                                                group-hover:translate-x-1" />
                                                        </motion.a>
                                                        {course.credentialFile && (
                                                            <motion.a
                                                                href={course.credentialFile}
                                                                download
                                                                className="inline-flex items-center gap-2 px-4 py-2 white-space-nowrap
                                                                        bg-purple-500/10 rounded-full text-purple-400 sm:text-sm text-[8px]
                                                                        hover:bg-purple-500/20 transition-all duration-300"
                                                                whileHover={{ scale: 1.05 }}
                                                            >
                                                                <FileText className="sm:w-4 sm:h-4 w-3 h-3" />
                                                                {t('resume.download')}
                                                            </motion.a>
                                                        )}
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Certifications Section */}
                <motion.div
                    variants={fadeInUp}
                    custom={0.6}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    className="mt-16"
                >
                    <div className="flex items-center gap-3 mb-8">
                        <Trophy className="w-6 h-6 text-purple-400" />
                        <h3 className="text-2xl font-bold text-white">{t('resume.certifications')}</h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {certifications.map((cert, index) => (
                            <motion.div
                                key={index}
                                variants={fadeInUp}
                                custom={0.7 + index * 0.1}
                                whileHover={{ 
                                    scale: 1.02,
                                    transition: { duration: 0.2 }
                                }}
                                className="group relative bg-gradient-to-br from-purple-900/20 via-purple-800/10 to-purple-900/20 
                                        backdrop-blur-sm rounded-xl overflow-hidden
                                        border border-purple-500/10 hover:border-purple-500/30 
                                        transition-all duration-500"
                            >
                                {/* Animated border effect */}
                                <motion.div
                                    className="absolute inset-0"
                                    initial={{ background: "linear-gradient(90deg, transparent 0%, transparent 100%)" }}
                                    animate={{
                                        background: [
                                            "linear-gradient(90deg, transparent 0%, transparent 100%)",
                                            "linear-gradient(90deg, transparent 0%, #a3a3a30e 50%, transparent 100%)",
                                            "linear-gradient(90deg, transparent 0%, transparent 100%)",
                                        ],
                                        x: ["-100%", "100%", "100%"],
                                    }}
                                    transition={{
                                        duration: 3,
                                        repeat: Infinity,
                                        repeatType: "loop",
                                        ease: "linear",
                                    }}
                                />

                                {/* Content */}
                                <div className="relative p-6">
                                    <div className="flex items-start gap-4">
                                        <div className="flex-1">
                                            <div className="flex justify-between items-start gap-4">
                                                <motion.div
                                                    initial={{ scale: 0.8, opacity: 0 }}
                                                    animate={{ scale: 1, opacity: 1 }}
                                                    transition={{ duration: 0.3, delay: index * 0.1 }}
                                                    className="sm:w-20 sm:h-20 w-16 h-16 rounded-lg overflow-hidden flex-shrink-0
                                                            bg-white/5 border border-purple-500/10 p-2
                                                            group-hover:border-purple-500/30 transition-all duration-300"
                                                >
                                                    <motion.img
                                                        src={cert.badgeImage}
                                                        alt={`${cert.title} Badge`}
                                                        className="w-full h-full object-contain"
                                                        whileHover={{ rotate: 25 }}
                                                        transition={{ duration: 0.3 }}
                                                    />
                                                </motion.div>
                                                <span className="px-3 py-1 bg-purple-500/10 rounded-full text-purple-400 text-sm
                                                            group-hover:bg-purple-500/20 transition-all duration-300">
                                                    {cert.date}
                                                </span>
                                            </div>
                                            
                                            <motion.h4 
                                                className="text-xl font-bold text-white mt-4 group-hover:text-purple-400 
                                                        transition-colors duration-300"
                                                initial={{ y: 20, opacity: 0 }}
                                                animate={{ y: 0, opacity: 1 }}
                                                transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
                                            >
                                                {cert.title}
                                            </motion.h4>
                                            
                                            <motion.div 
                                                className="flex items-center gap-2 text-gray-400 mt-2"
                                                initial={{ y: 20, opacity: 0 }}
                                                animate={{ y: 0, opacity: 1 }}
                                                transition={{ duration: 0.4, delay: index * 0.1 + 0.3 }}
                                            >
                                                <Building className="w-4 h-4" />
                                                <span>{cert.issuer}</span>
                                            </motion.div>
                                            {!cert.code &&
                                            <motion.div 
                                                className="flex items-center gap-2 text-gray-400 mt-2"
                                                initial={{ y: 20, opacity: 0 }}
                                                animate={{ y: 0, opacity: 1 }}
                                                transition={{ duration: 0.4, delay: index * 0.1 + 0.3 }}
                                            >
                                                <div className="w-4 h-6"></div>
                                            </motion.div>}
                                            {cert.code &&
                                            <motion.div 
                                                className="flex items-center gap-2 text-gray-400 mt-2"
                                                initial={{ y: 20, opacity: 0 }}
                                                animate={{ y: 0, opacity: 1 }}
                                                transition={{ duration: 0.4, delay: index * 0.1 + 0.3 }}
                                            >
                                                <FaHashtag className="w-4 h-4" />
                                                <span>{cert.code}</span>
                                            </motion.div>}
                                            <motion.div 
                                                className="flex items-center justify-between mt-4"
                                                initial={{ y: 20, opacity: 0 }}
                                                animate={{ y: 0, opacity: 1 }}
                                                transition={{ duration: 0.4, delay: index * 0.1 + 0.4 }}
                                            >
                                                
                                                <div className="flex items-center gap-3">
                                                    <motion.a
                                                        href={cert.credentialUrl || cert.credentialFile}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="inline-flex items-center gap-2 px-4 py-2 
                                                                bg-purple-500/10 rounded-full text-purple-400 text-sm
                                                                hover:bg-purple-500/20 transition-all duration-300
                                                                group-hover:translate-x-1"
                                                        whileHover={{ scale: 1.05 }}
                                                    >
                                                        <Trophy className="w-4 h-4" />
                                                        {t('resume.viewCredential')}
                                                        <ArrowUpRight className="w-4 h-4 transition-transform duration-300 
                                                                            group-hover:translate-x-1" />
                                                    </motion.a>
                                                    {cert.credentialFile && (
                                                        <motion.a
                                                            href={cert.credentialFile}
                                                            download
                                                            className="inline-flex items-center gap-2 px-4 py-2 
                                                                    bg-purple-500/10 rounded-full text-purple-400 text-sm
                                                                    hover:bg-purple-500/20 transition-all duration-300"
                                                            whileHover={{ scale: 1.05 }}
                                                        >
                                                            <FileText className="w-4 h-4" />
                                                            {t('resume.download')}
                                                        </motion.a>
                                                    )}
                                                </div>
                                            </motion.div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

export default Resume;