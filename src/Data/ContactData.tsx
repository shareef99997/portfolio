import { useLanguage } from "../Context/LanguageContext";

const contactData = {
    en: {
        title: "Contact Me",
        subtitle: "Let's Work Together",
        name: "Name",
        email: "Email",
        subject: "Subject",
        message: "Message",
        sendMessage: "Send Message",
        sending: "Sending...",
        connectWithMe: "Connect With Me",
        contactInfo: [
            {
                title: "Email",
                value: "Shareef.99997@gmail.com",
                link: "mailto:Shareef.99997@gmail.com"
            },
            {
                title: "Phone",
                value: "+966 582635947",
                link: "tel:+966582635947"
            },
            {
                title: "Location",
                value: "Riyadh, Saudi Arabia",
                link: "https://maps.google.com"
            }
        ]
    },
    ar: {
        title: "تواصل معي",
        subtitle: "دعنا نعمل معاً",
        name: "الاسم",
        email: "البريد الإلكتروني",
        subject: "الموضوع",
        message: "الرسالة",
        sendMessage: "إرسال الرسالة",
        sending: "جاري الإرسال...",
        connectWithMe: "تواصل معي",
        contactInfo: [
            {
                title: "البريد الإلكتروني",
                value: "Shareef.99997@gmail.com",
                link: "mailto:Shareef.99997@gmail.com"
            },
            {
                title: "الهاتف",
                value: "966582635947+",
                link: "tel:+966582635947"
            },
            {
                title: "الموقع",
                value: "الرياض، المملكة العربية السعودية",
                link: "https://maps.google.com"
            }
        ]
    }
};

export const useContactData = () => {
    const { language } = useLanguage();
    return contactData[language];
}; 