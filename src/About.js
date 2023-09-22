import React, { useState, useRef } from "react";
import ProgressBar from 'react-bootstrap/ProgressBar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { icons, about, hobbies } from './helpers';
import "./About.css";

function About() {
        const [show, setShow] = useState(false);
        const target = useRef(null);
        function getIcon(label) {
            if (label === "Phone") {
                return (
                    <a href="tel:+4676-011-0358" className="About-icon">
                        <FontAwesomeIcon icon={faPhone} />
                    </a>
                );
            }
            if (label === "Email") {
                return (
                    <a href="mailto:ellfiscina@gmail.com" className="About-icon">
                        <FontAwesomeIcon icon={faEnvelope} />
                    </a>
                );
            }

            return;
        }
        return (
            <Container className="About" id="about" fluid="md">
                <h2 className="Section-title">About <span className="highlight">me</span></h2>
                <p>I'm a full stack developer and a crafter. I like to try new things and experiment with different technologies.</p>
                <Row>
                    <Col xs={12} md={4}>
                        <ListGroup variant="flush">
                            {about.map((a, i) =>
                                <ListGroup.Item key={i}>
                                    <p className="About-list"><b>{a.label}:</b> <span>{a.value} {getIcon(a.label)}</span></p>
                                </ListGroup.Item>
                            )}
                        </ListGroup>
                        <Button className="About-btn">Download CV</Button>
                    </Col>
                    <Col className="About-image" xs={12} md={4}>
                        <Image src={require('./assets/me3.jpg')} fluid />
                    </Col>
                    <Col className="About-skills" xs={12} md={4}>
                        <h5>My Skills</h5>
                        {/* {skills.map((s, i) =>
                            <div key={i}>
                                <span>{s.label}</span>
                                <ProgressBar now={s.value} />
                            </div>
                        )} */}
                        <div className="About-skills-icons">
                            {icons.map((icon, i) => 
                                <div key={i}><img src={require(`./assets/icons/${icon}.png`)} width="32px" /></div>
                            )}
                        </div>
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