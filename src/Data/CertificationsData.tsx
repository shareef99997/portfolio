import ibm from '../Assets/Logos/ibm.png';
import datacamp from '../Assets/Logos/da_associate_badge.png';
import pl300 from '../Assets/Logos/pl300.webp';
import { useLanguage } from "../Context/LanguageContext";

// Credentials Files
import pl300file from "../Assets/Info/Certificates/Power BI Data Analyst Associate/Certificate.pdf"
import ibmfile from "../Assets/Info/Certificates/IBM Data Analyst/Certificate.pdf"
import datacampfile from "../Assets/Info/Certificates/Data Analyst Associate certificate/Data Analyst Associate certificate.pdf"

const certificationsData = {
    en: [
        {
            title: "Power BI Data Analyst Associate",
            issuer: "Microsoft",
            date: "JUNE 2025",
            badgeImage: pl300,
            credentialUrl: "https://learn.microsoft.com/api/credentials/share/en-us/shareefhuzaifa-7261/DDE2E627E5550ED6?sharingId=1907D5D7D8025816",
            credentialFile: pl300file,
            code: "DDE2E627E5550ED6"
        },
        {
            title: "Data Analytics Professional",
            issuer: "IBM",
            date: "APR 2025",
            badgeImage: ibm,
            credentialUrl: "https://coursera.org/verify/professional-cert/IDLIMBH9TTZ6",
            credentialFile: ibmfile,
            code: ""
        },
        {
            title: "Associate Data Analyst in Python",
            issuer: "DataCamp",
            date: "APR 2025",
            badgeImage: datacamp,
            credentialUrl: "https://www.datacamp.com/certificate/DAA0011169004702",
            credentialFile: datacampfile,
            code: "DAA0011169004702"
        }
    ],
    ar: [
        {
            title: "محلل بيانات Power BI",
            issuer: "Microsoft",
            date: "يونيو 2025",
            badgeImage: pl300,
            credentialUrl: "https://learn.microsoft.com/api/credentials/share/en-us/shareefhuzaifa-7261/DDE2E627E5550ED6?sharingId=1907D5D7D8025816",
            credentialFile: pl300file,
            code: "DDE2E627E5550ED6"
        },
        {
            title: "محلل بيانات احترافي",
            issuer: "IBM",
            date: "ابريل 2025",
            badgeImage: ibm,
            credentialUrl: "https://coursera.org/verify/professional-cert/IDLIMBH9TTZ6",
            credentialFile: ibmfile,
            code: ""
        },
        {
            title: "محلل بيانات مشارك",
            issuer: "DataCamp",
            date: "ابريل 2025",
            badgeImage: datacamp,
            credentialUrl: "https://www.datacamp.com/certificate/DAA0011169004702",
            credentialFile: datacampfile,
            code: "DAA0011169004702"
        }
    ]
};

export const useCertificationsData = () => {
    const { language } = useLanguage();
    return certificationsData[language];
};