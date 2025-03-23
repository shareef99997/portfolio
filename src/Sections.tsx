import NavBar from "./components/Navbar"
import Hero from "./Sections/Hero"
import About from "./Sections/About"
import Resume from "./Sections/Resume"
import Skills from "./Sections/Skills"
import Projects from "./Sections/Projects"
import Contact from "./Sections/Contact"

function Sections() {
    return(
        <div>
            <NavBar/>
            <div className="overflow-hidden w-full">
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