import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'


const AccordionCard = ({title, body, eventKey, colour}) => {
    return (
            <Card bg={colour} style={{ margin: '20px', border: 'none'}}>
                <Accordion.Toggle style={{backgroundColor:colour}} as={Card.Header} eventKey={eventKey}>
                    {title}
                </Accordion.Toggle>
                <Accordion.Collapse eventKey={eventKey}>
                    <Card.Body>{body}</Card.Body>
                </Accordion.Collapse>
            </Card>
    )
}

export default AccordionCard;