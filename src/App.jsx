import './App.css';
import Header from './Pages/Header/Header';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import Experiance from './Pages/Experiance/Experiance';
import Footer from './Pages/Footer/Footer';
import Home from './Pages/Home/Home';
import Projects from './Pages/Projects/Projects';

function App() {
  return (
    <div className="App">
      <Header/>
      <About/>
      <Contact/>
      <Experiance/>
      <Footer/>
      <Home/>
      <Projects/>
    </div>
  );
}

export default App;
