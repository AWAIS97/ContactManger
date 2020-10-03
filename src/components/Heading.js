/** @format */

import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavItem, NavbarBrand, Container } from "reactstrap";

export const Heading = () => {
  return (
    <Navbar color='dark' dark>
      <Container>
        <NavbarBrand href='/'>Contact list</NavbarBrand>
        <Nav>
          <NavItem>
            <Link className='btn btn-primary' to='/add'>
              Add Contact
            </Link>
          </NavItem>
        </Nav>
      </Container>
    </Navbar>
  );
};
