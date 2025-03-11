import { FiUser } from "react-icons/fi";
import Section_Header from "../components/SectionHeader";
import About_img from "../assets/About-image.png";

function About() {
    return (
        <section id="about" className="section p-10 overflow-hidden flex flex-col gap-10">
            <Section_Header title="About Me" icon={FiUser} />
            <div className="flex flex-col-reverse lg:flex-row gap-10">
                
                {/* About Content */}
                <article className="flex flex-col gap-6 lg:w-[60%]">
                    {/* About Headline */}
                    <header>
                        <h1 className="text-Header text-text">
                            <span className="text-primary">Passionate</span> Data Analyst & Front-End Developer | Crafting Data-Driven <span className="text-primary">Insights</span> and User Experiences
                        </h1>
                    </header>
                    
                    {/* About Description */}
                    <p className="text-text-light text-description leading-relaxed">
                        Experienced Data Analyst with a strong foundation in software development, especially in web and mobile app
                        development. Skilled at transforming complex data into clear, actionable insights using techniques like meticulous data cleaning, organization,
                        and visualization. Known for delivering innovative, user-centered solutions that consistently exceed client expectations.
                    </p>
                    
                    {/* Optional Key Values or Strengths */}
                    <ul className="list-disc pl-5 text-text-light text-description">
                        <li>Analytical and detail-oriented approach to every project</li>
                        <li>Proficient in <span className="text-primary">Data Cleaning</span>, <span className="text-primary">Visualization</span>, <span className="text-primary">Web Development</span></li>
                        <li>Passionate about continuous learning and growth</li>
                    </ul>
                </article>

                {/* About Image */}
                <div className="flex justify-center self-center lg:w-[40%]">
                    <img 
                        className="w-full object-cover rounded-2xl" 
                        src={About_img} 
                        alt="Sharif Ali, Data Analyst and Front-End Developer"
                    />
                </div>
            </div>
        </section>
    );
}

export default About;
