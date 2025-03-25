import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaEnvelope } from "react-icons/fa";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import Resume from "../assets/resume.pdf";
import datacamp from "../assets/datacamp.jpeg";
import ibm from "../assets/ibm.png";
import pl300 from "../assets/pl300.webp";
import { PrimaryButton, SecondaryButton } from "../components/buttons";
import { ArrowDown, Code2, BarChart, LineChart, Sparkles } from "lucide-react";
import SectionHeader from "../components/SectionHeader";

function Hero() {
    const [currentRole, setCurrentRole] = useState(0);
    const [ref, inView] = useInView({
        threshold: 0.1,
        triggerOnce: true,
    });
    const roles = [
        { title: "Data Analyst", icon: <LineChart className="w-5 h-5" /> },
        { title: "Business Intelligence Analyst", icon: <BarChart className="w-5 h-5" /> },
        { title: "Frontend Developer", icon: <Code2 className="w-5 h-5" /> },
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentRole((prev) => (prev + 1) % roles.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

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
        <section id="hero" className="relative overflow-hidden min-h-screen flex items-center justify-center">
            {/* Content */}
            <div className="relative z-10 w-full max-w-6xl mx-auto mt-20 md:mt-10">
                <div className="flex flex-col items-center text-center gap-8">
                    {/* Main Content */}
                    <motion.div
                        ref={ref}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ 
                            opacity: inView ? 1 : 0, 
                            y: inView ? 0 : 30,
                            transition: {
                                duration: 0.8,
                                ease: "easeOut"
                            }
                        }}
                        className="w-full md:order-1"
                    >
                        <div className="flex flex-col items-center gap-6">
                            <SectionHeader 
                                title="Welcome to my portfolio" 
                                icon={Sparkles}
                                className="mb-4"
                            />

                            <motion.h1 
                                variants={fadeInUp}
                                custom={0.3}
                                initial="hidden"
                                animate={inView ? "visible" : "hidden"}
                                className="text-4xl sm:text-6xl md:text-7xl font-bold text-white"
                            >
                                Shareef Huzaifa
                            </motion.h1>

                            <div className="overflow-hidden h-12 md:h-14">
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={currentRole}
                                        initial={{ y: 30, opacity: 0, scale: 0.8 }}
                                        animate={{ 
                                            y: 0, 
                                            opacity: 1,
                                            scale: 1,
                                            transition: {
                                                type: "spring",
                                                stiffness: 100,
                                                damping: 15,
                                                mass: 0.5
                                            }
                                        }}
                                        exit={{ 
                                            y: -30, 
                                            opacity: 0,
                                            scale: 0.8,
                                            transition: {
                                                duration: 0.3,
                                                ease: "easeInOut"
                                            }
                                        }}
                                        className="flex items-center justify-center gap-2 text-xl md:text-2xl text-purple-200"
                                    >
                                        <motion.div
                                            initial={{ rotate: -180, opacity: 0 }}
                                            animate={{ rotate: 0, opacity: 1 }}
                                            transition={{ duration: 0.5, delay: 0.2 }}
                                        >
                                            {roles[currentRole].icon}
                                        </motion.div>
                                        <span className="font-medium">{roles[currentRole].title}</span>
                                    </motion.div>
                                </AnimatePresence>
                            </div>
                            
                            <motion.p
                                variants={fadeInUp}
                                custom={0.8}
                                initial="hidden"
                                animate={inView ? "visible" : "hidden"}
                                className="text-sm sm:text-md md:text-lg italic text-gray-300/80 mb-4 max-w-2xl mx-auto leading-relaxed"
                            >
                                From data to decisions, patterns to purpose—illuminating insights, automating flows, and shaping a smarter world.
                            </motion.p>
                            
                            {/* Certificate Badges */}
                            <div className="flex flex-col items-center gap-4">
                                <motion.div
                                    variants={fadeInUp}
                                    custom={0.5}
                                    initial="hidden"
                                    animate={inView ? "visible" : "hidden"}
                                    className="flex items-center gap-2 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full border border-purple-500/10"
                                >
                                    <div className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
                                    <span className="text-white/90 text-sm font-medium">Certified Professional</span>
                                </motion.div>
                                <motion.div
                                    variants={fadeInUp}
                                    custom={0.6}
                                    initial="hidden"
                                    animate={inView ? "visible" : "hidden"}
                                    className="flex gap-6 mb-4"
                                >
                                    {[
                                        { 
                                            image: ibm, 
                                            alt: "IBM Certificate", 
                                            title: "IBM Data Analytics",
                                            description: "Professional Certification"
                                        },
                                        { 
                                            image: datacamp, 
                                            alt: "DataCamp Certificate", 
                                            title: "DataCamp Certification",
                                            description: "Data Analysis Track"
                                        },
                                        { 
                                            image: pl300, 
                                            alt: "PL-300 Certificate", 
                                            title: "Power BI Data Analyst",
                                            description: "Microsoft Certified"
                                        }
                                    ].map((cert, index) => (
                                        <motion.div
                                            key={index}
                                            whileHover={{ 
                                                scale: 1.1,
                                                y: -5,
                                                transition: { 
                                                    duration: 0.2,
                                                    type: "spring",
                                                    stiffness: 300
                                                }
                                            }}
                                            className="group relative transition-all duration-300 hover:drop-shadow-lg hover:drop-shadow-purple-500/20"
                                        >
                                            <div className="relative">
                                                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-transparent rounded-lg blur-sm group-hover:blur-md transition-all duration-300" />
                                                <img 
                                                    src={cert.image} 
                                                    alt={cert.alt} 
                                                    className="w-8 h-8 sm:w-10 sm:h-10 object-contain relative z-10" 
                                                />
                                            </div>
                                            <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 px-3 py-2 bg-black/90 backdrop-blur-sm text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                                                <div className="font-medium">{cert.title}</div>
                                                <div className="text-gray-400 text-[10px]">{cert.description}</div>
                                            </div>
                                        </motion.div>
                                    ))}
                                </motion.div>
                            </div>
                            {/* Buttons */}
                            <motion.div
                                variants={fadeInUp}
                                custom={1}
                                initial="hidden"
                                animate={inView ? "visible" : "hidden"}
                                className="flex flex-row gap-4 mt-2 order-2 md:order-3"
                            >
                                <a href="#about">
                                    <PrimaryButton>Learn More</PrimaryButton>
                                </a>
                                <SecondaryButton onClick={() => window.open(Resume, '_blank')}>View Resume</SecondaryButton>
                            </motion.div>
                        </div>
                    </motion.div>
                    
                   
                </div>
            </div>
        </section>
    );
}

export default Hero;