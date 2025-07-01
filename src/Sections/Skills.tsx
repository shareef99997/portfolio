import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Brain } from "lucide-react";
import SectionHeader from "../components/SectionHeader";
import { useSkillsData } from "../Data/SkillsData";
import { useLanguage } from "../Context/LanguageContext";
import { Technology, ImageTechnology, IconTechnology } from "../types/Types";

function isImageTechnology(tech: Technology): tech is ImageTechnology {
    return 'image' in tech;
}

function isIconTechnology(tech: Technology): tech is IconTechnology {
    return 'icon' in tech;
}

function Skills() {
    const { t, language } = useLanguage();
    const { technicalSkills, softSkills } = useSkillsData();
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

    return (
        <section id="skills" className="relative py-20 overflow-hidden">
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
                        title={t('skills.title')} 
                        icon={Brain}
                        className="mx-auto mb-4"
                    />
                    <h2 className="text-3xl sm:text-4xl font-bold text-white">
                        {t('skills.subtitle')}
                    </h2>
                </motion.div>

                {/* Technical Skills Grid */}
                <motion.div
                    variants={fadeInUp}
                    custom={0.2}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8"
                >
                    {technicalSkills.map((category, index) => (
                        <motion.div
                            key={index}
                            variants={fadeInUp}
                            custom={0.2 + index * 0.1}
                            initial="hidden"
                            animate={inView ? "visible" : "hidden"}
                            className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-purple-500/10 
                                    hover:border-purple-500/20 transition-all duration-300 flex flex-col"
                        >
                            <div className="flex items-center gap-3 mb-4">
                                {category.icon}
                                <h3 className="text-xl font-bold text-white">{category.title}</h3>
                            </div>
                            <p className="text-gray-300 mb-6 flex-grow">{category.description}</p>
                            <div className="flex flex-wrap gap-3">
                                {category.technologies.map((tech, techIndex) => (
                                    <motion.div
                                        key={techIndex}
                                        variants={fadeInUp}
                                        custom={0.3 + techIndex * 0.1}
                                        initial="hidden"
                                        animate={inView ? "visible" : "hidden"}
                                        className="group flex items-center gap-2 px-3 py-1.5 bg-white/5 
                                                rounded-full border border-purple-500/10 hover:border-purple-500/20 
                                                transition-all duration-300"
                                    >
                                        {isImageTechnology(tech) ? (
                                            <div className="sm:w-5 sm:h-5 w-4 h-4 rounded-lg overflow-hidden">
                                                <motion.img
                                                    src={tech.image}
                                                    alt={tech.name}
                                                    className="w-full h-full object-contain"
                                                    whileHover={{ scale: 1.1 }}
                                                    transition={{ duration: 0.2 }}
                                                />
                                            </div>
                                        ) : (
                                            <div className="w-5 h-5 text-purple-400">
                                                {(tech as IconTechnology).icon}
                                            </div>
                                        )}
                                        <span className="text-white/90 sm:text-sm text-[8px] group-hover:text-purple-400 
                                                    transition-colors duration-300">{tech.name}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Professional Skills */}
                <motion.div
                    variants={fadeInUp}
                    custom={0.4}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-purple-500/10 
                            hover:border-purple-500/20 transition-all duration-300"
                >
                    <div className="flex items-center gap-3 mb-4">
                        {softSkills.icon}
                        <h3 className="text-xl font-bold text-white">{softSkills.title}</h3>
                    </div>
                    <p className="text-gray-300 mb-6">{softSkills.description}</p>
                    <div className="flex flex-wrap gap-3">
                        {softSkills.technologies.map((tech, techIndex) => (
                            <motion.div
                                key={techIndex}
                                variants={fadeInUp}
                                custom={0.5 + techIndex * 0.1}
                                initial="hidden"
                                animate={inView ? "visible" : "hidden"}
                                className="group flex items-center gap-2 px-3 py-1.5 bg-white/5 
                                        rounded-full border border-purple-500/10 hover:border-purple-500/20 
                                        transition-all duration-300"
                            >
                                <div className="w-5 h-5 text-purple-400">
                                    {tech.icon}
                                </div>
                                <span className="text-white/90 sm:text-sm text-[8px] group-hover:text-purple-400 
                                            transition-colors duration-300">{tech.name}</span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

export default Skills;
