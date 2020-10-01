import React from 'react';
import { IonContent, IonPage, IonLabel } from '@ionic/react';
import LargeNavbar from '../components/Navbar/LargeNavbar';
import Highlight from '../components/Highlight/Highlight';
import UserForm from '../components/UserForm/UserForm';
import 'bootstrap/dist/css/bootstrap.min.css';


const Profile = () => {
    return (
        <IonPage>
            <IonContent fullscreen>
                <LargeNavbar />
                <UserForm />
            </IonContent>
        </IonPage>
    )
}

export default Profile;