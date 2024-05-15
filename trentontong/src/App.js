import React from 'react';
import './App.css';
import Navigation from './components/Navigation';
import Home from './components/HeroSection';
import About from './components/About';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Projects from './components/Projects';
import PhotoGallery from './components/PhotoGallery';

function App() {
  return (
    <>
      <Navigation />
      <Home />
      <About />
      <Experience />
      <Projects />
      <PhotoGallery />
    </>
      //<Contact />
  );
}

export default App;
