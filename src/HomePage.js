import React, { Component } from "react";
import ProgressBar from 'react-bootstrap/ProgressBar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Image from 'react-bootstrap/Image';
import CardGroup from 'react-bootstrap/CardGroup';
import Card from 'react-bootstrap/Card';
import "./HomePage.css";
import {skills, about, icons, hobbies} from './helpers';

class HomePage extends Component {
    render() {
      return (
        <div className="HomePage">
            <div className="HomePage-home" id="home">
                <h1 className="HomePage-title">Hi, I am Ellen. <br /> Full Stack Developer <br /> UI/UX Researcher</h1>
                <img src={require('./assets/me2.JPG')} className="HomePage-banner" />
            </div>
            <Container className="HomePage-about" id="about">
                <h2 className="HomePage-section-title">About <span className="highlight">me</span></h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
                <Row>
                    <Col>
                        <ListGroup variant="flush">
                            {about.map((a, i) =>
                                <ListGroup.Item key={i}>
                                    <p className="HomePage-list"><b>{a.label}:</b> <span>{a.value}</span></p>
                                </ListGroup.Item>
                            )}
                        </ListGroup>
                    </Col>
                    <Col className="HomePage-image">
                        <Image src={require('./assets/me3.jpg')} fluid/>
                    </Col>
                    <Col className="HomePage-skills">
                        <h5>My Skills</h5>
                        {skills.map((s, i) =>
                            <div key={i}>
                                <span>{s.label}</span>
                                <ProgressBar now={s.value} />
                            </div>
                        )}
                        <div className="HomePage-hobbies">
                            <h5>My Hobbies</h5>
                            <div className="HomePage-icons">
                                {hobbies.map(i =>
                                    <img key={i} src={require(`./assets/${i}.png`)} />
                                )}
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            
            <Container className="HomePage-projects">
                <CardGroup>
                    <Card className="HomePage-card">
                        <Card.Img variant="top" src={require("./assets/exlibris.png")} />
                    </Card>
                    <Card className="HomePage-card">
                        <Card.Img variant="top" src={require("./assets/emotion.png")} />
                    </Card>
                    <Card className="HomePage-card">
                        <Card.Img variant="top" src={require("./assets/iot.png")} />
                    </Card>
                </CardGroup>
            </Container>
        </div>
      );
    }
}

export default HomePage;