import React, { Component } from 'react'
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap'

export default class NavHeader extends Component {
  render() {
    return (
      <div>
        <Navbar id='NavHeader' light expand="md">
          <NavbarBrand href="/">Kevin Parine</NavbarBrand>
            <Nav className="ml-auto" navbar>
              
              <NavItem>
                <NavLink href='#About'>About</NavLink>
              </NavItem>
              
              <NavItem>
                <NavLink href='#Projects'>Projects</NavLink>
              </NavItem>
              
              <NavItem>
                <NavLink href='#Contact'>Contact</NavLink>
              </NavItem>

            </Nav>
        </Navbar>
      </div>
    )
  }
}
