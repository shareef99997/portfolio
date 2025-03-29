import NavBar from "./Components/Navbar"
import Hero from "./Sections/Hero"
import About from "./Sections/About"
import Resume from "./Sections/Resume"
import Skills from "./Sections/Skills"
import Projects from "./Sections/Projects"
import Contact from "./Sections/Contact"
import Background from "./Components/Background"

function Sections() {
    return(
        <div id="sections" className="px-4 md:px-8 lg:px-16">
            <Background />
            <NavBar/>
            <div className="overflow-hidden space-y-20">
                <Hero/>
                <About/>
                <Resume/>
                <Skills/>
                <Projects/>
                <Contact/> 
            </div>
        </div>
    )
}

export default Sections;