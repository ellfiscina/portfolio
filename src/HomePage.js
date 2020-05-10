import React, { Component } from "react";
import ProgressBar from 'react-bootstrap/ProgressBar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import "./HomePage.css";

class HomePage extends Component {
    render() {
        //TO-DO export const
        const skills = [
            {value: 80, label: "Frontend Developer"},
            {value: 65, label: "Backend Developer"},
            {value: 60, label: "UI Developer"},
            {value: 45, label: "Designer"}
        ];

        const about = [
            {label: 'Name', value: 'Ellen Fiscina'},
            {label: 'Age', value: '27 years'},
            {label: 'Skype', value: 'X'},
            {label: 'Phone', value: 'Y'},
            {label: 'Email', value: 'ellfiscina@gmail.com'}
        ];

        const icons = [
            'python',
            'javascript',
            'html-5',
            'css',
            'ruby',
            'react',
            'c',
            'cplus',
            'github',
            'gnu-bash'
        ];

      return (
        <div className="HomePage">
            <div className="HomePage-home" id="home">
                <h1 className="HomePage-title">Hi, I am Ellen. <br /> Full Stack Developer <br /> UI/UX Researcher</h1>
                <img src={require('./assets/me2.JPG')} className="HomePage-banner" />
            </div>
            <div className="HomePage-about" id="about">
            <Container>
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
                    <Col>
                    </Col>
                    <Col className="HomePage-skills">
                        <h5>My Skills</h5>
                        {skills.map((s, i) =>
                            <div key={i}>
                                <span>{s.label}</span>
                                <ProgressBar now={s.value} />
                            </div>
                        )}
                        <div className="HomePage-coding">
                            <h5>My coding experience</h5>
                            <div className="HomePage-icons">
                                {icons.map(i =>
                                    <img key={i} src={require(`./assets/icons/${i}.png`)} />
                                )}
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            </div>
            <div className="HomePage-projects">

            </div>
        </div>
      );
    }
}

export default HomePage;