import './App.css';
import { Header, About, Contact, Experiance, Footer, Home, Projects } from './Pages/imports';


function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
      <About/>
      <Experiance/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
