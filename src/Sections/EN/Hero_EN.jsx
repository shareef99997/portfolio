import profile_image from '../../assets/personal_image.png'

import { FiGithub } from "react-icons/fi";
import { AiFillLinkedin } from "react-icons/ai";
import { BsWhatsapp } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
function Hero_EN(){
    return(
        // hero section
        <div className="flex flex-col lg:flex-row section p-6 min-h-screen overflow-hidden">

            {/* Shareef's Profile Card */}
            <div className='flex flex-col justify-center'>
                <div className='flex flex-col gap-8 items-center border border-border rounded-3xl p-6'>
                    {/* Name and Image */}
                    <div className="flex flex-col gap-6 ">
                        <div className='flex flex-col justify-between items-center'>
                            <h1 className="text-[1.8rem] font-bold text-text">Shareef Huzaifa</h1>
                            <h2 className="text-[1.2rem] text-primary">Data Analyst</h2>
                        </div>
                        <img className="w-64 rounded-2xl object-cover self-center" src={profile_image} alt="Shareef's Profile Pic"/>
                    </div>
                    
                    {/* Address - Email */}
                    <div className='flex flex-col items-center gap-1'>
                        {/* Email */}
                        <a href="mailto:shareef.99997@gmail.com">
                            <button className="text-[1.4rem] font-[400] hover:text-primary trans font-sans">
                            Shareef.99997@gmail.com
                            </button>
                        </a>
                        {/* Address - Contact Number */}
                        <h2 className='text-text font-[400] text-[1rem]'><span className='font-sans'>+966 58 263 5947</span> - Riyadh, Saudi Arabia</h2>
                    </div>
                    <h2 className='text-text-light font-[500] text-description font-sans'>© 2024 Shareef. All Rights Reserved</h2>
                    {/* Social Media Icons */}
                    <div className="flex justify-center gap-2">
                        <a href="https://api.whatsapp.com/send?phone=966582635947&text=Hello%20Shareef%20%F0%9F%91%8B" className="p-3 flex items-center justify-center border-[0.15rem] border-border rounded-full text-text-light hover:text-primary hover:border-primary trans">
                            <BsWhatsapp className="text-2xl" />
                        </a>
                        <a href="mailto:shareef.99997@gmail.com" className="p-3 flex items-center justify-center border-[0.15rem] border-border rounded-full text-text-light hover:text-primary hover:border-primary trans">
                            <MdEmail className="text-2xl" />
                        </a>
                        <a href="https://www.linkedin.com/in/shareef-ali" className="p-3 flex items-center justify-center border-[0.15rem] border-border rounded-full text-text-light hover:text-primary hover:border-primary trans">
                            <AiFillLinkedin className="text-2xl" />
                        </a>
                        <a href="https://github.com/shareef99997" className="p-3 flex items-center justify-center border-[0.15rem] border-border rounded-full text-text-light hover:text-primary hover:border-primary trans">
                            <FiGithub className="text-2xl" />
                        </a>
                    </div>
                    {/* Resume Button */}
                    <a href="https://www.dropbox.com/s/j9b97c8726d4i9p/Shareef_Huzaifa_Resume_EN.pdf?dl=0" target="_blank" className="text-xl hover:text-primary trans w-full">
                        <button className="text-lg font-semibold border-[0.15rem] border-primary  rounded-full bg-primary text-background hover:text-primary hover:bg-background trans w-full py-2">
                            Download CV
                        </button>
                    </a>
                   

                </div>
  
            </div>
            {/* Shareef's Introduction */}
            <div className=''>
            </div>
        </div>
    )
}

export default Hero_EN;