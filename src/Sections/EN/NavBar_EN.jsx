import { useState, useEffect } from "react";
import { FiMenu } from "react-icons/fi";
import { AiOutlineHome } from "react-icons/ai";
import { FiUser } from "react-icons/fi";
import { HiOutlineBriefcase } from "react-icons/hi";
import { BiBrain } from "react-icons/bi";
import { AiOutlineProject } from "react-icons/ai";
import { FiMail } from "react-icons/fi";

function NavBar_EN() {
    const [isTabletOrMobile, setIsTabletOrMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsTabletOrMobile(window.innerWidth <= 1200);
        };
        
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div className="fixed gap-36 flex flex-col items-center min-h-screen py-10 pe-6 right-0 top-0">
            {/* Sidebar / Language Switcher */}
            <button className="w-12 h-12 flex items-center justify-center bg-background border border-text-light rounded-full hover:text-primary hover:border-primary transition-all">
                {!isTabletOrMobile ? (
                    <FiMenu className="text-xl" />
                ) : (
                    <span className="text-xl text-text-light">ع</span>
                )}
            </button>

            {/* Navigation Menu */}
            <ul className="flex flex-col items-center gap-6 py-6 px-4 bg-background text-lg border border-text-light rounded-full text-text-light transition-all">
                <li>
                    <a href="#" className="hover:text-primary"><AiOutlineHome className="text-xl" /></a>
                </li>
                <li>
                    <a href="#about" className="hover:text-primary"><FiUser className="text-xl" /></a>
                </li>
                <li>
                    <a href="#resume" className="hover:text-primary"><HiOutlineBriefcase className="text-xl" /></a>
                </li>
                <li>
                    <a href="#skills" className="hover:text-primary"><BiBrain className="text-xl" /></a>
                </li>
                <li>
                    <a href="#projects" className="hover:text-primary"><AiOutlineProject className="text-xl" /></a>
                </li>
                <li>
                    <a href="#contact" className="hover:text-primary"><FiMail className="text-xl" /></a>
                </li>
            </ul>
        </div>
    );
}

export default NavBar_EN;
