import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight, Calendar, ExternalLink, Star, Github, File } from "lucide-react";
import { Project } from "../types/Types";
import { PrimaryButton } from "./buttons";
import { useLanguage } from "../Context/LanguageContext";
interface ProjectModalProps {
    project: Project;
    onClose: () => void;
}

function ProjectModal({ project, onClose }: ProjectModalProps) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isImageViewerOpen, setIsImageViewerOpen] = useState(false);
    const images = project.screenshots || [project.image];

    // Prevent background scrolling when modal is open
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, []);

    // Auto-scroll images
    useEffect(() => {
        if (!isImageViewerOpen) {
            const interval = setInterval(() => {
                setCurrentImageIndex((prev) => (prev + 1) % images.length);
            }, 5000);
            return () => clearInterval(interval);
        }
    }, [images.length, isImageViewerOpen]);

    const nextImage = () => {
        setCurrentImageIndex((prev) => (prev + 1) % images.length);
    };

    const previousImage = () => {
        setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    const { t, language } = useLanguage();

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex overflow-auto items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={(e) => {
                if (!isImageViewerOpen) {
                    onClose();
                }
            }}
        >
            {/* Modal Content */}
            <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                className="relative w-[95%] h-[95vh] bg-black/90 rounded-2xl overflow-hidden
                         border border-purple-500/20 shadow-2xl shadow-purple-500/10"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Close Button */}
                <button
                    onClick={(e) => {
                        e.stopPropagation();
                        if (!isImageViewerOpen) {
                            onClose();
                        }
                    }}
                    className="absolute top-4 right-4 z-30 p-2 rounded-full bg-black/50 hover:bg-black/70 
                             text-white transition-colors duration-300"
                >
                    <X className="w-6 h-6" />
                </button>

                {/* Main Content */}
                <div className="flex flex-col lg:flex-row h-full">
                    {/* Left Column - Image Slider */}
                    <div className="relative w-full lg:w-1/2 bg-black  overflow-hidden flex flex-col">
                        {/* Image Container */}
                        <div className="relative  flex-1 max-h-[200px] lg:max-h-none bg-black flex items-center justify-center group">
                            {/* Main Image */}
                            <AnimatePresence mode="wait">
                                <motion.img
                                    key={currentImageIndex}
                                    src={images[currentImageIndex]}
                                    alt={`${project.title} screenshot ${currentImageIndex + 1}`}
                                    className="w-full h-full object-contain p-4 cursor-pointer transition-all duration-300
                                             group-hover:scale-[0.98] group-hover:opacity-80 "
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                    onClick={() => setIsImageViewerOpen(true)}
                                />
                            </AnimatePresence>

                            {/* Hover Overlay */}
                            <div className="absolute bg-[#0000005a] inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 
                                        transition-opacity duration-300 pointer-events-none">
                                <div className="bg-black/50 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm
                                            flex items-center gap-2 transform translate-y-2 group-hover:translate-y-0
                                            transition-transform duration-300">
                                    <ExternalLink className="w-4 h-4" />
                                    <span>{t('projectModal.clickToViewFullSize')}</span>
                                </div>
                            </div>

                            {/* Navigation Controls */}
                            <div className="absolute inset-0 flex items-center justify-between p-4 pointer-events-none">
                                {/* Left Arrow */}
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        previousImage();
                                    }}
                                    className="p-2 rounded-full bg-black/50 hover:bg-black/70 
                                             text-white transition-colors duration-300 pointer-events-auto"
                                >
                                    <ChevronLeft className="w-6 h-6" />
                                </button>

                                {/* Right Arrow */}
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        nextImage();
                                    }}
                                    className="p-2 rounded-full bg-black/50 hover:bg-black/70 
                                             text-white transition-colors duration-300 pointer-events-auto"
                                >
                                    <ChevronRight className="w-6 h-6" />
                                </button>
                            </div>

                            {/* Bottom Controls */}
                            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                                {/* Pagination Dots */}
                                <div className="flex justify-center gap-2">
                                    {images.map((_, index) => (
                                        <button
                                            key={index}
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                setCurrentImageIndex(index);
                                            }}
                                            className={`w-2 h-2 rounded-full transition-all duration-300
                                                    ${currentImageIndex === index 
                                                        ? "bg-purple-500 w-4" 
                                                        : "bg-white/30 hover:bg-white/50"}`}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>

                        
                    </div>

                    {/* Right Column - Project Details */}
                    <div className="flex flex-col w-full lg:w-1/2 p-6 lg:p-8 overflow-y-auto rounded-r-2xl ">
                        {/* Header */}
                        <div className="flex flex-col gap-4 mb-6">
                            <div className="flex items-center gap-2">
                                <span className="px-3 py-1 bg-purple-500/10 rounded-full text-purple-400 text-sm">
                                    <img 
                                        src={project.categoryIcon} 
                                        alt={project.category} 
                                        className="w-5 h-5 object-contain inline-block mr-1"
                                    />
                                    {project.category}
                                </span>
                                <div className="flex items-center gap-1 text-gray-400 text-sm">
                                    <Calendar className="w-4 h-4" />
                                    <span>{project.completionDate}</span>
                                </div>
                            </div>
                            <h2 className="text-2xl font-bold text-white">{project.title}</h2>
                            <p className="text-gray-300">{project.longDescription}</p>
                        </div>

                        {/* Technologies */}
                        <div className="mb-6">
                            <h3 className="text-lg font-semibold text-white mb-3">{t('projectModal.technologiesUsed')}</h3>
                            <div className="flex flex-wrap gap-2">
                                {project.technologies.map((tech, index) => (
                                    <span
                                        key={index}
                                        className="px-3 py-1 bg-white/5 rounded-full text-gray-300 text-sm"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Features and Insights Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                            {/* Key Features */}
                            {project.features.length > 0 && (
                            <div>
                                <h3 className="text-lg font-semibold text-white mb-3">{t('projectModal.keyFeatures')}</h3>
                                <ul className="space-y-2">
                                    {project.features.map((feature, index) => (
                                        <li key={index} className="flex items-start gap-2 text-gray-300">
                                            <div className="flex-shrink-0 w-2 h-2 mt-1.5 bg-purple-500 rounded-full" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            )}
                            {/* Impact */}
                            {project.impact.length > 0 && (
                            <div>
                                <h3 className="text-lg font-semibold text-white mb-3">{t('projectModal.impact')}</h3>
                                <ul className="space-y-2">
                                    {project.impact.map((insight, index) => (
                                        <li key={index} className="flex items-start gap-2 text-gray-300">
                                            <div className="flex-shrink-0 w-2 h-2 mt-1.5 bg-purple-500 rounded-full" />
                                            {insight}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            )}
                        </div>

                        {/* Action Buttons */}
                        <div className="flex items-center w-full gap-4 mt-auto pt-6 border-t border-white/10">
                            {/* View Project */}
                            {project.projectUrl && (
                                <PrimaryButton
                                    onClick={() => window.open(project.projectUrl, '_blank')}
                                    className="!px-4 !py-2 w-full flex items-center justify-center gap-2"
                                >
                                    <ExternalLink className="w-4 h-4" />
                                    <span>{t('projectModal.viewProject')}</span>
                                </PrimaryButton>
                            )}
                            {/* View Project File */}
                            {project.projectFile && (
                                <PrimaryButton
                                    onClick={() => {
                                        const link = document.createElement('a');
                                        link.href = project.projectFile as string;
                                        link.download = `${project.title}.pbix`;
                                        link.click();
                                    }}
                                    className="!px-4 !py-2 w-full flex items-center justify-center gap-2"
                                >
                                    <File className="w-4 h-4" />
                                    <span>{t('projectModal.viewProject')}</span>
                                </PrimaryButton>
                            )}
                            {/* View on GitHub Button */}
                                {project.githubUrl && (
                                    <PrimaryButton
                                        onClick={() => window.open(project.githubUrl, '_blank')}
                                        className="!px-4 !py-2 w-full flex items-center justify-center gap-2"
                                    >
                                        <Github className="w-4 h-4" />
                                        <span>{t('projectModal.viewOnGitHub')}</span>
                                    </PrimaryButton>
                                )}
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Full-screen Image Viewer */}
            <AnimatePresence>
                {isImageViewerOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90"
                        onClick={(e) => {
                            e.stopPropagation();
                            setIsImageViewerOpen(false);
                        }}
                    >
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                setIsImageViewerOpen(false);
                            }}
                            className="absolute top-4 right-4 p-2 rounded-full bg-black/50 hover:bg-black/70 
                                     text-white transition-colors duration-300"
                        >
                            <X className="w-6 h-6" />
                        </button>
                        <div className="relative w-full h-full flex items-center justify-center p-4">
                            <div className="relative w-full max-w-5xl h-[80vh] bg-black/50 rounded-2xl overflow-hidden">
                                <motion.img
                                    key={currentImageIndex}
                                    src={images[currentImageIndex]}
                                    alt={`${project.title} screenshot ${currentImageIndex + 1}`}
                                    className="w-full h-full object-contain p-8"
                                    initial={{ scale: 0.9, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    exit={{ scale: 0.9, opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                />
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        previousImage();
                                    }}
                                    className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 hover:bg-black/70 
                                             text-white transition-colors duration-300"
                                >
                                    <ChevronLeft className="w-8 h-8" />
                                </button>
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        nextImage();
                                    }}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 hover:bg-black/70 
                                             text-white transition-colors duration-300"
                                >
                                    <ChevronRight className="w-8 h-8" />
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}

export default ProjectModal; 