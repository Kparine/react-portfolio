import React from 'react';
import { Parallax } from 'react-parallax';
import image1 from '../img/face.jpeg';

export default function NavParallax() {
  return (
    <div>
      <Parallax bgImage={image1} strength={200}>
        <div id="mobileContent" style={{ height: 700 }}>
          <div id="insideStyles">
            Kevin Parine<p id="jobTitle">Software Developer</p>
          </div>
        </div>
      </Parallax>
    </div>
  );
}
