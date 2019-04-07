import React from 'react'
import { Parallax, Background } from "react-parallax"
import image1 from '../img/face.jpeg'




export default class NavParallax extends React.Component {
  render() {
    return (
      <div>
        <Parallax  strength={250}  >
          <div style={{ height: 600}} >
            <div id="insideStyles">Kevin Parine<p id='jobTitle'>Software Engineer</p></div>
          </div>
          <Background >
            <img src={image1}/>
          </Background>
        </Parallax>
      </div>
    )
  }
}