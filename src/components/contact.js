import React from 'react'
import { Container, Col, Row } from 'reactstrap'



export default class Contact extends React.Component {
  render() {
    return (
      <div id='contactRow'>
        <Container>
          <Row>
            <Col>
              <h1>C o n t a c t .</h1>
            </Col>
            <Col>
              <h6>
              360.305.0371
              </h6>      
              <h6>
              kparine314@gmail.com
              </h6> 
              <h6>
              Seattle, WA
              </h6>
              
              <a href='https://github.com/Kparine'>
                <img src={require('../img/github.png')} alt="Logo" className='logo' /> 
              </a> 
         
              <a href='https://www.linkedin.com/in/kevin-parine/'>
                <img src={require('../img/linkedin.png')} alt="Logo" className='logo' />                      
              </a> 

            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}