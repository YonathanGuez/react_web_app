import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

export class Menu extends Component {
  render() {
    return (
      <Navbar bg="dark" expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <NavLink className="d-inline p-2 bg-dark text-white" to="/">
              Home
            </NavLink>
            <NavLink className="d-inline p-2 bg-dark text-white" to="/profile">
              Profile
            </NavLink>
            <NavLink className="d-inline p-2 bg-dark text-white" to="/contact">
              Contact
            </NavLink>
            <NavLink className="d-inline p-2 bg-dark text-white" to="/game">
              Game morpion
            </NavLink>
            <NavLink
              className="d-inline p-2 bg-dark text-white"
              to="/testtailwindcss"
            >
              test tailwindcss
            </NavLink>
            <NavLink className="d-inline p-2 bg-dark text-white" to="/addlist">
              addList
            </NavLink>
            <NavLink className="d-inline p-2 bg-dark text-white" to="/fabricjs">
              Fabricjs
            </NavLink>
            <NavLink className="d-inline p-2 bg-dark text-white" to="/konva">
              Konva
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
