import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import NavFooter from './components/footer';
import NavParallax from './components/parallax';
import About from './components/about';
import Projects from './components/projects';
import Contact from './components/contact';
import ScrollUpButton from './components/scrollUp';

export default function App() {
  return (
    <div className="App">
      <NavParallax />
      <About />
      <Projects />
      <Contact />
      <ScrollUpButton showAt={150} />
      <NavFooter />
    </div>
  );
}
