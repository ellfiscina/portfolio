import React, { Component } from "react";
import ProgressBar from 'react-bootstrap/ProgressBar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Image from 'react-bootstrap/Image';
import CardGroup from 'react-bootstrap/CardGroup';
import Card from 'react-bootstrap/Card';


import Banner from './Banner';
import "./Projects.css";
import {skills, about, icons, hobbies} from './helpers';

class Projects extends Component {
    render() {
      return (
        <Container className="Projects">
            <h2 className="Section-title">Some Projects </h2>
            <CardGroup>
                <Card className="Projects-card">
                    <Card.Img variant="top" src={require("./assets/exlibris.png")} />
                </Card>
                <Card className="Projects-card">
                    <Card.Img variant="top" src={require("./assets/emotion.png")} />
                </Card>
            </CardGroup>
        </Container>
      );
    }
}

export default Projects;