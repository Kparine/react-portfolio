import React from 'react';
import { Container, Col, Row, Button } from 'reactstrap';

export default function About() {
  return (
    <div id="aboutStyle">
      <Container>
        <p id="skills">
          <strong>
            JavaScript | ES6 | React | React Native | Redux | Expo | Node.js |
            PostgreSQL | NoSQL | GCP Firestore | Knex.js | Ajax | Express |
            GitHub | SASS{' '}
          </strong>
        </p>
        <Row>
          <Col md="6" sm="12">
            <h1 id="aboutTitle">A b o u t . </h1>
            <div id="edu">
              <p> Certificate, Web Development || Galvanize || 2019</p>
              <p> B.Sc. Geology || Western Washington University || 2011</p>
            </div>
            <Button
              id="btn"
              size="lg"
              onClick={() =>
                window.open(
                  'https://drive.google.com/file/d/1jdKGghlL0t8JoxwfYYijd2nw9DHfvYGQ/view?usp=sharing',
                  '_blank'
                )
              }
              outline
              color="secondary"
            >
              View Resume
            </Button>{' '}
          </Col>
          <br />
          <Col md="6" sm="12">
            <p id="About">
              Kevin is a tenacious learner, blending his diverse scientific,
              technical, and team-oriented background. His technical and
              scientific skills have taken him around the world from Bermuda to
              the Arctic. He has managed large projects recognized by the
              International Maritime Organization and small municipalities.
              Kevin has shifted his focus from the scientific community to
              software, where he is passionate about developing web and
              mobile-applications with React, React Native and Redux. He is
              highly skilled in CSS preprocessors, such as SASS and enjoys
              creating aesthetic, simple designs.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
