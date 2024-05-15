import React from 'react';
import { Container, Card } from 'react-bootstrap';

const Experience = () => {
  return (
    <Container id="experience" className="my-5">
      <h2>Work Experience</h2>
      <Card>
        <Card.Body>
          <Card.Title>FRP Value Stream Associate Intern</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">TD Bank (Corporate Finance) - May 2024 – Present</Card.Subtitle>
          <Card.Text>
            
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Body>
          <Card.Title>Technology Solutions Intern</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">TD Bank (Corporate Finance) - May 2023 – April 2024</Card.Subtitle>
          <Card.Text>
            Led the development of the Centralized Diamond Attestation Program, managed SharePoint List backends, and utilized Power BI for data analysis and reporting.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Body>
          <Card.Title>Bilingual Client Care Representative, Special Contracts</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">TELUS Health - September 2021 – Present</Card.Subtitle>
          <Card.Text>
            Assisted clients with counseling appointments, redirected clients in distress to standby resources, and handled priority calls from dedicated lines.
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Experience;
