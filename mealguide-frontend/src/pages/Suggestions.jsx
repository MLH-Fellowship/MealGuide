import React from 'react';
import { IonContent, IonPage } from '@ionic/react';
import LargeNavbar from '../components/Navbar/LargeNavbar';
import AccordionCard from '../components/AccordionCard/AccordionCard';
import saveLocal from '../helpers/saveLocal';
const url = new URL(window.location.href);
const email = url.searchParams.get("email");
const Suggestions = () => {
    saveLocal(email,"https://mealguide.herokuapp.com/api/user/getUser ","users");
    saveLocal(email,"https://mealguide.herokuapp.com/api/user/getRecommendations ","recomendations");
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
