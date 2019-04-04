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
                <NavLink href="/components/about">About</NavLink>
              </NavItem>
              
              <NavItem>
                <NavLink href="/components/project">Projects</NavLink>
              </NavItem>
              
              <NavItem>
                <NavLink href="/components/contact">Contact</NavLink>
              </NavItem>

            </Nav>
        </Navbar>
      </div>
    )
  }
}
