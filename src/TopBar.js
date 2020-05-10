import React, {Component} from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { withRouter } from "react-router-dom";
import "./TopBar.css";

class TopBar extends Component {
    render() {
    const location = this.props.location;
    const pathname = location.pathname;
    
    return (
        <Navbar variant="light" fixed="sticky">
          <Navbar.Brand href="#home">Scrolling</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/" active={pathname === "/"}>
                Home
              </Nav.Link>
              <Nav.Link href="#about" active={pathname === "#about"}>
                About
              </Nav.Link>
              <Nav.Link href="#projects" active={pathname === "#projects"}>
                Projects
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      );
  }
}

export default withRouter(TopBar);