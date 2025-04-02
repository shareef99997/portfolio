import { BarChart, Code2, LineChart, MessageSquare, Network, Target, Lightbulb, Users } from "lucide-react";
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



export const technicalSkills = [
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

export const professionalSkills = {
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