import datacamp from "../assets/datacamp.jpeg";
import { resumeDataTranslations } from "../translations/resumeData";
import { useLanguage } from "../Context/LanguageContext";

export const useResumeData = () => {
    const { language } = useLanguage();
    const translations = resumeDataTranslations[language];

    return {
        workExperience: [
            {
                title: translations.workExperience.biAnalyst.title,
                company: translations.workExperience.biAnalyst.company,
                period: translations.workExperience.biAnalyst.period,
                companyLogo: datacamp,
                description: translations.workExperience.biAnalyst.description,
                highlights: translations.workExperience.biAnalyst.highlights
            },
            {
                title: translations.workExperience.softwareDev1.title,
                company: translations.workExperience.softwareDev1.company,
                period: translations.workExperience.softwareDev1.period,
                companyLogo: datacamp,
                description: translations.workExperience.softwareDev1.description,
                highlights: translations.workExperience.softwareDev1.highlights
            },
            {
                title: translations.workExperience.softwareDev2.title,
                company: translations.workExperience.softwareDev2.company,
                period: translations.workExperience.softwareDev2.period,
                companyLogo: datacamp,
                description: translations.workExperience.softwareDev2.description,
                highlights: translations.workExperience.softwareDev2.highlights
            }
        ],
        education: [
            {
                degree: translations.education.bachelor.degree,
                institution: translations.education.bachelor.institution,
                period: translations.education.bachelor.period,
                institutionLogo: datacamp,
                credentialUrl: "#",
                description: translations.education.bachelor.description
            }
        ],
        courses: [
            {
                title: translations.courses.sql.title,
                platform: translations.courses.sql.platform,
                date: translations.courses.sql.date,
                hours: translations.courses.sql.hours,
                platformLogo: datacamp,
                credentialUrl: "#",
                description: translations.courses.sql.description
            },
            {
                title: translations.courses.powerBI.title,
                platform: translations.courses.powerBI.platform,
                date: translations.courses.powerBI.date,
                hours: translations.courses.powerBI.hours,
                platformLogo: datacamp,
                credentialUrl: "#",
                description: translations.courses.powerBI.description
            },
            {
                title: translations.courses.python.title,
                platform: translations.courses.python.platform,
                date: translations.courses.python.date,
                hours: translations.courses.python.hours,
                platformLogo: datacamp,
                credentialUrl: "#",
                description: translations.courses.python.description
            }
        ]
    };
};