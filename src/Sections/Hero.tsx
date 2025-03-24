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
import { ArrowDown, Code2, BarChart, LineChart } from "lucide-react";

function Hero() {
    const [currentRole, setCurrentRole] = useState(0);
    const [ref, inView] = useInView({
        threshold: 0.1,
        triggerOnce: true,
    });
    const roles = [
        { title: "Data Analyst", icon: <LineChart className="w-5 h-5" /> },
        { title: "Frontend Developer", icon: <Code2 className="w-5 h-5" /> },
        { title: "Business Intelligence Analyst", icon: <BarChart className="w-5 h-5" /> }
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
            <div className="relative z-10 w-full max-w-6xl mx-auto mt-20 md:mt-20">
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
                            <motion.div
                                variants={fadeInUp}
                                custom={0.2}
                                initial="hidden"
                                animate={inView ? "visible" : "hidden"}
                                className="flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 backdrop-blur-sm border border-purple-500/20"
                            >
                                <span className="text-sm text-purple-400">Welcome to my portfolio</span>
                                <ArrowDown className="w-4 h-4 text-purple-400 animate-bounce" />
                            </motion.div>

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
                                className="text-sm sm:text-md md:text-lg text-gray-300/90 mb-4 max-w-2xl mx-auto leading-relaxed"
                            >
                                Transforming complex data into actionable insights through analytical expertise and innovative solutions. 
                                Crafting beautiful, responsive web experiences with modern technologies.
                            </motion.p>
                            
                            {/* Certificate Badges */}
                            <motion.div
                                variants={fadeInUp}
                                custom={0.6}
                                initial="hidden"
                                animate={inView ? "visible" : "hidden"}
                                className="flex gap-6 mb-4"
                            >
                                {[
                                    { image: ibm, alt: "IBM Certificate", title: "IBM Data Analytics" },
                                    { image: datacamp, alt: "DataCamp Certificate", title: "DataCamp Certification" },
                                    { image: pl300, alt: "PL-300 Certificate", title: "Power BI Data Analyst" }
                                ].map((cert, index) => (
                                    <motion.div
                                        key={index}
                                        whileHover={{ 
                                            scale: 1.1,
                                            transition: { duration: 0.2 }
                                        }}
                                        className="group relative transition-transform duration-300 hover:drop-shadow-lg hover:drop-shadow-purple-500/20"
                                    >
                                        <img 
                                            src={cert.image} 
                                            alt={cert.alt} 
                                            className="w-8 h-8 sm:w-10 sm:h-10 object-contain" 
                                        />
                                        <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-black/80 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                                            {cert.title}
                                        </span>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </div>
                    </motion.div>
                    
                    {/* Stats Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ 
                            opacity: inView ? 1 : 0, 
                            y: inView ? 0 : 30,
                            transition: {
                                duration: 0.8,
                                delay: 0.2,
                                ease: "easeOut"
                            }
                        }}
                        className="w-full max-w-3xl mx-auto order-4 md:order-2"
                    >
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full">
                            {[
                                { value: 3, label: "Years Experience", delay: 0.4 },
                                { value: 15, label: "Projects Completed", delay: 0.6 },
                                { value: 3, label: "Certifications", delay: 0.8 }
                            ].map((stat, index) => (
                                <motion.div
                                    key={index}
                                    variants={fadeInUp}
                                    custom={stat.delay}
                                    initial="hidden"
                                    animate={inView ? "visible" : "hidden"}
                                    whileHover={{ 
                                        scale: 1.03,
                                        backgroundColor: "rgba(168, 85, 247, 0.1)",
                                        transition: { duration: 0.3 }
                                    }}
                                    className="bg-white/5 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-purple-500/10 text-center cursor-default transition-all duration-300"
                                >
                                    <div className="text-3xl md:text-4xl font-bold mb-2 text-white">
                                        {inView && <CountUp end={stat.value} duration={1.5} delay={0.8} />}
                                        {index !== 2 && "+"}
                                    </div>
                                    <div className="text-gray-400/80 text-sm tracking-wide">{stat.label}</div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                    
                    {/* Buttons */}
                    <motion.div
                        variants={fadeInUp}
                        custom={1}
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                        className="flex flex-col sm:flex-row gap-4 mt-2 order-2 md:order-3"
                    >
                        <a href="#projects">
                            <PrimaryButton>View Projects</PrimaryButton>
                        </a>
                        <SecondaryButton onClick={() => window.open(Resume, '_blank')}>View Resume</SecondaryButton>
                    </motion.div>
                    
                    {/* Social Media Icons */}
                    <motion.div
                        variants={fadeInUp}
                        custom={1.2}
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                        className="flex justify-center gap-6 mt-2 order-3 md:order-4" 
                    >
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
                                className="group relative text-white/60 transition-colors duration-300 hover:drop-shadow-lg hover:drop-shadow-purple-500/20"
                            >
                                {social.icon}
                                <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-black/80 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                                    {social.label}
                                </span>
                            </motion.a>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

export default Hero;