import About from './components/About.jsx';
import EntryList from './components/EntryList.jsx';
import Footer from './components/Footer.jsx';
import Gallery from './components/Gallery.jsx';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Section from './components/Section.jsx';
import { experience, projects } from './content.js';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Section id="about" title="About Me">
          <About />
        </Section>
        <Section id="experience" title="Work Experience">
          <EntryList entries={experience} />
        </Section>
        <Section id="projects" title="Project Experience">
          <EntryList entries={projects} twoColumn />
        </Section>
        <Section id="gallery" title="Photography">
          <Gallery />
        </Section>
      </main>
      <Footer />
    </>
  );
}
