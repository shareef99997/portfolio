import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ArrowRight, User, Database, ChartBar, Target, Rocket, MapPin, Calendar } from "lucide-react";
import { PrimaryButton } from "../components/buttons";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaEnvelope } from "react-icons/fa";
import SectionHeader from "../components/SectionHeader";

function About() {
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
        <section id="about" className="relative py-20 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 to-transparent" />
            
            <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <SectionHeader 
                        title="About Me" 
                        icon={User}
                        className="mx-auto mb-4"
                    />
                    <h2 className="text-3xl sm:text-4xl font-bold text-white">
                        Get to Know Me
                    </h2>
                </motion.div>

                {/* Main Content */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Left Column - Image and Personal Info */}
                    <motion.div
                        variants={fadeInUp}
                        custom={0.2}
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                        className="space-y-8"
                    >
                        {/* Image Container */}
                        <div className="relative aspect-square rounded-2xl overflow-hidden group">
                            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-transparent z-10" />
                            <img 
                                src="/your-image.jpg" // Replace with your image path
                                alt="Shareef Huzaifa"
                                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                            />
                            {/* Decorative Elements */}
                            <div className="absolute -top-4 -right-4 w-24 h-24 bg-purple-500/10 rounded-full blur-2xl" />
                            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-purple-500/10 rounded-full blur-2xl" />
                        </div>

                        {/* Personal Info Cards */}
                        <div className="grid grid-cols-2 gap-4">
                            {[
                                { 
                                    icon: <MapPin className="w-5 h-5 text-purple-400" />,
                                    title: "Location",
                                    value: "Riyadh, Saudi Arabia",
                                    subValue: "From Sudan",
                                    emoji: "🇸🇩"
                                },
                                { 
                                    icon: <Calendar className="w-5 h-5 text-purple-400" />,
                                    title: "Age",
                                    value: "24 Years",
                                    subValue: "with great ambition",
                                    emoji: "🚀"
                                }
                            ].map((info, index) => (
                                <motion.div
                                    key={index}
                                    variants={fadeInUp}
                                    custom={0.3 + index * 0.1}
                                    initial="hidden"
                                    animate={inView ? "visible" : "hidden"}
                                    className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-purple-500/10 hover:border-purple-500/20 transition-colors duration-300"
                                >
                                    <div className="flex items-center gap-3 mb-2">
                                        {info.icon}
                                        <h3 className="text-white font-medium">{info.title}</h3>
                                    </div>
                                    <div className="text-white font-medium">{info.value}</div>
                                    <div className="text-gray-400 text-sm mt-1">{info.subValue} {info.emoji}</div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Quick Stats */}
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                            {[
                                { label: "Experience", value: "3+ Years" },
                                { label: "Projects", value: "15+" },
                                { label: "Certifications", value: "3+" }
                            ].map((stat, index) => (
                                <motion.div
                                    key={index}
                                    variants={fadeInUp}
                                    custom={0.4 + index * 0.1}
                                    initial="hidden"
                                    animate={inView ? "visible" : "hidden"}
                                    className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-purple-500/10 hover:border-purple-500/20 transition-colors duration-300 text-center"
                                >
                                    <div className="text-purple-400 text-sm mb-1">{stat.label}</div>
                                    <div className="text-white font-medium">{stat.value}</div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right Column - Content */}
                    <motion.div
                        variants={fadeInUp}
                        custom={0.4}
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                        className="space-y-8 flex flex-col h-full"
                    >
                        {/* Introduction */}
                        <div className="space-y-4">
                            <p className="text-gray-300 leading-relaxed text-lg">
                                Hello! I'm Shareef Huzaifa, a passionate Data Analyst based in Riyadh, Saudi Arabia. 
                                With a strong foundation in data analysis and a keen interest in business intelligence, 
                                I specialize in transforming complex data into actionable insights that drive business decisions.
                            </p>
                        </div>

                        {/* Expertise Areas */}
                        <div className="space-y-4">
                            <h3 className="text-xl font-semibold text-white mb-4">Expertise Areas</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {[
                                    { 
                                        icon: <Database className="w-5 h-5 text-purple-400" />,
                                        title: "Data Analysis",
                                        description: "Proficient in data cleaning, transformation, and analysis using various tools and techniques."
                                    },
                                    { 
                                        icon: <ChartBar className="w-5 h-5 text-purple-400" />,
                                        title: "Business Intelligence",
                                        description: "Creating interactive dashboards and reports to visualize complex business data."
                                    },
                                    { 
                                        icon: <Target className="w-5 h-5 text-purple-400" />,
                                        title: "Problem Solving",
                                        description: "Strong analytical mindset with a focus on finding data-driven solutions."
                                    },
                                    { 
                                        icon: <Rocket className="w-5 h-5 text-purple-400" />,
                                        title: "Career Goals",
                                        description: "Aspiring to become a Business Intelligence Analyst and help organizations make data-driven decisions."
                                    }
                                ].map((area, index) => (
                                    <motion.div
                                        key={index}
                                        variants={fadeInUp}
                                        custom={0.5 + index * 0.1}
                                        initial="hidden"
                                        animate={inView ? "visible" : "hidden"}
                                        className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-purple-500/10 hover:border-purple-500/20 transition-colors duration-300"
                                    >
                                        <div className="flex items-center gap-3 mb-2">
                                            {area.icon}
                                            <h3 className="text-white font-medium">{area.title}</h3>
                                        </div>
                                        <p className="text-gray-400 text-sm">{area.description}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="space-y-4 sm:mx-0 mx-auto">
                            <h3 className="text-xl font-semibold text-white sm:text-start text-center">Connect With Me</h3>
                            <div className="flex flex-wrap gap-6">
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
                            </div>
                        </div>

                        {/* CTA Button */}
                        <div className="mt-auto pt-8 flex justify-center sm:justify-start">
                            <a href="#contact">
                                <PrimaryButton>
                                    <div className="flex items-center gap-2">
                                        Let's Work Together
                                        <ArrowRight className="w-5 h-5" />
                                    </div>
                                </PrimaryButton>
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

export default About;
