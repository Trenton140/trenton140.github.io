import React from 'react';
import { Container, Card, ListGroup } from 'react-bootstrap';

const Projects = () => {
  return (
    <Container id="projects" className="my-5">
      <h2>Project Experience</h2>
      <Card>
        <Card.Body>
          <Card.Title>Aircraft Inspection Tracker Simulator</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">Software Engineering course - April 2022</Card.Subtitle>
          <Card.Text>
            Programmed a parts control system for an airline using C++ in Linux, following the observer design pattern, and utilizing multiple inheritance, polymorphism, operator overloading and templates.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Body>
          <Card.Title>Community Fridge</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">Full Stack Web Development Course - January 2022 - April 2022</Card.Subtitle>
          <Card.Text>
            Developed a website for managing goods in communal refrigerators, incorporating a MongoDB database, and used JavaScript, HTML, AJAX, CSS, Node.js, Express, and MongoDB for front-end and back-end development.
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Projects;
