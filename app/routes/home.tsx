import type { Route } from './+types/home';
import About from '../components/About';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import ScrollUpButton from '../components/ScrollUpButton';

export const meta: Route.MetaFunction = () => [
  { title: 'Kevin Parine' },
  { name: 'description', content: 'Kevin Parine, software developer.' },
];

export default function Home() {
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
