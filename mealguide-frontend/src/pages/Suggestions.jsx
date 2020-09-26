import React from 'react';
import { IonContent, IonPage } from '@ionic/react';
// import SmallNavbar from '../components/Navbar/SmallNavbar';
import LargeNavbar from '../components/Navbar/LargeNavbar';
import AccordionCard from '../components/AccordionCard/AccordionCard';
import Accordion from 'react-bootstrap/esm/Accordion';

const Suggestions = () => {
    return (
        <IonPage>
            {/* <SmallNavbar /> */}
            <IonContent fullscreen>
                <LargeNavbar />
                <Accordion>
                    <AccordionCard title='Clickety clack'  colour='pastelpink' body='Please work' eventKey='0'/>
                    <AccordionCard title='Clickety clack' colour='pastelblue' body='Please work' eventKey='1'/>
                    <AccordionCard title='Clickety clack' colour='pastelgreen' body='Please work' eventKey='2'/>
                    <AccordionCard title='Clickety clack' colour='pastelyellow' body='Please work' eventKey='2'/>
                </Accordion>
            </IonContent>
        </IonPage>
    )
}

export default Suggestions;