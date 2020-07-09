import React, { Component } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faMapMarkerAlt, faAt } from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

import "./Contact.css";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      subject: '',
      message: ''
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    
    axios({
      method: "POST",
      url: "http://localhost:3002/send",
      data: this.state
    }).then((response) => {
      if (response.data.status === 'success') {
        alert("Message Sent.");
        this.resetForm()
      } else if (response.data.status === 'fail') {
        alert("Message failed to send.")
      }
    })
  }

  resetForm(){  
    this.setState({name: '', email: '', subject: '', message: ''})
  }
  render() {
    return (
      <Container className="Contact">
        <h2 className="Section-title">Contact</h2>
        <Row>
          <Col xs={6}>
            <Form id="Contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
              <Form.Row>
                <Form.Group as={Col} controlId="name">
                  <Form.Control 
                    placeholder="Name" 
                    type="text" 
                    value={this.state.name} 
                    onChange={this.onNameChange.bind(this)}/>
                </Form.Group>
                <Form.Group as={Col} controlId="email">
                  <Form.Control 
                    placeholder="Email" 
                    type="email" 
                    value={this.state.email} 
                    onChange={this.onEmailChange.bind(this)} />
                </Form.Group>
              </Form.Row>
              <Form.Group controlId="subject">
                <Form.Control 
                  placeholder="Subject" 
                  type="text" 
                  value={this.state.subject} 
                  onChange={this.onSubjectChange.bind(this)}/>
              </Form.Group>
              <Form.Group>
                <Form.Control 
                  placeholder="Message" 
                  as="textarea" 
                  rows="5" 
                  value={this.state.message} 
                  onChange={this.onMessageChange.bind(this)} />
              </Form.Group> 
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
          <Col>
            <div>
              <FontAwesomeIcon icon={faMapMarkerAlt} size="2x" /> 
              <p>Meu endereço<br/>cep e cidade</p>
            </div>
            <div>
              <FontAwesomeIcon icon={faPhone} size="2x" /> <p>+46 076 0xx xxxx</p>
            </div>
          </Col>
          <Col>
            <div>
              <FontAwesomeIcon icon={faAt} size="2x" /> <p>ellfiscina@gmail.com</p>
            </div>
            <div>
              <FontAwesomeIcon icon={faLinkedinIn} size="2x" /> <p>meu linkedin</p>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }

  onNameChange(event) {
    console.log(event)
    this.setState({ name: event.target.value })
  }

  onEmailChange(event) {
    this.setState({ email: event.target.value })
  }

  onSubjectChange(event) {
    this.setState({ subject: event.target.value })
  }

  onMessageChange(event) {
    this.setState({ message: event.target.value })
  }  
}

export default Contact;