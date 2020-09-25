import React from 'react';
import { IonContent, IonPage } from '@ionic/react';
import SmallNavbar from '../components/Navbar/SmallNavbar';
import LargeNavbar from '../components/Navbar/LargeNavbar';
import Highlight from '../components/Highlight/Highlight';

const Profile = () => {
    return (
        <IonPage>
            <SmallNavbar />
            <IonContent fullscreen>
                <LargeNavbar />
            </IonContent>
            <Highlight/>
        </IonPage>
    )
}

export default Profile;