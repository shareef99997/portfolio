import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { 
    BarChart, 
    Code2, 
    Brain, 
    MessageSquare,
    Lightbulb,
    Users,
    Target,
    LineChart,
    Database,
    Cpu,
    Network,
    Server
} from "lucide-react";
import SectionHeader from "../Components/SectionHeader";
import powerbiIcon from "../Assets/power_bi_icon.svg";
import excelIcon from "../Assets/excel.svg";
import sqlIcon from "../Assets/sql.svg";
import pythonIcon from "../Assets/python.svg";
import pandasIcon from "../Assets/pandas.svg";
import numpyIcon from "../Assets/numpy.svg";
import matplotlibIcon from "../Assets/seaborn.svg";
import htmlIcon from "../Assets/html.svg";
import cssIcon from "../Assets/css.svg";
import javascriptIcon from "../Assets/javascript.svg";
import flutterIcon from "../Assets/flutter.svg";
import reactIcon from "../Assets/react.svg";
import tailwindIcon from "../Assets/tailwind.svg";
import gitIcon from "../assets/git.svg";
import chatgptIcon from "../Assets/chatgpt.svg";
import postgresqlIcon from "../Assets/postgresql.svg";
import mysqlIcon from "../Assets/mysql.svg";
import etlIcon from "../Assets/etl.svg";
import dataModelingIcon from "../Assets/data_modeling.svg";

type ImageTechnology = {
    name: string;
    image: string;
};

type IconTechnology = {
    name: string;
    icon: JSX.Element;
};

type Technology = ImageTechnology | IconTechnology;

type SkillCategory = {
    title: string;
    icon: JSX.Element;
    description: string;
    technologies: Technology[];
};

type ProfessionalSkills = {
    title: string;
    icon: JSX.Element;
    description: string;
    technologies: IconTechnology[];
};

function isImageTechnology(tech: Technology): tech is ImageTechnology {
    return 'image' in tech;
}

function isIconTechnology(tech: Technology): tech is IconTechnology {
    return 'icon' in tech;
}

function Skills() {
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

    const technicalSkills = [
        {
            title: "Data Analysis & Business Intelligence",
            icon: <BarChart className="w-6 h-6 text-purple-400" />,
            description: "Transforming complex data into actionable insights through advanced analytics and visualization. Building scalable systems for data-driven decision making.",
            technologies: [
                { name: "Power BI", image: powerbiIcon },
                { name: "Excel", image: excelIcon },
                { name: "SQL", image: sqlIcon },
                { name: "Python", image: pythonIcon },
                { name: "Pandas", image: pandasIcon },
                { name: "NumPy", image: numpyIcon },
                { name: "Matplotlib", image: matplotlibIcon },
                { name: "PostgreSQL", image: postgresqlIcon },
                { name: "MySQL", image: mysqlIcon },
                { name: "ETL", image: etlIcon },
                { name: "Data Modeling", image: dataModelingIcon }
            ]
        },
        {
            title: "Programming & Development",
            icon: <Code2 className="w-6 h-6 text-purple-400" />,
            description: "Creating elegant solutions through modern development practices. Building responsive applications with clean, maintainable code.",
            technologies: [
                { name: "HTML", image: htmlIcon },
                { name: "CSS", image: cssIcon },
                { name: "JavaScript", image: javascriptIcon },
                { name: "Flutter", image: flutterIcon },
                { name: "React", image: reactIcon },
                { name: "Tailwind CSS", image: tailwindIcon },
                { name: "Git", image: gitIcon },
                { name: "ChatGPT", image: chatgptIcon }
            ]
        }
    ];

    const professionalSkills: ProfessionalSkills = {
        title: "Professional Skills",
        icon: <Users className="w-6 h-6 text-purple-400" />,
        description: "Strong analytical mindset with expertise in problem-solving and data-driven decision making. Effective communication and collaboration skills.",
        technologies: [
            { name: "Analytical Thinking", icon: <LineChart className="w-5 h-5" /> },
            { name: "Problem Solving", icon: <Lightbulb className="w-5 h-5" /> },
            { name: "Data Visualization", icon: <BarChart className="w-5 h-5" /> },
            { name: "Critical Analysis", icon: <Target className="w-5 h-5" /> },
            { name: "Communication", icon: <MessageSquare className="w-5 h-5" /> },
            { name: "Team Collaboration", icon: <Network className="w-5 h-5" /> }
        ]
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
                        title="Skills & Expertise" 
                        icon={Brain}
                        className="mx-auto mb-4"
                    />
                    <h2 className="text-3xl sm:text-4xl font-bold text-white">
                        Professional Competencies
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
                                            <div className="w-5 h-5 rounded-lg overflow-hidden">
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
                                        <span className="text-white/90 text-sm group-hover:text-purple-400 
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
                        {professionalSkills.icon}
                        <h3 className="text-xl font-bold text-white">{professionalSkills.title}</h3>
                    </div>
                    <p className="text-gray-300 mb-6">{professionalSkills.description}</p>
                    <div className="flex flex-wrap gap-3">
                        {professionalSkills.technologies.map((tech, techIndex) => (
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
                                <span className="text-white/90 text-sm group-hover:text-purple-400 
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
