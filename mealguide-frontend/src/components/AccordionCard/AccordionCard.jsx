import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import { IonCard, IonCardHeader } from '@ionic/react';


const AccordionCard = ({ title, body, eventKey, colour }) => {
    return (
        <IonCard color={colour}
            style={{
                margin: '20px', border: 'none', boxShadow: 'none', opacity:'60%'}}>
            <Accordion.Toggle as={IonCardHeader} color='dark' style={{ backgroundColor: 'transparent', borderBottom: 'none' }} eventKey={eventKey}>
                {title}
            </Accordion.Toggle>
            <Accordion.Collapse eventKey={eventKey}>
                <Card.Body>{body}</Card.Body>
            </Accordion.Collapse>
        </IonCard>
    )
}

export default AccordionCard;