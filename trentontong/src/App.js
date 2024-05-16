import React, { useState, useEffect } from 'react';
import './App.css';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import About from './components/About';
//import Contact from './components/Contact';
import Experience from './components/Experience';
import Projects from './components/Projects';
import PhotoGallery from './components/PhotoGallery';
import DarkModeToggle from './components/DarkModeToggle';
import Footer from './components/Footer';

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('dark-mode') === 'true';
  });

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
    localStorage.setItem('dark-mode', darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <>
      <DarkModeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Navigation />
      <HeroSection darkMode={darkMode} />
      <About darkMode={darkMode}/>
      <Experience darkMode={darkMode}/>
      <Projects darkMode={darkMode}/>
      <PhotoGallery darkMode={darkMode}/>
      {/*<Contact />*/}
      <Footer />
    </>
  );
}

export default App;
