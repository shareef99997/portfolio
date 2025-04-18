import datacamp from "../assets/datacamp.jpeg";
import { useLanguage } from "../Context/LanguageContext";

const resumeData = {
    en: {
        workExperience: [
            {
                title: "Business Intelligence Analyst",
                company: "Orpheous",
                period: "2024/09 - Present",
                companyLogo: datacamp,
                description: "Led data analysis initiatives and created interactive Power BI dashboards for business insights.",
                highlights: [
                    "Developed and maintained Power BI reports and dashboards",
                    "Performed ETL processes using Python and SQL",
                    "Automated reporting processes saving 10+ hours weekly"
                ]
            },
            {
                title: "Software Developer",
                company: "Freelance",
                period: "2022/12 - 2024/09",
                companyLogo: datacamp,
                description: "Developed web applications and automated solutions for clients.",
                highlights: [
                    "Built responsive web applications using React",
                    "Created automation scripts using Python",
                    "Implemented data visualization solutions"
                ]
            },
            {
                title: "Software Developer",
                company: "Freelance",
                period: "2023/01 - 2023/06",
                companyLogo: datacamp,
                description: "Developed web applications and automated solutions for clients.",
                highlights: [
                    "Built responsive web applications using React",
                    "Created automation scripts using Python",
                    "Implemented data visualization solutions"
                ]
            }
        ],
        education: [
            {
                degree: "Bachelor of Science in Information Technology",
                institution: "Sudan University of Science and Technology",
                period: "2019 - 2023",
                institutionLogo: datacamp,
                credentialUrl: "#",
                description: "Focused on software development, database management, and data analysis."
            }
        ],
        courses: [
            {
                title: "Advanced SQL",
                platform: "DataCamp",
                date: "2024",
                hours: 36,
                platformLogo: datacamp,
                credentialUrl: "#",
                description: "Mastered complex SQL queries, window functions, and database optimization techniques"
            },
            {
                title: "Power BI for Business Intelligence",
                platform: "Udemy",
                date: "2025",
                hours: 50,
                platformLogo: datacamp,
                credentialUrl: "#",
                description: "Comprehensive course on Power BI development, DAX, and data modeling"
            },
            {
                title: "Python for Data Science",
                platform: "Coursera",
                date: "2025",
                hours: 40,
                platformLogo: datacamp,
                credentialUrl: "#",
                description: "Data manipulation, analysis, and visualization using Python libraries"
            },
            {
                title: "Python for Data Science",
                platform: "Coursera",
                date: "2025",
                hours: 40,
                platformLogo: datacamp,
                credentialUrl: "#",
                description: "Data manipulation, analysis, and visualization using Python libraries"
            },
            {
                title: "Python for Data Science",
                platform: "Coursera",
                date: "2025",
                hours: 40,
                platformLogo: datacamp,
                credentialUrl: "#",
                description: "Data manipulation, analysis, and visualization using Python libraries"
            },
        ]
    },
    ar: {
        workExperience: [
            {
                title: "محلل ذكاء الأعمال",
                company: "أورفيوس",
                period: "2024/09 - حاليا",
                companyLogo: datacamp,
                description: "قاد مبادرات تحليل البيانات وأنشأ لوحات معلومات Power BI تفاعلية لرؤى الأعمال.",
                highlights: [
                    "تطوير وصيانة تقارير ولوحات معلومات Power BI",
                    "تنفيذ عمليات ETL باستخدام Python وSQL",
                    "أتمتة عمليات إعداد التقارير مما يوفر أكثر من 10 ساعات أسبوعياً"
                ]
            },
            {
                title: "مطور برمجيات",
                company: "عمل حر",
                period: "2022/12 - 2024/09",
                companyLogo: datacamp,
                description: "تطوير تطبيقات الويب وحلول الأتمتة للعملاء.",
                highlights: [
                    "بناء تطبيقات ويب متجاوبة باستخدام React",
                    "إنشاء نصوص أتمتة باستخدام Python",
                    "تنفيذ حلول تصور البيانات"
                ]
            },
            {
                title: "مطور برمجيات",
                company: "عمل حر",
                period: "2023/01 - 2023/06",
                companyLogo: datacamp,
                description: "تطوير تطبيقات الويب وحلول الأتمتة للعملاء.",
                highlights: [
                    "بناء تطبيقات ويب متجاوبة باستخدام React",
                    "إنشاء نصوص أتمتة باستخدام Python",
                    "تنفيذ حلول تصور البيانات"
                ]
            }
        ],
        education: [
            {
                degree: "بكالوريوس علوم في تقنية المعلومات",
                institution: "جامعة السودان للعلوم والتكنولوجيا",
                period: "2019 - 2023",
                institutionLogo: datacamp,
                credentialUrl: "#",
                description: "ركز على تطوير البرمجيات، وإدارة قواعد البيانات، وتحليل البيانات."
            }
        ],
        courses: [
            {
                title: "SQL المتقدم",
                platform: "DataCamp",
                date: "2024",
                hours: 36,
                platformLogo: datacamp,
                credentialUrl: "#",
                description: "إتقان استعلامات SQL المعقدة، ودوال النافذة، وتقنيات تحسين قواعد البيانات"
            },
            {
                title: "Power BI لذكاء الأعمال",
                platform: "Udemy",
                date: "2025",
                hours: 50,
                platformLogo: datacamp,
                credentialUrl: "#",
                description: "دورة شاملة في تطوير Power BI، وDAX، ونمذجة البيانات"
            },
            {
                title: "Python لعلوم البيانات",
                platform: "Coursera",
                date: "2025",
                hours: 40,
                platformLogo: datacamp,
                credentialUrl: "#",
                description: "معالجة وتحليل وتصور البيانات باستخدام مكتبات Python"
            }
        ]
    }
};

export const useResumeData = () => {
    const { language } = useLanguage();
    return resumeData[language];
};