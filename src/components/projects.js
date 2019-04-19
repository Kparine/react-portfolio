import React from 'react';
import { Container, Col, Row } from 'reactstrap';

export default class Projects extends React.Component {
  render() {
    return (
      <div id="Projects">
        <Container>
          <Row id="projectTitleContain">
            <h1 id="ProjectTitle">P r o j e c t s . </h1>
          </Row>

          <Row id="echoRow">
            <Col md='6' sm='12'>
              <Row>
                <h4 id="echoTitle">
                  E C H O .
                  <a href="https://github.com/Kparine/echo">
                    <img
                      src={require('../img/github.png')}
                      alt="Logo"
                      className="logo"
                    />
                  </a>
                </h4>
              </Row>
              <p>
                A React Native mobile application built for the adventurer to
                more safely travel alone. Echo enables the user to create a
                network of friends that are notified of their trip details, via SMS message, 
                and when/ if they have returned safely. Project is ongoing with an
                expected early summer iStore publishing date
              </p>
              <p>
                JavaScript, React Native, Redux, Expo, GCP Firestore, Google
                Maps API, CSS
              </p>
            </Col>
            <Col md='6' sm='12'>
              <div id="echoImgContain">
                <a href="https://github.com/Kparine/echo">
                  <img
                    id="echo1"
                    src={require('../img/echo.png')}
                    alt="Logo"
                    className="logo"
                  />
                </a>
                <a href="https://github.com/Kparine/echo">
                  <img
                    id="echo2"
                    src={require('../img/echo2.png')}
                    alt="Logo"
                    className="logo"
                  />
                </a>
              </div>
            </Col>
          </Row>

          <Row id="petContain">
            <Col>
              <a href="https://teachers-pet-gradebook.herokuapp.com/">
                <img
                  id="petImg"
                  src={require('../img/teachersPet.png')}
                  alt="Logo"
                  className="logo"
                />
              </a>
            </Col>
            <Col>
              <Row id="petTitle">
                <h4>
                  Teacher's Pet
                  <a href="https://github.com/Kparine/echo">
                    <img
                      id="teacherGit"
                      src={require('../img/github.png')}
                      alt="Logo"
                      className="logo"
                    />
                  </a>
                </h4>
              </Row>
              <p>
                A React web application designed to help elementary school
                teachers grade and organize assignments. Collaborated in a scrum
                adhering to agile methodologies, utilizing Trello and Git
                version control.
              </p>
              <p>
                JavaScript, React, Redux, Node.js, Express, PostgreSQL, Knex.js,
                Heroku, HTML/CSS, SASS
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
