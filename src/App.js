import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import { CircleArrow as ScrollUpButton } from 'react-scroll-up-button';
import NavFooter from './components/footer';
import NavParallax from './components/parallax';
import About from './components/about';
import Projects from './components/projects';
import Contact from './components/contact';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavParallax />

        <About />

        <Projects />

        <Contact />

        <ScrollUpButton
          id="BTTbtn"
          StopPosition={0}
          ShowAtPosition={150}
          EasingType="linear"
          AnimationDuration={300}
        />

        <NavFooter />
      </div>
    );
  }
}

export default App;
