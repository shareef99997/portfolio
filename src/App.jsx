import './App.css';
import { Header, About, Contact, Experiance, Footer, Home, Projects } from './Pages/imports';


function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
      <About/>
      <Contact/>
      <Experiance/>
      <Footer/>
      <Projects/>
    </div>
  );
}

export default App;
