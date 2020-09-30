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
                {/* <Accordion> */}
                <h3 style={{marginLeft:'25px'}}>Suggestions</h3>
                <AccordionCard title='Breakfast' subtitle='Heavy' colour='pastelpink' body='This is the body' id='Breakfast'/>
                <AccordionCard title='Lunch' subtitle='Light' colour='pastelblue' body='This is the body' id='Lunch'/>
                <AccordionCard title='Snacks' subtitle='Heavy' colour='pastelgreen' body='This is the body' id='Snacks'/>
                <AccordionCard title='Dinner' subtitle='Light' colour='pastelyellow' body='This is the body' id='Dinner'/>
                {/* </Accordion> */}
            </IonContent>
        </IonPage>
    )
}

export default Suggestions;