import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import NavFooter from './components/footer';
import NavParallax from './components/parallax';
import About from './components/about';
import Projects from './components/projects';
import Contact from './components/contact';
import {CircleArrow as ScrollUpButton} from 'react-scroll-up-button';


class App extends Component {
  render() {
    return (
      <div className="App">
     
        <NavParallax />
     
        <About />

        <Projects />

        <Contact />
         
        <ScrollUpButton
          StopPosition={0}
          ShowAtPosition={150}
          EasingType='linear'
          AnimationDuration={750}
        />

        <NavFooter />
       
      </div>
    );
  }
}

export default App;
