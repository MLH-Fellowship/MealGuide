import React from 'react';
import { IonContent, IonPage } from '@ionic/react';
// import SmallNavbar from '../components/Navbar/SmallNavbar';
import LargeNavbar from '../components/Navbar/LargeNavbar';
import ColouredAccordion from '../components/ColouredAccordion/ColouredAccordion';

const Suggestions = () => {
    return (
        <IonPage>
            {/* <SmallNavbar /> */}
            <IonContent fullscreen>
                <LargeNavbar />
                <ColouredAccordion />
            </IonContent>
        </IonPage>
    )
}

export default Suggestions;