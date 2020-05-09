import React, {Component} from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { withRouter } from "react-router-dom";
import "./TopBar.css";

class TopBar extends Component {
    render() {
    
    const pathname = this.props;
    
    return (
        <Navbar bg="light" expand="lg" variant="light" fixed="top">
          <Navbar.Brand href="#home">Scrolling</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/" active={pathname === "/"}>
                Home
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      );
  }
}

export default withRouter(TopBar);