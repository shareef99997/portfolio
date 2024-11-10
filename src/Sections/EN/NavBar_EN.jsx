import { useState, useEffect } from "react";
import { FiMenu, FiX,FiGithub, FiUser,FiMail } from "react-icons/fi";
import { AiFillLinkedin, AiOutlineHome } from "react-icons/ai";
import { HiOutlineBriefcase } from "react-icons/hi";
import { BiBrain } from "react-icons/bi";
import { AiOutlineProject } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { BsWhatsapp } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { GrLanguage } from "react-icons/gr";

function NavBar_EN() {
    const navigate = useNavigate();
    const [isTabletOrMobile, setIsTabletOrMobile] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsTabletOrMobile(window.innerWidth <= 1105);
        };
        
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="fixed justify-between flex flex-col items-center min-h-screen py-10 pe-6 right-0 top-0">
            {/* Sidebar / Language Switcher */}
            {isTabletOrMobile ? (
                <button onClick={toggleSidebar} className="z-10 w-12 h-12 flex items-center justify-center bg-background border border-text-light rounded-full hover:text-primary hover:border-primary trans">
                    {isOpen ? <FiX className="text-xl" /> : <FiMenu className="text-xl" />}
                </button>
            ) : (
                <button onClick={() => navigate("/ar")} className="w-12 h-12 flex items-center justify-center bg-background border border-text-light rounded-full text-text-light hover:text-primary hover:border-primary trans">
                    <span className="text-xl font-semibold">ع</span>
                </button>
            )}

                {/* Sidebar for Tablet or Mobile */}
                {isTabletOrMobile && (
                <motion.div
                    initial={{ x: "100%" }}
                    animate={{ x: isOpen ? 0 : "100%" }}
                    transition={{ type: "spring", stiffness: 300, damping: 40 }}
                    className={`fixed  items-start flex flex-col top-0 right-0 h-full w-[60%] bg-background-gradient border-l border-background shadow-xl gap-32 p-12`}
                >
                    <p className="text-xl font-semibold text-text-light">Menu</p>
                    <ul className="flex flex-col items-start gap-6 text-md text-text-light">
                        <li>
                            <a href="#" onClick={toggleSidebar} className="hover:text-primary trans flex items-center gap-2"><AiOutlineHome className="text-xl" />Home</a>
                        </li>
                        <li>
                            <a href="#about" onClick={toggleSidebar} className="hover:text-primary trans flex items-center gap-2"><FiUser className="text-xl" />About</a>
                        </li>
                        <li>
                            <a href="#resume" onClick={toggleSidebar} className="hover:text-primary trans flex items-center gap-2"><HiOutlineBriefcase className="text-xl" />Resume</a>
                        </li>
                        <li>
                            <a href="#skills" onClick={toggleSidebar} className="hover:text-primary trans flex items-center gap-2"><BiBrain className="text-xl" />Skills</a>
                        </li>
                        <li>
                            <a href="#projects" onClick={toggleSidebar} className="hover:text-primary trans flex items-center gap-2"><AiOutlineProject className="text-xl" />Projects</a>
                        </li>
                        <li>
                            <a href="#contact" onClick={toggleSidebar} className="hover:text-primary trans flex items-center gap-2"><FiMail className="text-xl" />Contact</a>
                        </li>
                        <li>
                            <Link to="/ar" onClick={toggleSidebar} className="hover:text-primary trans flex items-center gap-2 font-semibold"><GrLanguage className="text-xl" />العربية</Link>
                        </li>
                    </ul>
                    {/* social media */}
                    <div className="flex justify-center gap-6">
                        <a href="https://api.whatsapp.com/send?phone=966582635947&text=Hello%20Shareef%20%F0%9F%91%8B" className="text-xl hover:text-primary trans">
                            <BsWhatsapp className="text-text-light" />
                        </a>
                        <a href="mailto:shareef.99997@gmail.com" className="text-xl hover:text-primary trans">
                            <MdEmail className="text-text-light" />
                        </a>
                        <a href="https://www.linkedin.com/in/shareef-ali" className="text-xl hover:text-primary trans">
                            <AiFillLinkedin className="text-text-light" />
                        </a>
                        <a href="https://github.com/shareef99997" className="text-xl hover:text-primary trans">
                            <FiGithub className="text-text-light" />
                        </a>
                    </div>
                </motion.div>
                )}
            

            {/* Navigation Menu */}
            <ul className="hidden lg:flex flex-col items-center gap-6 py-6 px-4 bg-background text-lg border border-text-light rounded-full text-text-light ">
                <li>
                    <a href="#" className="hover:text-primary trans"><AiOutlineHome className="text-xl" /></a>
                </li>
                <li>
                    <a href="#about" className="hover:text-primary trans"><FiUser className="text-xl" /></a>
                </li>
                <li>
                    <a href="#resume" className="hover:text-primary trans"><HiOutlineBriefcase className="text-xl" /></a>
                </li>
                <li>
                    <a href="#skills" className="hover:text-primary trans"><BiBrain className="text-xl" /></a>
                </li>
                <li>
                    <a href="#projects" className="hover:text-primary trans"><AiOutlineProject className="text-xl" /></a>
                </li>
                <li>
                    <a href="#contact" className="hover:text-primary trans"><FiMail className="text-xl" /></a>
                </li>
            </ul>
            {/* Spacer */}
            <span className="w-12 h-12 flex items-center justify-center">
            </span>
        </div>
    );
}

export default NavBar_EN;
