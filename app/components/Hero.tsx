import { Parallax } from 'react-parallax';
import portrait from '../img/face.jpeg';

export default function Hero() {
  return (
    <div>
      <Parallax bgImage={portrait} bgImageAlt="Kevin Parine in a forest" strength={200}>
        <div id="mobileContent" style={{ height: 700 }}>
          <div id="insideStyles">
            Kevin Parine<p id="jobTitle">Software Developer</p>
          </div>
        </div>
      </Parallax>
    </div>
  );
}
