// Legacy (2022) single-page UI. Served at "/" until the v2 switch; delete with the rest of
// app/components and app/app.scss afterwards.
import 'bootstrap/dist/css/bootstrap.min.css';
import '../app.scss';
import About from './About';
import Contact from './Contact';
import Footer from './Footer';
import Hero from './Hero';
import Projects from './Projects';
import ScrollUpButton from './ScrollUpButton';

export default function LegacyHome() {
  return (
    <div className="App">
      <Hero />
      <About />
      <Projects />
      <Contact />
      <ScrollUpButton showAt={150} />
      <Footer />
    </div>
  );
}
