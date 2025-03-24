import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaEnvelope } from "react-icons/fa";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import Resume from "../assets/resume.pdf";
import datacamp from "../assets/datacamp.jpeg";
import ibm from "../assets/ibm.png";
import pl300 from "../assets/pl300.webp";

function Hero() {
    const [currentRole, setCurrentRole] = useState(0);
    const [ref, inView] = useInView({
        threshold: 0.1, // Lower threshold for better mobile triggering
        triggerOnce: true,
    });
    const roles = ["Data Analyst", "Frontend Developer"];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentRole((prev) => (prev + 1) % roles.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    // Animation variants for reusability and consistency
    const fadeInUp = {
        hidden: { opacity: 0, y: 20 },
        visible: (delay: number) => ({
            opacity: 1, 
            y: 0,
            transition: { 
                duration: 0.6,
                ease: [0.6, 0.05, 0.01, 0.9], // Smooth easing
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
                            <motion.h1 
                                variants={fadeInUp}
                                custom={0.2}
                                initial="hidden"
                                animate={inView ? "visible" : "hidden"}
                                className="text-3xl sm:text-5xl md:text-6xl font-bold text-white"
                            >
                                Shareef Huzaifa
                            </motion.h1>
                            <div className="overflow-hidden h-10 md:h-12">
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={currentRole}
                                        initial={{ y: 30, opacity: 0 }}
                                        animate={{ 
                                            y: 0, 
                                            opacity: 1,
                                            transition: {
                                                type: "spring",
                                                stiffness: 100,
                                                damping: 15
                                            }
                                        }}
                                        exit={{ 
                                            y: -30, 
                                            opacity: 0,
                                            transition: {
                                                duration: 0.3,
                                                ease: "easeInOut"
                                            }
                                        }}
                                        className="text-xl md:text-2xl text-white/90"
                                    >
                                        {roles[currentRole]}
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
                                Transforming complex data into actionable insights through analytical expertise and innovative solutions
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
                                    { image: ibm, alt: "IBM Certificate" },
                                    { image: datacamp, alt: "DataCamp Certificate" },
                                    { image: pl300, alt: "PL-300 Certificate" }
                                ].map((cert, index) => (
                                    <motion.div
                                        key={index}
                                        whileHover={{ 
                                            scale: 1.1,
                                            transition: { duration: 0.2 }
                                        }}
                                        className="transition-transform duration-300 hover:drop-shadow-lg hover:drop-shadow-blue-500/20"
                                    >
                                        <img src={cert.image} alt={cert.alt} className="w-6 h-6 sm:w-8 sm:h-8 object-contain" />
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
                                        backgroundColor: "rgba(255, 255, 255, 0.1)",
                                        transition: { duration: 0.3 }
                                    }}
                                    className="bg-white/5 backdrop-blur-sm rounded-xl p-4 md:p-6 border text-center border-white/10 cursor-default transition-all duration-300"
                                >
                                    <div className="text-3xl md:text-4xl font-bold mb-2 text-white">
                                        {inView && <CountUp end={stat.value} duration={1.5} />}
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
                        <motion.a
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.98 }}
                            href="#projects"
                            className="group relative px-6 py-3 bg-white text-black rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-white/20 text-center"
                        >
                            <span className="relative z-10 font-medium">View Projects</span>
                            <div className="absolute inset-0 bg-gradient-to-r from-white to-gray-200 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
                        </motion.a>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => window.open(Resume, '_blank')}
                            className="group relative px-6 py-3 border border-white/20 rounded-lg overflow-hidden transition-all duration-300 hover:border-white/40 backdrop-blur-sm text-center"
                        >
                            <span className="relative z-10 font-medium text-white">View Resume</span>
                            <div className="absolute inset-0 bg-white/5 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
                        </motion.button>
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
                            { icon: <FaGithub size={24} />, href: "https://github.com" },
                            { icon: <FaLinkedin size={24} />, href: "https://linkedin.com" },
                            { icon: <FaTwitter size={24} />, href: "https://x.com" },
                            { icon: <FaInstagram size={24} />, href: "https://instagram.com" },
                            { icon: <FaEnvelope size={24} />, href: "mailto:Shareef.99997@gmail.com" }
                        ].map((social, index) => (
                            <motion.a
                                key={index}
                                whileHover={{ 
                                    scale: 1.15,
                                    color: "#ffffff",
                                    transition: { duration: 0.2 }
                                }}
                                href={social.href}
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-white/60 transition-colors duration-300 hover:drop-shadow-lg hover:drop-shadow-white/20"
                            >
                                {social.icon}
                            </motion.a>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

export default Hero;