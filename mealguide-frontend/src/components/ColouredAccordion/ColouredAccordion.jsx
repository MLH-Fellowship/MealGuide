import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'

const ColouredAccordion = () => {
    return (
        <Accordion style={{margin:'auto'}}>
            <Card>
                <Accordion.Toggle as={Card.Header} eventKey="0">
                    Click me!
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                    <Card.Body>Hello! I'm the body</Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card>
                <Accordion.Toggle as={Card.Header} eventKey="1">
                    Click me!
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="1">
                    <Card.Body>Hello! I'm another body</Card.Body>
                </Accordion.Collapse>
            </Card>
        </Accordion>
    )
}

export default ColouredAccordion;