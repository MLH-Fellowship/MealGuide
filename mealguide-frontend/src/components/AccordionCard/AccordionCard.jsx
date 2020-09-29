import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import { IonCard, IonCardHeader } from '@ionic/react';
import { useHistory } from "react-router-dom";
import './AccordionCard.css'

function AccordionCard({ title, subtitle, body, eventKey, colour, mealTime, id }) {
    const history = useHistory();
    const routeChange = () => {
        let path = `/meals/${id}`;
        history.push(path);
    }
    return (
        <IonCard color={colour} className='opac'
            style={{
                margin: '20px', border: 'none', boxShadow: 'none'
            }} button onClick={routeChange} >
            <Accordion.Toggle as={Card.Header} style={{ backgroundColor: 'transparent', borderBottom: 'none' }} eventKey={eventKey}>
                <h4 style={{ margin: '0px' }}>{title}</h4>
                <h6 style={{ margin: '0px' }}>{subtitle}</h6>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey={eventKey}>
                <Card.Body>something</Card.Body>
            </Accordion.Collapse>
        </IonCard>
    )
}

export default AccordionCard;