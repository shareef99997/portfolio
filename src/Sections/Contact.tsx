import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, Instagram } from "lucide-react";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaWhatsapp } from "react-icons/fa";
import SectionHeader from "../Components/SectionHeader";
import { useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';
import { PrimaryButton } from "../Components/buttons";

function Contact() {
    const [ref, inView] = useInView({
        threshold: 0.1,
        triggerOnce: true,
    });
    const form = useRef<HTMLFormElement>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

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

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!form.current) return;

        setIsSubmitting(true);
        const loadingToast = toast.loading('Sending message...');

        try {
            await emailjs.sendForm('shareef_portfolio', 'template_9lsgkx7', form.current, 'VONWVF5lDExBpxU1f');
            toast.success('Message sent successfully!', {
                id: loadingToast,
                duration: 4000,
            });
            form.current.reset();
        } catch (error) {
            toast.error('Failed to send message. Please try again.', {
                id: loadingToast,
                duration: 4000,
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    const contactInfo = [
        {
            icon: <Mail className="w-5 h-5 text-purple-400" />,
            title: "Email",
            value: "Shareef.99997@gmail.com",
            link: "mailto:Shareef.99997@gmail.com"
        },
        {
            icon: <Phone className="w-5 h-5 text-purple-400" />,
            title: "Phone",
            value: "+966 582635947",
            link: "tel:+966582635947"
        },
        {
            icon: <MapPin className="w-5 h-5 text-purple-400" />,
            title: "Location",
            value: "Riyadh, Saudi Arabia",
            link: "https://maps.google.com"
        }
    ];

    const socialLinks = [
        {
            icon: <FaGithub size={24} />,
            href: "https://github.com/shareef99997",
            label: "GitHub"
        },
        {
            icon: <FaLinkedin size={24} />,
            href: "https://linkedin.com/in/shareef-ali",
            label: "LinkedIn"
        },
        {
            icon: <FaTwitter size={24} />,
            href: "https://x.com/SHIFO_99997",
            label: "Twitter"
        },
        {
            icon: <FaInstagram size={24} />,
            href: "https://www.instagram.com/shareef_zz/",
            label: "Instagram"
        },
        {
            icon: <FaWhatsapp size={24} />,
            href: "https://wa.me/966582635947",
            label: "WhatsApp"
        }
    ];

    return (
        <section id="contact" className="relative py-20 overflow-hidden">
            <Toaster
                position="top-center"
                toastOptions={{
                    duration: 4000,
                    style: {
                        background: 'rgba(0, 0, 0, 0.8)',
                        backdropFilter: 'blur(8px)',
                        border: '1px solid rgba(168, 85, 247, 0.2)',
                        color: '#fff',
                        padding: '16px',
                        borderRadius: '12px',
                        boxShadow: '0 4px 12px rgba(168, 85, 247, 0.1)',
                    },
                    success: {
                        iconTheme: {
                            primary: '#a855f7',
                            secondary: '#fff',
                        },
                    },
                    error: {
                        iconTheme: {
                            primary: '#ef4444',
                            secondary: '#fff',
                        },
                    },
                    loading: {
                        iconTheme: {
                            primary: '#a855f7',
                            secondary: '#fff',
                        },
                    },
                }}
            />
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
                        title="Get In Touch" 
                        icon={Mail}
                        className="mx-auto mb-4"
                    />
                    <h2 className="text-3xl sm:text-4xl font-bold text-white">
                        Let's Connect
                    </h2>
                </motion.div>

                {/* Main Content */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Form */}
                    <motion.div
                        variants={fadeInUp}
                        custom={0.2}
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                        className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-purple-500/10 
                                hover:border-purple-500/20 transition-all duration-300"
                    >
                        <form ref={form} onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="user_name"
                                        required
                                        className="w-full px-4 py-3 bg-white/5 border border-purple-500/10 rounded-lg
                                                text-white placeholder-gray-400 focus:outline-none focus:border-purple-500/30
                                                transition-colors duration-300"
                                        placeholder="Your name"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="user_email"
                                        required
                                        className="w-full px-4 py-3 bg-white/5 border border-purple-500/10 rounded-lg
                                                text-white placeholder-gray-400 focus:outline-none focus:border-purple-500/30
                                                transition-colors duration-300"
                                        placeholder="your@email.com"
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                                    Subject
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    required
                                    className="w-full px-4 py-3 bg-white/5 border border-purple-500/10 rounded-lg
                                            text-white placeholder-gray-400 focus:outline-none focus:border-purple-500/30
                                            transition-colors duration-300"
                                    placeholder="Message subject"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    rows={4}
                                    className="w-full px-4 py-3 bg-white/5 border border-purple-500/10 rounded-lg
                                            text-white placeholder-gray-400 focus:outline-none focus:border-purple-500/30
                                            transition-colors duration-300 resize-none"
                                    placeholder="Your message"
                                />
                            </div>
                                <PrimaryButton
                                    type="submit"
                                    className="w-full flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                                    {isSubmitting ? 'Sending...' : 'Send Message'}
                                </PrimaryButton>
                        </form>
                    </motion.div>

                    {/* Contact Info & Social Links */}
                    <motion.div
                        variants={fadeInUp}
                        custom={0.3}
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                        className="space-y-8"
                    >
                        {/* Contact Info Cards */}
                        <div className="space-y-4">
                            {contactInfo.map((info, index) => (
                                <motion.a
                                    key={index}
                                    href={info.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    variants={fadeInUp}
                                    custom={0.4 + index * 0.1}
                                    initial="hidden"
                                    animate={inView ? "visible" : "hidden"}
                                    className="flex items-start gap-4 p-6 bg-white/5 backdrop-blur-sm rounded-xl
                                            border border-purple-500/10 hover:border-purple-500/20 transition-all duration-300
                                            group"
                                >
                                    <div className="p-3 bg-purple-500/10 rounded-lg group-hover:bg-purple-500/20
                                                transition-colors duration-300">
                                        {info.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-white font-medium mb-1">{info.title}</h3>
                                        <p className="text-gray-400 group-hover:text-purple-400 transition-colors duration-300">
                                            {info.value}
                                        </p>
                                    </div>
                                </motion.a>
                            ))}
                        </div>

                        {/* Social Links */}
                        <div className="pt-8">
                            <h3 className="text-xl font-bold text-white mb-6">Connect With Me</h3>
                            <div className="flex flex-wrap gap-4">
                                {socialLinks.map((social, index) => (
                                    <motion.a
                                        key={index}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        variants={fadeInUp}
                                        custom={0.5 + index * 0.1}
                                        initial="hidden"
                                        animate={inView ? "visible" : "hidden"}
                                        className="group p-4 bg-white/5 backdrop-blur-sm rounded-xl
                                                border border-purple-500/10 hover:border-purple-500/20
                                                transition-all duration-300"
                                    >
                                        <div className="text-white/60 group-hover:text-purple-400 transition-colors duration-300">
                                            {social.icon}
                                        </div>
                                        <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-2 py-1
                                                    bg-black/80 text-white text-xs rounded opacity-0
                                                    group-hover:opacity-100 transition-opacity duration-200
                                                    whitespace-nowrap">
                                            {social.label}
                                        </span>
                                    </motion.a>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

export default Contact;