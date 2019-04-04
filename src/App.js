import React, { Component } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import './App.scss'
import NavHeader from './components/header'
import NavFooter from './components/footer'
import NavParallax from './components/parallax'
import About from './components/about'
import Projects from './components/projects'
import Contact from './components/contact'

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavHeader />
        <NavParallax />
        <About />
        <Projects />
        <Contact />
        <NavFooter />
      </div>
    )
  }
}

export default App
