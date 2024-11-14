import profile_image from '../../assets/personal_image.png'
import { FiGithub } from "react-icons/fi";
import { AiFillLinkedin, AiOutlineHome } from "react-icons/ai";
import { BsWhatsapp } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import TextTransition, { presets } from 'react-text-transition';
import { useState, useEffect } from 'react';
import CountUp from 'react-countup';
import Section_Header from '../../components/section_header';
import CV from'../../assets/Shareefs_CV.pdf'
const titles = ['Data Analyst', 'Frontend Developer', 'Business Intelligence Analyst'];


function Hero_EN(){
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => setIndex((prevIndex) => prevIndex + 1), 3000);
        return () => clearInterval(intervalId); // Improved cleanup
    }, []);
    
    return(
        // hero section
        <div className="flex flex-col lg:flex-row gap-10 section p-10 min-h-screen overflow-hidden">

            {/* Shareef's Profile Card */}
            <div className='flex flex-col gap-8'>
                <Section_Header title="Introduction" icon={AiOutlineHome} />
                <div className='flex flex-col gap-8 items-center border border-border rounded-3xl p-8'>
                    {/* Name and Image */}
                    <div className="flex flex-col gap-6 ">
                        <div className='flex flex-col justify-between items-center'>
                            <h1 className="text-[1.8rem] text-text">Shareef Huzaifa</h1>
                            <h2 className="text-[1rem] text-primary"><TextTransition springConfig={presets.wobbly}>{titles[index % titles.length]}</TextTransition></h2>
                        </div>
                        <img className="w-64 rounded-2xl object-cover self-center" src={profile_image} alt="Shareef's Profile Pic"/>
                    </div>
                    
                    {/* Address - Email */}
                    <div className='flex flex-col items-center gap-1'>
                        {/* Email */}
                        <a href="mailto:shareef.99997@gmail.com">
                            <button className="text-[1.4rem]  hover:text-primary trans font-sans">
                            Shareef.99997@gmail.com
                            </button>
                        </a>
                        {/* Address - Contact Number */}
                        <h2 className='text-text-light text-[0.9rem]'><span className='font-sans'>+966 58 263 5947</span> - Riyadh, Saudi Arabia</h2>
                    </div>
                    <h2 className='text-text-light text-description font-sans'>© 2024 Shareef. All Rights Reserved</h2>

                    {/* Social Media Icons */}
                    <div className="flex justify-center gap-2">
                        <a href="https://api.whatsapp.com/send?phone=966582635947&text=Hello%20Shareef%20%F0%9F%91%8B" 
                        className="social-icon" aria-label="WhatsApp">
                            <BsWhatsapp className="text-2xl" />
                        </a>
                        <a href="mailto:shareef.99997@gmail.com" 
                        className="social-icon" aria-label="Email">
                            <MdEmail className="text-2xl" />
                        </a>
                        <a href="https://www.linkedin.com/in/shareef-ali" 
                        className="social-icon" aria-label="LinkedIn">
                            <AiFillLinkedin className="text-2xl" />
                        </a>
                        <a href="https://github.com/shareef99997" 
                        className="social-icon" aria-label="GitHub">
                            <FiGithub className="text-2xl" />
                        </a>
                    </div>
                    {/* Resume Button */}
                    <a href={CV} download={"Shareef's CV"} target="_blank" className="text-xl hover:text-primary trans w-full">
                        <button className="text-lg border-[0.15rem] border-primary  rounded-full bg-primary text-background hover:text-primary hover:bg-background trans w-full py-2">
                            Download CV
                        </button>
                    </a>
                   

                </div>
  
            </div>
            {/* Shareef's Introduction */}
            <div className='flex flex-col gap-10 pt-12'>
                {/* Section Headline */}
                <h1 className='text-text text-Header lg:text-[4rem] '>
                    Transforming <span className='text-primary'>Data</span> into Insight, <span className='text-primary'>Code</span> into Creativity, and <span className='text-primary'>Problems</span> into Solutions!
                </h1>
                {/* small description */}
                <p className='text-text-light  text-description'>
                Bringing <span className='text-primary'>Data</span> to Life through Insight and Design.
                </p>
                {/* Accomplishments Numbers */}
                <div className=' flex gap-10'>
                    <div>
                        <span className='text-primary text-Headline'><CountUp start={0} end={2}/>+</span>
                        <h2 className='text-text-light  text-title'>Years of Experience</h2>
                    </div>
                    
                    <div>
                        <span className='text-primary text-Headline'><CountUp start={0} end={10}/>+</span>    
                        <h2 className='text-text-light  text-title'>Projects Completed</h2>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Hero_EN;