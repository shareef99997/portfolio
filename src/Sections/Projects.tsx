import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useInView } from "react-intersection-observer";
import { 
    Code2, 

    Calendar,
    Star,
    ExternalLink,
    ArrowUpRight
} from "lucide-react";
import SectionHeader from "../components/SectionHeader";
import ProjectModal from "../components/ProjectModal";
import { useProjectsData } from "../Data/ProjectsData";
import { useLanguage } from "../Context/LanguageContext";
import { Project } from "../types/Types";

function Projects() {
    const { t, language } = useLanguage();
    const { categories, projects } = useProjectsData();
    const [selectedCategory, setSelectedCategory] = useState(language === "ar" ? "الكل" : "All");
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const [showAllProjects, setShowAllProjects] = useState(false);
    const [ref, inView] = useInView({
        threshold: 0.1,
        triggerOnce: true,
    });

    const filteredProjects = selectedCategory === "All" || selectedCategory === "الكل"
        ? projects 
        : projects.filter(project => project.category === selectedCategory);

    // Get visible projects based on showAllProjects state
    const visibleProjects = showAllProjects ? filteredProjects : filteredProjects.slice(0, 6);

    // Get the most recent project
    const mostRecentProject = projects.reduce((latest, current) => {
        const latestDate = new Date(latest.completionDate);
        const currentDate = new Date(current.completionDate);
        return currentDate > latestDate ? current : latest;
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
        <section id="projects" className="relative py-20 overflow-hidden">
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
                        title={t('projects.title')} 
                        icon={Code2}
                        className="mx-auto mb-4"
                    />
                    <h2 className="text-3xl sm:text-4xl font-bold text-white">
                        {t('projects.subtitle')}
                    </h2>
                </motion.div>

                {/* Category Filter */}
                <motion.div
                    variants={fadeInUp}
                    custom={0.2}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    className="flex flex-wrap justify-center gap-3 mb-12"
                >
                    {categories.map((category, index) => (
                        <motion.button
                            key={category.name}
                            variants={fadeInUp}
                            custom={0.2 + index * 0.1}
                            onClick={() => setSelectedCategory(category.name)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300
                                    flex items-center gap-2
                                    ${selectedCategory === category.name
                                        ? "bg-slate-500 text-white shadow-lg shadow-slate-500/20"
                                        : "bg-white/5 text-gray-300 hover:bg-white/10"
                                    }`}
                        >
                            <img 
                                src={category.icon} 
                                alt={category.name} 
                                className="w-5 h-5 object-contain"
                            />
                            {category.name}
                        </motion.button>
                    ))}
                </motion.div>

                {/* Projects Grid */}
                <motion.div
                    variants={fadeInUp}
                    custom={0.3}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr "
                >
                    <AnimatePresence mode="wait">
                        {visibleProjects.map((project, index) => (
                            <motion.div
                                key={project.id}
                                variants={fadeInUp}
                                custom={0.3 + index * 0.1}
                                initial="hidden"
                                animate="visible"
                                exit="hidden"
                                onClick={() => setSelectedProject(project)}
                                className="group relative bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden
                                        border border-slate-500/10 hover:border-slate-500/20 
                                        transition-all duration-300 cursor-pointer
                                        hover:shadow-lg hover:shadow-slate-500/10 flex flex-col"
                            >
                                {/* Project Image */}
                                <div className="relative h-48 overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 z-10" />
                                    <motion.img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover transform group-hover:scale-110 
                                                transition-transform duration-700 ease-out"
                                    />
                                    <div className="absolute top-4 right-4 z-20 flex items-center gap-1 
                                                bg-black/50 backdrop-blur-sm px-2 py-1 rounded-full">
                                        <Calendar className="w-4 h-4 text-slate-400" />
                                        <span className="text-white text-sm">{project.completionDate}</span>
                                    </div>
                                    {/* Featured Badge */}
                                    {project.id === mostRecentProject.id && (
                                        <motion.div 
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.5 }}
                                            className="absolute top-4 left-4 z-20 flex items-center gap-1 
                                                    bg-slate-500/80 backdrop-blur-sm px-2 py-1 rounded-full"
                                        >
                                            <Star className="w-4 h-4 text-yellow-400" />
                                            <span className="text-white text-sm">Featured</span>
                                        </motion.div>
                                    )}
                                </div>

                                {/* Project Content */}
                                <div className="p-6 flex flex-col flex-1">
                                    <div className="flex-1">
                                        <div className="flex items-center gap-2 mb-2">
                                            <div className="flex items-center gap-2 px-3 py-1 bg-slate-500/10 rounded-full text-slate-400 text-sm">
                                                <img 
                                                    src={project.categoryIcon} 
                                                    alt={project.category} 
                                                    className="w-5 h-5 object-contain"
                                                />
                                                {project.categoryLabel ? project.categoryLabel : project.category}
                                            </div>
                                        </div>
                                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-slate-400 
                                                    transition-colors duration-300">
                                            {project.title}
                                        </h3>
                                        <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                                            {project.description}
                                        </p>
                                    </div>
                                    <div className="pt-4 border-t border-white/5">
                                        <div className="flex items-center justify-between">
                                            <div className="flex flex-wrap gap-2">
                                                {project.technologies.map((tech, techIndex) => (
                                                    <span
                                                        key={techIndex}
                                                        className="px-2 py-1 bg-white/5 rounded-full text-gray-400 text-xs
                                                                 group-hover:bg-white/10 transition-colors duration-300"
                                                    >
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                            {project.githubUrl && (
                                                <a
                                                    href={project.githubUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    onClick={(e) => e.stopPropagation()}
                                                    className="p-2 rounded-full bg-slate-500/10 hover:bg-slate-500/20 
                                                             text-slate-400 hover:text-slate-300 transition-all duration-300
                                                             group-hover:scale-110"
                                                >
                                                    <ExternalLink className="w-5 h-5" />
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                {/* Hover Overlay */}
                                <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 
                                            transition-opacity duration-300 flex items-center justify-center">
                                    <span className="text-white font-medium flex items-center gap-2">
                                        {t('projects.viewDetails')}
                                        <ArrowUpRight className="w-4 h-4" />
                                    </span>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                    
                </motion.div>
                    {/* Show More Button  make it in the center horizontally*/}
                    {filteredProjects.length > 6 && !showAllProjects && (
                        <motion.div
                            variants={fadeInUp}
                            custom={0.4}
                            initial="hidden"
                            animate={inView ? "visible" : "hidden"}
                            className="text-center mt-8"
                        >
                            <motion.button
                                variants={fadeInUp}
                                custom={0.4}
                                onClick={() => setShowAllProjects(true)}
                                className="inline-flex items-center gap-2 px-6 py-2 rounded-full text-sm font-medium
                                        transition-all duration-300 bg-slate-500/10 text-slate-400
                                        hover:bg-slate-500/20 hover:text-slate-300"
                            >
                                {t('projects.showMore')}
                                <ArrowUpRight className="w-4 h-4" />
                            </motion.button>
                        </motion.div>
                    )}
            </div>

            {/* Project Modal */}
            <AnimatePresence>
                {selectedProject && (
                    <ProjectModal 
                        project={selectedProject} 
                        onClose={() => setSelectedProject(null)} 
                    />
                )}
            </AnimatePresence>
        </section>
    );
}

export default Projects; 