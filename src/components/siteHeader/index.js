import React from "react";
import { Link } from "react-router-dom";
import "../../globals/fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./siteHeader.css";
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

const SiteHeader = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Navbar.Brand href="#home">TMDB Client</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link className="nav-link text-white" href="/">Home</Nav.Link>
        <NavDropdown title="Movies" id="collasible-nav-dropdown">
          
          <NavDropdown.Item href="/"><Link className="nav-link text-dark" to="/">
              Home
            </Link></NavDropdown.Item>
          <NavDropdown.Item ><Link className="nav-link text-dark" to="/movies/upcoming">
              Upcoming
            </Link></NavDropdown.Item>
          <NavDropdown.Item href="/movies/upcoming">Now Playing</NavDropdown.Item>
          <NavDropdown.Item href="/movies/upcoming">Top rated</NavDropdown.Item>
          <NavDropdown.Item href="/movies/upcoming">Trending</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item><Link className="nav-link text-dark" to="/movies/favorites">
              Favorites
            </Link></NavDropdown.Item>
          <NavDropdown.Item><Link className="nav-link text-dark" to="/movies/watchlist">
              Watch List
            </Link></NavDropdown.Item>
        </NavDropdown>
      </Nav>
      <Nav>
        <Nav.Link href="/">Profile</Nav.Link>

      </Nav>
    </Navbar.Collapse>
  </Navbar>
  );
};

export default SiteHeader;

/*

import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';


<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="#home">TMDB Client</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link className="nav-link text-white" to="/">Home</Nav.Link>
      <NavDropdown title="Movies" id="collasible-nav-dropdown">
        <NavDropdown.Item className="nav-link text-white" to="/movies/upcoming">Upcoming</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Nav>
      <Nav.Link href="#deets">More deets</Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
        Dank memes
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>

*/