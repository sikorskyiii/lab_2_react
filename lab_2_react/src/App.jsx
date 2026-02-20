import AboutMe from './components/AboutMe';
import Contact from './components/Contact';
import Education from './components/Education';
import Experience from './components/Experience';
import Skills from './components/Skills'; 
import Header from './components/Header';
import Objective from './components/Objective'

export default function App(){
    return(
          <div>
            <Header />
            <Objective />
            <AboutMe />
            <Experience />
            <Education />
            <Skills />
            <Contact />
          </div>
    )
}
