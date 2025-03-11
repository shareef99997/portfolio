import NavBar from "./components/Navbar"
import Hero from "./Sections/Hero"
import About from "./Sections/About"
import Resume from "./Sections/Resume"
import Skills from "./Sections/Skills"
import Projects from "./Sections/Projects"
import Contact from "./Sections/Contact"

function SectionsEN() {
    return(
        <div className="max-w-screen flex">
            <div className="overflow-hidden w-full">
                <Hero/>
                <About/>
                <Resume/>
                <Skills/>
                <Projects/>
                <Contact/> 
            </div>
            <NavBar/>
            
        </div>
    )
}

export default SectionsEN;