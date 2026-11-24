import portrait from '../img/face.jpeg';

export default function Hero() {
  return (
    <div id="hero">
      <img id="heroImg" src={portrait} alt="Kevin Parine in a forest" />
      <div id="mobileContent" style={{ height: 700 }}>
        <div id="insideStyles">
          Kevin Parine<p id="jobTitle">Software Developer</p>
        </div>
      </div>
    </div>
  );
}
