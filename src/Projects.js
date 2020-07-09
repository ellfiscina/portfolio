import React, { Component } from "react";
import Container from 'react-bootstrap/Container';
import CardGroup from 'react-bootstrap/CardGroup';
import Card from 'react-bootstrap/Card';
import "./Projects.css";

class Projects extends Component {
    render() {
      return (
        <Container className="Projects">
            <h2 className="Section-title">Some Projects </h2>
            <CardGroup>
                <Card className="Projects-card">
                    <Card.Img variant="top" src={require("./assets/exlibris2.png")} />
                    <Card.ImgOverlay>
                        <Card.Title>ExLibris</Card.Title>
                        <Card.Text>
                        A personal library organizer. The books are registered and
                        organized in shelves (read, to read, reading, owned and wish list).
                        It is also possible to view a list of authors and editors with their respective books
                        and graphs concerning the reading habits of the user.
                        </Card.Text>
                        <Card.Text>
                            <b>Skills:</b> Ruby on Rails, Javascript, HTML, CSS, Postgresql
                        </Card.Text>
                    </Card.ImgOverlay>
                </Card>
                <Card className="Projects-card">
                    <Card.Img variant="top" src={require("./assets/emotion.png")} />
                    <Card.ImgOverlay>
                        <Card.Title>Emotion.ly</Card.Title>
                        <Card.Text>
                        A tool that perform emotion and sentiment analysis of a book using NLP and displays the
                        results in a variety of graphs
                        </Card.Text>
                        <Card.Text>
                            <b>Skills:</b> Python, Django, Javascript (D3.js)
                        </Card.Text>
                    </Card.ImgOverlay>
                </Card>
                <Card className="Projects-card">
                    <Card.Img variant="top" src={require("./assets/interage.png")} />
                    <Card.ImgOverlay>
                        <Card.Title>Company's website</Card.Title>
                        <Card.Text>
                        Landing page for a company I worked as intern
                        </Card.Text>
                        <Card.Text>
                            <b>Skills:</b> HTML, SASS, Javascript, jQuery
                        </Card.Text>
                    </Card.ImgOverlay>
                </Card>
            </CardGroup>
        </Container>
      );
    }
}

export default Projects;