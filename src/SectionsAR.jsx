import NavBar_AR from "./Sections/AR/NavBar_AR"
import Hero_AR from "./Sections/AR/Hero_AR"
import About_AR from "./Sections/AR/About_AR"
import Resume_AR from "./Sections/AR/Resume_AR"
import Skills_AR from "./Sections/AR/Skills_AR"
import Projects_AR from "./Sections/AR/Projects_AR"
import Contact_AR from "./Sections/AR/Contact_AR"

function SectionsAR() {
    return(
        <div className="max-w-screen flex">
            <div className="overflow-hidden w-full">
                <Hero_AR/>
                <About_AR/>
                <Resume_AR/>
                <Skills_AR/>
                <Projects_AR/>
                <Contact_AR/>
            </div>
            <NavBar_AR/>
        </div>
    )
}

export default SectionsAR;