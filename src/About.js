import React, { Component, useState, useRef } from "react";
import ProgressBar from 'react-bootstrap/ProgressBar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import "./About.css";
import { skills, about, hobbies } from './helpers';

function About() {
        const [show, setShow] = useState(false);
        const target = useRef(null);

        return (
            <Container className="About" id="about" fluid="md">
                <h2 className="Section-title">About <span className="highlight">me</span></h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
                <Row>
                    <Col xs={12} md={4}>
                        <ListGroup variant="flush">
                            {about.map((a, i) =>
                                <ListGroup.Item key={i}>
                                    <p className="About-list"><b>{a.label}:</b> <span>{a.value}</span></p>
                                </ListGroup.Item>
                            )}
                        </ListGroup>
                        <Button>Download CV</Button>
                    </Col>
                    <Col className="About-image" xs={12} md={4}>
                        <Image src={require('./assets/me3.jpg')} fluid />
                    </Col>
                    <Col className="About-skills" xs={12} md={4}>
                        <h5>My Skills</h5>
                        {skills.map((s, i) =>
                            <div key={i}>
                                <span>{s.label}</span>
                                <ProgressBar now={s.value} />
                            </div>
                        )}
                        <div className="About-hobbies">
                            <h5>My Hobbies</h5>
                            <div className="About-icons">
                                {hobbies.map(i =>
                                    <div key={i}>
                                        <OverlayTrigger
                                            placement="top"
                                            overlay={
                                            <Tooltip>
                                                {i}
                                            </Tooltip>
                                            }
                                        >
                                        <img src={require(`./assets/${i}.png`)} ref={target} onClick={() => setShow(!show)} />
                                        </OverlayTrigger>{' '}
                                    </div>
                                )}
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        );
}

export default About;