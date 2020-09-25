import React from 'react';
import { IonContent, IonPage } from '@ionic/react';
import SmallNavbar from '../components/Navbar/SmallNavbar';
import LargeNavbar from '../components/Navbar/LargeNavbar';

const Profile = () => {
    return (
        <IonPage>
            <SmallNavbar />
            <IonContent fullscreen>
                <LargeNavbar />
            </IonContent>
        </IonPage>
    )
}

export default Profile;