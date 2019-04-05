import React, { Component } from 'react'
import { Row, Col } from 'reactstrap'

export default class NavHeader extends Component {
  render() {
    return (
      <div id='NavHeader'>
            <Row >
              <Col id='left'>
              <p className='HeaderTitle' id='first'>Kevin</p>
                <p id='leftJob'>Software</p>
                </Col>
                <a href='https://www.linkedin.com/in/kevin-parine/'>
                  <img id='anchor'  src={require('../img/anchor.png')} alt="Logo" className='logo' />                      
                </a>
                <Col id='right'>  
                  <p className='HeaderTitle' id='last'>Parine</p>
                  <p id='rightJob'>Engineer</p>
               </Col>
              </Row>
      </div>
    )
  }
}
