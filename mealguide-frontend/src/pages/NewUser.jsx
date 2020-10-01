import React from 'react';
import { IonContent, IonPage, IonLabel } from '@ionic/react';
import LargeNavbar from '../components/Navbar/LargeNavbar';
import Highlight from '../components/Highlight/Highlight';
import NewUserForm from '../components/NewUserForm/NewUserForm';
import 'bootstrap/dist/css/bootstrap.min.css';


const Profile = () => {
    return (
        <IonPage>
            <IonContent fullscreen>
                <LargeNavbar />
                <NewUserForm />
            </IonContent>
        </IonPage>
    )
}

export default Profile;