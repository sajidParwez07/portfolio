import { HashRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Headers from './Components/headers';
import Home from './Components/home';
import About from './Components/about';
import Facts from './Components/facts';
import Skills from './Components/skills';
import Portfolio from './Components/portfolio';
import Services from './Components/services';
import Contact from './Components/contact';
import Footer from './Components/footer';



function App() {
  return (
    <HashRouter>
      <Headers />
            <Home />
            <main id="main">
                <About />
                <Facts />
                <Skills />
                <Portfolio />
                <Services />
                <Contact />
            </main>
            <Footer /> 
      <Routes>
      </Routes>
    </HashRouter>
  );
}

export default App;


