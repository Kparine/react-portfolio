import githubImg from '../img/github.png';
import linkedinImg from '../img/linkedin.png';
import { Container, Col, Row } from 'reactstrap';

export default function Contact() {
  return (
    <div id="contactRow">
      <Container>
        <Row>
          <Col>
            <h1 id="contact">C o n t a c t .</h1>
          </Col>
          <Col>
            <h6>360.305.0371</h6>
            <h6>kparine314@gmail.com</h6>
            <h6>Seattle, WA</h6>

            <a href="https://github.com/Kparine">
              <img
                src={githubImg}
                alt="Logo"
                className="logo"
              />
            </a>

            <a href="https://www.linkedin.com/in/kevin-parine/">
              <img
                src={linkedinImg}
                alt="Logo"
                className="logo"
              />
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
