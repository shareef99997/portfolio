import { HiOutlineBriefcase } from "react-icons/hi";
import Section_Header from "../../components/section_header";
import { PiCertificate } from "react-icons/pi";

function Resume_EN() {

    const workExperience = [
        {
            title: "React Dashboard System",
            startDate: "2023/06",
            endDate: "Present",
            description: "Developed a complex dashboard system for monitoring insurance data, integrating dynamic charts and user authentication features.",
        },
        {
            title: "Flowbite Application UI v2.0.0",
            startDate: "2024/09",
            endDate: "2024/12",
            description: "Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.",
        }
        
    ];
    const Education = [
        {
            title: "React Dashboard System",
            startDate: "2023/06",
            endDate: "2023/08",
            description: "Developed a complex dashboard system for monitoring insurance data, integrating dynamic charts and user authentication features.",
            certificateLink: "#"
        }
    ];

    const Courses = [
        {
            title: "React Dashboard System",
            startDate: "2023/06",
            endDate: "2023/08",
            description: "Developed a complex dashboard system for monitoring insurance data, integrating dynamic charts and user authentication features.",
            certificateLink: "#" 
        },
        {
            title: "Flowbite Application UI v2.0.0",
            startDate: "2024/09",
            endDate: "2024/12",
            description: "Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.",
            certificateLink: "#"
        }
        
    ];

    return (
        <div id="resume" className="section p-10 overflow-hidden flex flex-col gap-10">
            <Section_Header title="Resume" icon={HiOutlineBriefcase} />
            {/* Timelines */}
            <div className="flex w-full justify-between">
                {/* Work Experience */}
                <div className="w-full p-4 flex flex-col gap-5 border-e-[0.1rem] border-text-light">
                    <Section_Header title="Work Experience" icon={HiOutlineBriefcase} />
                    <ol className="relative pt-2  ms-5 border-s border-[#555c54]">
                        {workExperience.map((experience, index) => (
                            <li key={index} className="mb-10 ms-8">
                                <span className="absolute flex items-center justify-center w-6 h-6 bg-green-100 rounded-full -start-3 ring-8 ring-[#3d423c]">
                                    <HiOutlineBriefcase className="text-green-800" />
                                </span>
                                <h3 className="flex items-center mb-1 text-lg font-semibold text-white">
                                    {experience.title}
                                    {experience.endDate === "Present" && (
                                        <span className="bg-primary text-sm font-medium me-2 px-2.5 py-0.5 rounded bg-green-100 text-green-800 ms-3">
                                            Present
                                        </span>
                                    )}
                                </h3>
                                <time className="block mb-2 text-sm font-semibold leading-none text-description">
                                    {experience.startDate} - {experience.endDate}
                                </time>
                                <p className="mb-4 text-base font-normal text-text-light">
                                    {experience.description}
                                </p>
                            </li>
                        ))}
                    </ol>
                </div>
                {/* Learning Section */}
                <div className="flex flex-col w-full">
                    {/* Education */}
                    <div className="w-full p-4 flex flex-col gap-5 border-b-[0.1rem] border-text-light">
                        <Section_Header title="Education" icon={HiOutlineBriefcase} />
                        <ol className="relative  pt-2 ms-5 border-s border-[#555c54]">
                            {Education.map((education, index) => (
                                <li key={index} className="mb-10 ms-8">
                                    <span className="absolute flex items-center justify-center w-6 h-6 bg-green-100 rounded-full -start-3 ring-8 ring-[#3d423c]">
                                        <HiOutlineBriefcase className="text-green-800" />
                                    </span>
                                    <h3 className="flex items-center mb-1 text-lg font-semibold text-white">
                                        {education.title}
                                        {education.endDate === "Present" && (
                                            <span className="bg-primary text-sm font-medium me-2 px-2.5 py-0.5 rounded bg-green-100 text-green-800 ms-3">
                                                Present
                                            </span>
                                        )}
                                    </h3>
                                    <time className="block mb-2 text-sm font-semibold leading-none text-description">
                                        {education.startDate} - {education.endDate}
                                    </time>
                                    <p className="mb-4 text-base font-normal text-text-light">
                                        {education.description}
                                    </p>
                                    {education.certificateLink && (
                                        <a
                                            href={education.certificateLink}
                                            className="inline-flex gap-1 items-center px-4 py-2 text-sm text-primary font-medium rounded-lg border-[0.15rem] border-primary hover:bg-primary hover:text-background trans"
                                        >
                                            <PiCertificate className="text-lg" />
                                            Display Certificate
                                        </a>
                                    )}
                                </li>
                            ))}
                        </ol>
                    </div>
                    {/* Courses */}
                    <div className="w-full p-4 flex flex-col gap-5">
                        <Section_Header title="Courses" icon={HiOutlineBriefcase} />
                        <ol className="relative  pt-2 ms-5 border-s border-[#555c54]">
                            {Courses.map((course, index) => (
                                <li key={index} className="mb-10 ms-6">
                                    <span className="absolute flex items-center justify-center w-6 h-6 bg-green-100 rounded-full -start-3 ring-8 ring-[#3d423c]">
                                        <HiOutlineBriefcase className="text-green-800" />
                                    </span>
                                    <h3 className="flex items-center mb-1 text-lg font-semibold text-white">
                                        {course.title}
                                        {course.endDate === "Present" && (
                                            <span className="bg-primary text-sm font-medium me-2 px-2.5 py-0.5 rounded bg-green-100 text-green-800 ms-3">
                                                Present
                                            </span>
                                        )}
                                    </h3>
                                    <time className="block mb-2 text-sm font-semibold leading-none text-description">
                                        {course.startDate} - {course.endDate}
                                    </time>
                                    <p className="mb-4 text-base font-normal text-text-light">
                                        {course.description}
                                    </p>
                                    {course.certificateLink && (
                                        <a
                                            href={course.certificateLink}
                                            className="inline-flex gap-1 items-center px-4 py-2 text-sm text-primary font-medium rounded-lg border-[0.15rem] border-primary hover:bg-primary hover:text-background trans"
                                        >
                                            <PiCertificate className="text-lg" />
                                            Display Certificate
                                        </a>
                                    )}
                                </li>
                            ))}
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Resume_EN;

