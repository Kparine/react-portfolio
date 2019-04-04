import React, { Component } from 'react'
import { Navbar, Col} from 'react-bootstrap'

export default class NavFooter extends Component {
  render(){
    return (
      <div id='NavFooter' className='Footer'>
        <Navbar>
          <Col>
            <h4>Put Links to Github, LinkedIn here</h4>
            <h6>Powered by @coffee</h6>
          </Col>
        </Navbar>
      </div>
    )
  }
}