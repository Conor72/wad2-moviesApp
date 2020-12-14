import React from "react";
import { Link } from "react-router-dom";
import "../../globals/fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./siteHeader.css";
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

const SiteHeader = () => {
  return (
    <Navbar className = "color-nav" collapseOnSelect expand="lg" variant="dark">
    <Navbar.Brand href="/">TMDB Client</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link className="nav-link text-white" href="/">Home</Nav.Link>
   
        <NavDropdown className="text-white" id="collasible-nav-dropdown" title={
        <span className="text-white">Movies</span>
    }>
          <NavDropdown.Item id="Home" href="/"><Link className="nav-link text-dark" to="/">
              Home
            </Link></NavDropdown.Item>
          <NavDropdown.Item ><Link className="nav-link text-dark" to="/movies/upcoming">
              Upcoming
            </Link></NavDropdown.Item>
            <NavDropdown.Item ><Link className="nav-link text-dark" to="/movies/popular">
              Popular
            </Link></NavDropdown.Item>
          <NavDropdown.Item ><Link className="nav-link text-dark" to="/movies/nowPlaying">
              Now Playing
            </Link></NavDropdown.Item>
          <NavDropdown.Item ><Link className="nav-link text-dark" to="/movies/topRated">
              Top Rated
            </Link></NavDropdown.Item>
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
      <Nav.Link href="/"><Link className="nav-link text-white" to="/dashboard">
              Profile
            </Link></Nav.Link>
      </Nav>
      <Nav>
        <Nav.Link href="/"><Link className="nav-link text-white" to="/login">
              Login
            </Link></Nav.Link>
      </Nav>
      <Nav>
        <Nav.Link href="/"><Link className="nav-link text-white" to="/signup">
              Sign Up
            </Link></Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
  );
};
export default SiteHeader;

