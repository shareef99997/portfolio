import { BarChart, Code2, LineChart, MessageSquare, Network, Target, Lightbulb, Users } from "lucide-react";
import powerbiIcon from "../Assets/Logos/power_bi_icon.svg";
import excelIcon from "../Assets/Logos/excel.svg";
import sqlIcon from "../Assets/Logos/sql.svg";
import pythonIcon from "../Assets/Logos/python.svg";
import pandasIcon from "../Assets/Logos/pandas.svg";
import numpyIcon from "../Assets/Logos/numpy.svg";
import dax from "../Assets/Logos/dax.svg";
import powerquery from "../Assets/Logos/powerquery.svg";
import seabornIcon from "../Assets/Logos/seaborn.svg";
import matplotlibIcon from "../Assets/Logos/Matplotlib.svg";
import htmlIcon from "../Assets/Logos/html.svg";
import cssIcon from "../Assets/Logos/css.svg";
import javascriptIcon from "../Assets/Logos/javascript.svg";
import flutterIcon from "../Assets/Logos/flutter.svg";
import reactIcon from "../Assets/Logos/react.svg";
import tailwindIcon from "../Assets/Logos/tailwind.svg";
import gitIcon from "../Assets/Logos/git.svg";
import chatgptIcon from "../Assets/Logos/chatgpt.svg";
import postgresqlIcon from "../Assets/Logos/postgresql.svg";
import mysqlIcon from "../Assets/Logos/mysql.svg";
import etlIcon from "../Assets/Logos/etl.svg";
import dataModelingIcon from "../Assets/Logos/data_modeling.svg";
import { useLanguage } from "../Context/LanguageContext";

const skillsData = {
    en: {
        technicalSkills: [
            {
                title: "Data Analysis & Business Intelligence",
                icon: <BarChart className="w-6 h-6 text-slate-400" />,
                description: "Transforming large datasets into strategic insights using advanced analytics, automation, and visual storytelling ",
                technologies: [
                    { name: "Power BI", image: powerbiIcon },
                    { name: "Excel", image: excelIcon },
                    { name: "SQL", image: sqlIcon },
                    { name: "Python", image: pythonIcon },
                    { name: "Pandas", image: pandasIcon },
                    { name: "Matplotlib", image: matplotlibIcon },
                    { name: "Seaborn", image: seabornIcon },
                    { name: "NumPy", image: numpyIcon },
                    { name: "DAX", image: dax }, 
                    { name: "Power Query", image: powerquery },
                    { name: "PostgreSQL", image: postgresqlIcon },
                    { name: "MySQL", image: mysqlIcon },
                    { name: "ETL", image: etlIcon },
                    { name: "Data Modeling", image: dataModelingIcon }
                ]
            },
            {
                title: "Programming & Development",
                icon: <Code2 className="w-6 h-6 text-slate-400" />,
                description: "Building responsive, scalable web and mobile apps using React.js, Flutter, and modern front-end architectures.",
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
        ],
        softSkills: {
            title: "Professional Skills",
            icon: <Users className="w-6 h-6 text-slate-400" />,
            description: "Strong analytical mindset with expertise in problem-solving and data-driven decision making. Effective communication and collaboration skills.",
            technologies: [
                { name: "Analytical Thinking", icon: <LineChart className="sm:w-5 sm:h-5 w-4 h-4" /> },
                { name: "Problem Solving", icon: <Lightbulb className="sm:w-5 sm:h-5 w-4 h-4" /> },
                { name: "Data Visualization", icon: <BarChart className="sm:w-5 sm:h-5 w-4 h-4" /> },
                { name: "Critical Analysis", icon: <Target className="sm:w-5 sm:h-5 w-4 h-4" /> },
                { name: "Communication", icon: <MessageSquare className="sm:w-5 sm:h-5 w-4 h-4" /> },
                { name: "Team Collaboration", icon: <Network className="sm:w-5 sm:h-5 w-4 h-4" /> }
            ]
        }
    },
    ar: {
        technicalSkills: [
          {
            title: "تحليل البيانات وذكاء الأعمال",
            icon: <BarChart className="w-6 h-6 text-slate-400" />,
            description:
              "تحويل البيانات إلى رؤى استراتيجية مع التحليل المتقدم، والأتمتة، وسرد البيانات بصريًا.",
            technologies: [
              { name: "Power BI", image: powerbiIcon },
              { name: "Excel", image: excelIcon },
              { name: "SQL", image: sqlIcon },
              { name: "Python", image: pythonIcon },
              { name: "Pandas", image: pandasIcon },
              { name: "NumPy", image: numpyIcon },
              { name: "Matplotlib", image: matplotlibIcon },
              { name: "Seaborn", image: seabornIcon },
              { name: "DAX", image: dax },
              { name: "Power Query", image: powerquery },
              { name: "PostgreSQL", image: postgresqlIcon },
              { name: "MySQL", image: mysqlIcon },
              { name: "ETL", image: etlIcon },
              { name: "نمذجة البيانات", image: dataModelingIcon }
            ]
          },
          {
            title: "البرمجة والتطوير",
            icon: <Code2 className="w-6 h-6 text-slate-400" />,
            description:
              "بناء تطبيقات ويب وموبايل متجاوبة وقابلة للتوسّع باستخدام React.js وFlutter وهياكل حديثة للواجهة الأمامية.",
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
        ],
        softSkills: {
          title: "المهارات المهنية",
          icon: <Users className="w-6 h-6 text-slate-400" />,
          description:
            "ذهن تحليلي قوي وخبرة في حل المشكلات واتخاذ قرارات مدعومة بالبيانات. متمكن في التواصل والعمل الجماعي.",
          technologies: [
            { name: "التفكير التحليلي", icon: <LineChart className="w-5 h-5" /> },
            { name: "حل المشكلات", icon: <Lightbulb className="w-5 h-5" /> },
            { name: "تصور البيانات", icon: <BarChart className="w-5 h-5" /> },
            { name: "التحليل النقدي", icon: <Target className="w-5 h-5" /> },
            { name: "التواصل", icon: <MessageSquare className="w-5 h-5" /> },
            { name: "التعاون الجماعي", icon: <Network className="w-5 h-5" /> }
          ]
        }
      }
      
};

export const useSkillsData = () => {
    const { language } = useLanguage();
    return skillsData[language];
};