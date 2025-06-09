import taheiya from "../Assets/Logos/taheiya_logo.jpeg";
import quantum from "../Assets/Logos/quantum_security_systems_logo.jpeg";
import freelance from "../Assets/Logos/freelancer.png";
import datacamp from "../Assets/Logos/datacamp.jpeg";
import coursera from "../Assets/Logos/Coursera.png";
import misk from "../Assets/Logos/misk.jpeg"
import { useLanguage } from "../Context/LanguageContext";

// Import courses PDFs
import advancedSQL from "../Assets/Credentials/Courses/Associate Data Analyst in SQL/Statement of Accomplishment.pdf";
import powerbicoursera from "../Assets/Credentials/Courses/Microsoft Power BI Data Analyst/Certificate.pdf";
import miskvirtual from "../Assets/Credentials/Courses/Misk Data Analysis Cource/certificate.pdf";
import dataCampPython from "../Assets/Credentials/Courses/Data Analyst in Python/certificate.pdf";
import dataCampPowerBi from "../Assets/Credentials/Courses/Data Analyst in Power BI/Statement of Accomplishment.pdf";
import aouLogo from "../Assets/Logos/aou.jpeg"
// Import College Degree
import AOUCert from "../Assets/Credentials/Bachelor Degree/Certificate.pdf"
const resumeData = {
    en: {
        workExperience: [
            {
                title: "Front-End Developer",
                company: "Taheiya",
                period: "Sep 2024 – Present",
                companyLogo: taheiya,
                description:
                    "Built the frontend for a large-scale Broker Insurance Platform — the company's main product — using React.js and modern UI practices.",
                highlights: [
                    "Implemented a complex frontend architecture for a professional insurance system",
                    "Collaborated closely with backend developers to integrate and test features",
                    "Initiated and developed a Power BI dashboard for motor insurance claims as a side innovation",
                ],
            },
            {
                title: "Freelance Data Analyst / Software Developer",
                company: "Independent",
                period: "Dec 2022 – Sep 2025",
                companyLogo: freelance,
                description:
                    "Delivered data analysis and web development solutions across 11+ projects, focusing on insights, dashboards, and applications.",
                highlights: [
                    "Built full-scale Power BI dashboards and Excel reports using real-world datasets",
                    "Used SQL to clean, transform, and analyze data for storytelling and insights",
                    "Developed modern websites and mobile apps using React.js and Flutter",
                ],
            },
            {
                title: "Software Developer – COOP Training",
                company: "Quantum Security Systems",
                period: "Feb 2023 – May 2023",
                companyLogo: quantum,
                description:
                    "Collaborated with the cybersecurity team to automate threat-handling processes and enhance security operations.",
                highlights: [
                    "Built Python scripts to automate email spam detection, improving efficiency by 30%",
                    "Streamlined repetitive workflows to support the team's security response",
                    "Applied programming skills in a real-world cybersecurity environment",
                ],
            },
            
            
          ],
        education: [
            {
                degree: "Bachelor of Information Technology and Computing",
                institution: "Arab Open University",
                period: "2019 - 2023",
                institutionLogo: aouLogo,
                credentialUrl: "",
                credentialFile: AOUCert,
                description: ""
            }
        ],
        courses: [
            {
              title: "Microsoft Power BI Data Analyst",
              platform: "Coursera",
              date: "MAY 2025",
              hours: 160,
              platformLogo: coursera,
              credentialUrl: "https://coursera.org/verify/professional-cert/IDLIMBH9TTZ6",
              credentialFile: powerbicoursera,
              description: "Comprehensive certification program covering Power BI, data modeling, DAX, and real-world business intelligence use cases."
            },
            {
              title: "Data Analyst Virtual Experience",
              platform: "Misk",
              date: "JUN 2025",
              hours: 7,
              platformLogo: misk,
              credentialUrl: "",
              credentialFile: miskvirtual,
              description: "Completed a virtual internship with STC simulating real data analysis tasks, focusing on Excel, Power BI, and business insights."
            },
            {
              title: "Associate Data Analyst in SQL",
              platform: "DataCamp",
              date: "DEC 2024",
              hours: 39,
              platformLogo: datacamp,
              credentialUrl: "https://www.datacamp.com/completed/statement-of-accomplishment/track/2f2787534b1ef4f4d175d0dba44a3c3f95ab9493",
              credentialFile: advancedSQL,
              description: "Mastered SQL queries, joins, CTEs, subqueries, and performance optimization for structured business data."
            },
            {
              title: "Data Analyst in Power BI",
              platform: "DataCamp",
              date: "FEB 2025",
              hours: 50,
              platformLogo: datacamp,
              credentialUrl: "https://www.datacamp.com/completed/statement-of-accomplishment/track/be6f39662e566316bdfb5e038075817b46681ee0",
              credentialFile: dataCampPowerBi,
              description: "Developed Power BI dashboards, applied advanced DAX, and built interactive reports for real-world datasets."
            },
            {
              title: "Data Analyst in Python",
              platform: "DataCamp",
              date: "MAR 2025",
              hours: 36,
              platformLogo: datacamp,
              credentialUrl: "https://www.datacamp.com/completed/statement-of-accomplishment/track/33d7166c8a5de4d29cc7fd0fa00d2ec997535495",
              credentialFile: dataCampPython,
              description: "Learned data cleaning, analysis, and visualization using Python libraries like pandas, matplotlib, and seaborn."
            },
          ]
          
    },
    ar: {
        workExperience: [
            {
                title: "مطور واجهات أمامية",
                company: "تهيئة لتقنية نظم المعلومات ",
                period: "سبتمبر 2024 – حتى الآن",
                companyLogo: taheiya,
                description:
                  "قمت ببناء الواجهة الأمامية لمنصة وساطة تأمينية رئيسية باستخدام React.js، والتي تعد من المشاريع الأساسية للشركة.",
                highlights: [
                  "صممت هيكلًا معقدًا للواجهة الأمامية باستخدام تقنيات حديثة",
                  "تعاونت مع فريق الباك إند لتنفيذ وتكامل الخصائص بنجاح",
                  "نفذت مشروعًا جانبيًا مبتكرًا: لوحة معلومات Power BI لمطالبات التأمين على المركبات",
                ],
            },
            {
              title: "محلل بيانات / مطور برمجيات حر",
              company: "عمل حر",
              period: "ديسمبر 2022 – سبتمبر 2025",
              companyLogo: freelance,
              description:
                "قدمت حلولًا في تحليل البيانات وتطوير البرمجيات لأكثر من 11 مشروعًا، مع التركيز على بناء لوحات المعلومات والتقارير والتطبيقات.",
              highlights: [
                "أنشأت لوحات تحكم متكاملة باستخدام Power BI وتقارير تفاعلية عبر Excel",
                "استخدمت SQL لتنظيف البيانات وتحليلها واستخراج الرؤى",
                "طورت مواقع إلكترونية وتطبيقات باستخدام React.js وFlutter",
              ],
            },          
            {
                title: "مطور برمجيات – تدريب تعاوني",
                company: "نظم الأمن الكمومي",
                period: "فبراير 2023 – مايو 2023",
                companyLogo: quantum,
                description:
                  "تعاونت مع فريق الأمن السيبراني لأتمتة عمليات التعامل مع التهديدات وتعزيز كفاءة العمليات الأمنية.",
                highlights: [
                  "طورت سكربتات بايثون لاكتشاف الرسائل المزعجة تلقائيًا، مما أدى إلى تحسين الكفاءة بنسبة 30%",
                  "قمت بأتمتة المهام المتكررة لدعم سرعة استجابة الفريق الأمني",
                  "طبقت مهارات البرمجة في بيئة عمل حقيقية في مجال الأمن السيبراني",
                ],
            },
          ],
          education: [
            {
                degree: "بكالوريوس تقنية معلومات و حوسبة",
                institution: "Arab Open University",
                period: "2019 - 2023",
                institutionLogo: aouLogo,
                credentialUrl: "",
                credentialFile: AOUCert,
                description: ""
            }
        ],
        courses: [
            {
              title: "محلل بيانات باستخدام Power BI",
              platform: "Coursera",
              date: "مايو 2025",
              hours: 160,
              platformLogo: coursera,
              credentialUrl: "https://coursera.org/verify/professional-cert/IDLIMBH9TTZ6",
              credentialFile: powerbicoursera,
              description: "برنامج شامل يغطي Power BI، نمذجة البيانات، DAX، وتطبيقات واقعية في ذكاء الأعمال."
            },
            {
              title: "الخبرة الافتراضية كمحلل بيانات",
              platform: "مسك",
              date: "يونيو 2025",
              hours: 7,
              platformLogo: misk,
              credentialUrl: "",
              credentialFile: miskvirtual,
              description: "تدريب افتراضي مع STC يحاكي مهام تحليل البيانات الواقعية باستخدام Excel وPower BI لاستخلاص الرؤى التجارية."
            },
            {
              title: "محلل بيانات مشارك في SQL",
              platform: "DataCamp",
              date: "ديسمبر 2024",
              hours: 39,
              platformLogo: datacamp,
              credentialUrl: "https://www.datacamp.com/completed/statement-of-accomplishment/track/2f2787534b1ef4f4d175d0dba44a3c3f95ab9493",
              credentialFile: advancedSQL,
              description: "تم إتقان الاستعلامات المعقدة باستخدام SQL، بما في ذلك الربط، وCTEs، والاستعلامات الفرعية وتحسين الأداء."
            },
            {
              title: "محلل بيانات باستخدام Power BI",
              platform: "DataCamp",
              date: "فبراير 2025",
              hours: 50,
              platformLogo: datacamp,
              credentialUrl: "https://www.datacamp.com/completed/statement-of-accomplishment/track/be6f39662e566316bdfb5e038075817b46681ee0",
              credentialFile: dataCampPowerBi,
              description: "تم تطوير لوحات تحكم باستخدام Power BI، وتطبيق DAX المتقدم، وبناء تقارير تفاعلية على مجموعات بيانات حقيقية."
            },
            {
              title: "محلل بيانات باستخدام Python",
              platform: "DataCamp",
              date: "مارس 2025",
              hours: 36,
              platformLogo: datacamp,
              credentialUrl: "https://www.datacamp.com/completed/statement-of-accomplishment/track/33d7166c8a5de4d29cc7fd0fa00d2ec997535495",
              credentialFile: dataCampPython,
              description: "تم تعلم تنظيف البيانات وتحليلها وتصورها باستخدام مكتبات Python مثل pandas وmatplotlib وseaborn."
            },
          ]
          
    }
};

export const useResumeData = () => {
    const { language } = useLanguage();
    return resumeData[language];
};