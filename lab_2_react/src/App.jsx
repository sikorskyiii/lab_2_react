import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Objective from './components/Objective';
import Experience from './components/Experience';
import Contact from './components/Contact';
import AboutMe from './components/AboutMe';
import Education from './components/Education';
import Skills from './components/Skills';
import Reviews from './components/Reviews';
import Footer from './components/Footer';
import ContactForm from './components/ContactForm';

const THEME_KEY = 'app-theme';

export default function App() {
  const [theme, setTheme] = useState(() => {
    if (typeof window === 'undefined') return 'light';
    const saved = window.localStorage.getItem(THEME_KEY);
    if (saved) return saved;

    const hour = new Date().getHours();
    return (hour >= 7 && hour < 21) ? 'light' : 'dark';
  });

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(THEME_KEY, theme);
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className="bg-gray-200 dark:bg-gray-900 py-10 px-4 md:p-12 font-sans antialiased min-h-screen transition-colors duration-300">
      
      <div className="max-w-5xl mx-auto bg-white dark:bg-[#1e1e1e] text-gray-900 dark:text-gray-200 rounded-3xl shadow-2xl overflow-hidden flex flex-col md:grid md:grid-cols-[35%_65%] transition-all duration-300 hover:shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-gray-100 dark:border-gray-800">
        
        <Header theme={theme} toggleTheme={toggleTheme} />

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
        
        <Reviews />

        <div className="col-span-full">
          <Footer />
        </div>
        
        <ContactForm />
        
      </div>
    </div>
  );
}