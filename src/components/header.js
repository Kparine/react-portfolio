import React from 'react'
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap'

export default class NavHeader extends React.Component {
  render() {
    return (
      <div>
        <Navbar id='NavHeader' light expand="md">
          <NavbarBrand href="/">Kevin Parine</NavbarBrand>
            <Nav className="ml-auto" navbar>
              
              <NavItem>
                <NavLink href="/components/">About</NavLink>
              </NavItem>
              
              <NavItem>
                <NavLink href="/components/">Projects</NavLink>
              </NavItem>
              
              <NavItem>
                <NavLink href="/components/">Resume</NavLink>
              </NavItem>
              
              <NavItem>
                <NavLink href="/components/">Contact</NavLink>
              </NavItem>

            </Nav>
        </Navbar>
      </div>
    )
  }
}
