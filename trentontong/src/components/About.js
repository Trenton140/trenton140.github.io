import React from 'react';
import { Container, Row, Col, Card, Image } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import profilePicWebP from '../assets/images/optimized/NiceFrance.webp';
import profilePicFallback from '../assets/images/NiceFrance.JPG';

function About() {
    return (
        <Container id="about" className="my-5">
            <Row className="align-items-center">
                <Col md={8}>
                    <Card>
                        <Card.Body>
                            <Card.Title>About Me</Card.Title>
                            <Card.Text>
                               Welcome to my personal website! I'm Trenton Tong, currently pursuing a Bachelor of Computer Science Honours Degree at Carleton University with a focus on Cybersecurity and a minor in Business. <br/><br/>
                               I have a diverse skill set that includes Java, C, C++, Python, HTML/CSS, JavaScript, and SQL, all of which I've utilized in various projects and coursework. <br/><br/>
                               I'm passionate about solving complex problems and thrive on innovation and adaptability. Explore my website to learn more about my projects, experience, and interests. <br/><br/>
                               Feel free to connect if you'd like to chat about tech, business, or potential collaborations. Thanks for visiting!
                                <span className="icons">
                                    <a href="https://github.com/trenton140" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                                        <FontAwesomeIcon icon={faGithub} />
                                    </a>
                                    <a href="mailto:contact@trentontong.com" aria-label="Email">
                                        <FontAwesomeIcon icon={faEnvelope} />
                                    </a>
                                    <a href="https://www.linkedin.com/in/trentontong" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                                        <FontAwesomeIcon icon={faLinkedin} />
                                    </a>
                                </span>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4} className="text-center">
                    <picture>
                        <source srcSet={profilePicWebP} type="image/webp" />
                        <Image
                            src={profilePicFallback}
                            alt="Trenton Tong"
                            className="profile-pic"
                            width={250}
                            height={250}
                            loading="lazy"
                            decoding="async"
                            roundedCircle
                        />
                    </picture>
                </Col>
            </Row>
        </Container>
    );
}

export default About;
