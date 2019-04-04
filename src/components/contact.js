import React from 'react'
import { Container, Col, Row } from 'reactstrap'



export default class Contact extends React.Component {
  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col>
             <h1>Contact</h1>
            </Col>
            <br></br>
            <Col>
              <p id='Contact'>
              Kevin Parine
              </p> 
              <p>
              360.305.0371
              </p>            
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}