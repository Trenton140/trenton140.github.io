import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';

const Contact = () => {
    // Dummy handler function, needs backend support to actually send messages
    const handleSubmit = (event) => {
        event.preventDefault();
        alert('Your message has been submitted.');
    };

    return (
        <Container id="contact" className="my-5">
            <h2>Contact</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="contactForm.Email">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" required />
                </Form.Group>
                <Form.Group controlId="contactForm.Message">
                    <Form.Label>Message</Form.Label>
                    <Form.Control as="textarea" rows={3} required />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </Container>
    );
};

export default Contact;
