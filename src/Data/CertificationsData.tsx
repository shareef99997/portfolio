import ibm from '../Assets/ibm.png';
import datacamp from '../Assets/datacamp.jpeg';
import pl300 from '../Assets/pl300.webp';
import { useLanguage } from "../Context/LanguageContext";

const certificationsData = {
    en: [
        {
            title: "Power BI Data Analyst Associate",
            issuer: "Microsoft",
            date: "2025",
            badgeImage: pl300,
            credentialUrl: "#",
            code: "#564,658"
        },
        {
            title: "Data Analytics Professional",
            issuer: "IBM",
            date: "2025",
            badgeImage: ibm,
            credentialUrl: "#",
            code: "#564,658"
        },
        {
            title: "Associate Data Analyst in Python",
            issuer: "DataCamp",
            date: "2025",
            badgeImage: datacamp,
            credentialUrl: "#",
            code: "#564,658"
        }
    ],
    ar: [
        {
            title: "محلل بيانات Power BI",
            issuer: "Microsoft",
            date: "2025",
            badgeImage: pl300,
            credentialUrl: "#",
            code: "#564,658"
        },
        {
            title: "محلل بيانات احترافي",
            issuer: "IBM",
            date: "2025",
            badgeImage: ibm,
            credentialUrl: "#",
            code: "#564,658"
        },
        {
            title: "محلل بيانات مشارك في Python",
            issuer: "DataCamp",
            date: "2025",
            badgeImage: datacamp,
            credentialUrl: "#",
            code: "#564,658"
        }
    ]
};

export const useCertificationsData = () => {
    const { language } = useLanguage();
    return certificationsData[language];
};