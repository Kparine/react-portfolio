import React, { Component } from 'react'
import { Container, Col, Row, Button } from 'reactstrap'

export default class About extends Component {
  render(){
    return (
      <div id='aboutStyle'>
        <Container>
          <Row>
            <Col>
              <h1 id='aboutTitle'>A b o u t . </h1>
              <Button size='lg' outline color="secondary" onClick="window.location.href = 'https://docs.google.com/document/d/e/2PACX-1vTeirTqlHj33n5q3Hv_LHJe0pfRTnbDA5Yhl5_6_FNeBZZHal3pUN2NOFn3Tdl9g97QbWyFIx3n6Por/pub';">
              View Resume
              </Button>{' '}
            </Col>
            <br></br>
            <Col>
              <p id='About'>
              Kevin is a tenacious learner, blending his diverse scientific, 
              technical, and team-oriented background. His technical and scientific 
              skills have taken him around the world from Bermuda to the Arctic. He has 
              managed large projects recognized by the International Maritime Organization 
              and small municipalities. He is passionate about delivering an intuitive, organized 
              product that goes beyond the client's needs. Kevin has shifted his focus from the scientific 
              community to software, where he is passionate about developing web and mobile-applications with 
              React, React Native and Redux. He is highly skilled in CSS preprocessors, such as SASS and enjoys 
              creating aesthetic, simple designs. 
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}