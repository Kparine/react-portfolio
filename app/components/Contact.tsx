import githubImg from '../img/github.png';
import linkedinImg from '../img/linkedin.png';

export default function Contact() {
  return (
    <div id="contactRow">
      <div className="container">
        <div className="row">
          <div className="col">
            <h1 id="contact">C o n t a c t .</h1>
          </div>
          <div className="col">
            <h6>360.305.0371</h6>
            <h6>kparine314@gmail.com</h6>
            <h6>Seattle, WA</h6>

            <a href="https://github.com/Kparine">
              <img
                src={githubImg}
                alt="GitHub"
                className="logo"
              />
            </a>

            <a href="https://www.linkedin.com/in/kevin-parine/">
              <img
                src={linkedinImg}
                alt="LinkedIn"
                className="logo"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
