// Import the image at the top of your About.js file
import React from 'react';
import { Container, Row, Col, Card, Image } from 'react-bootstrap';
import profilePic from '../assets/images/NiceFrance.JPG'; // Update the import path if necessary

function About() {
    // JSX code for your component
    return (
        <Container id="about" className="my-5">
            <Row className="align-items-center">
                <Col md={8}>
                    <Card>
                        <Card.Body>
                            <Card.Title>About Me</Card.Title>
                            <Card.Text>
                                Trenton Tong<br />
                                Location: Toronto, Ontario, Canada<br />
                                Carleton University: Bachelor of Computer Science, Cybersecurity Stream, Minor in Business (GPA: 3.7/4 A-)<br />
                                <div className="icons">
                                    <a href="https://github.com/trenton140" target="_blank" rel="noopener noreferrer">
                                        <i className="fab fa-github"></i>
                                    </a>
                                    <a href="mailto:contact@trentontong.com">
                                        <i className="fas fa-envelope"></i>
                                    </a>
                                    <a href="https://www.linkedin.com/in/trentontong" target="_blank" rel="noopener noreferrer">
                                        <i className="fab fa-linkedin"></i>
                                    </a>
                                </div>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4} className="text-center">
                    <Image src={profilePic} alt="Trenton Tong" className="profile-pic" roundedCircle />
                </Col>
            </Row>
        </Container>
    );
}

export default About;
