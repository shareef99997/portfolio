import { BiBrain } from "react-icons/bi";
import SectionHeader from "../components/SectionHeader";
import react_icon from "../assets/react.svg";


const SkillsSection = () => {

    const DA = [
        { name: "Excel", icon: react_icon},
        { name: "SQL", icon: react_icon },
        { name: "PostgreSQL", icon: react_icon },
        { name: "MySQL", icon: react_icon},
        { name: "Power BI", icon: react_icon },
        { name: "DAX", icon: react_icon },
        { name: "Python", icon: react_icon },
        { name: "Pandas", icon: react_icon },
        { name: "NumPy", icon: react_icon },
    ]

    const SD = [
        { name: "React Js", icon: react_icon },
        { name: "JavaScript", icon: react_icon },
        { name: "TypeScript", icon: react_icon },
        { name: "HTML/CSS", icon: react_icon},
        { name: "Tailwind", icon: react_icon },
        { name: "Flutter", icon: react_icon },
        { name: "WordPress", icon: react_icon},
        { name: "GitHub", icon: react_icon },
        { name: "API", icon: react_icon },
    ]

    const skills = [
        { name: "Problem-Solving", icon: react_icon },
        { name: "Critical Thinking", icon: react_icon },
        { name: "Communication", icon: react_icon },
        { name: "Time Management", icon: react_icon },
        { name: "Data Storytelling", icon: react_icon },
        { name: "Data Visualization", icon: react_icon },
        { name: "Data Modeling", icon: react_icon},
        { name: "Data Cleaning", icon: react_icon},
        { name: "Front-end Development", icon: react_icon },
        { name: "Statistical Analysis", icon: react_icon },
        { name: "Business Intelligence", icon: react_icon },
        { name: "Analytical Thinking", icon:react_icon },
    ];

    return (
        <div id="skills" className="section p-10 overflow-hidden flex flex-col gap-10">
            <SectionHeader title="Skills" icon={BiBrain} />
            {/* Content */}
            <div className="flex flex-col gap-20">

                {/* Tools */}
                <div className="flex gap-10">
                    {/* Software Development */}
                    <div>
                        <div className="flex flex-wrap gap-6">
                            {SD.map((tool) => (
                                <div key={tool.title} className="flex flex-col items-center gap-2">
                                    <img src= {react_icon} alt="" />
                                    <h1 className="text-text text-sm">{tool.name}</h1>
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* Data Analysis */}
                    <div className="flex flex-wrap gap-6">
                        {DA.map((tool) => (
                            <div key={tool.title} className="flex flex-col items-center gap-2">
                                <img src= {react_icon} alt="" />
                                <h1 className="text-text text-sm">{tool.name}</h1>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Skills */}
                <div className="flex flex-col gap-6 p-6 border-[0.2rem] border-border rounded-3xl hover:border-primary trans">
                    <h1 className="text-title text-text">General Skills</h1>
                    <div className="flex flex-wrap gap-6">
                        {skills.map((skill) => (
                            <div key={skill.name} className="flex flex-col items-center gap-2">
                                <img src= {react_icon} alt="" />
                                <h1 className="text-text text-sm">{skill.name}</h1>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </div>
    );
};

export default SkillsSection;
