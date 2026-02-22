import Header from './components/Header';
import Objective from './components/Objective';
import Experience from './components/Experience';
import Contact from './components/Contact';
import AboutMe from './components/AboutMe';
import Education from './components/Education';
import Skills from './components/Skills';

export default function App() {
  return (
    <div className="bg-gray-200 py-10 px-4 md:p-12 font-sans text-gray-800 antialiased selection:bg-blue-200 min-h-screen">
      <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:grid md:grid-cols-[35%_65%] transition-shadow duration-300 hover:shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-gray-100">
        
        <Header />

        <main className="contents">
          <Objective />
          <Experience />
        </main>

        <aside className="contents">
          <Contact />
          <AboutMe />
          <Education />
          <Skills />
        </aside>

      </div>
    </div>
  );
}