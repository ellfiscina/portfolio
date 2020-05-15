import React, { Component } from "react";
import Container from 'react-bootstrap/Container';
import "./Banner.css";

class Banner extends Component {
    render() {
      return (
        <Container className="Banner" id="home" fluid>
            <h1 className="Banner-title">Hi, I am Ellen. <br /> Full Stack Developer <br /> UI/UX Researcher</h1>
            <img src={require('./assets/me2.JPG')} className="Banner-image" />
        </Container>
      );
    }
}

export default Banner;