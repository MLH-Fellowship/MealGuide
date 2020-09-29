import React from 'react';
import { IonContent, IonPage, IonLabel } from '@ionic/react';
import Highlight from '../components/Highlight/Highlight';
import SigninButton from '../components/SigninButton/SigninButton';
import HeaderLogo from '../components/HeaderLogo/HeaderLogo';
import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';

const Profile = () => {
    return (
        <IonPage>
            <IonContent fullscreen>
                <Jumbotron style={{height:"100vh", display:"flex", alignItems:"center", marginBottom:"0"}}>
                    <Container>
                        <HeaderLogo heading="MealGuide" tagline="Be Fit, Be Free"/>
                        <Highlight highlightsides='20%' highlighttop='0' height='6px'/>
                        <blockquote class="blockquote  text-center mt-5">
                            <p class="mb-5">An app made for students to help them plan their meals in order to live a healthy life.</p>
                        </blockquote>
                        <SigninButton />
                    </Container>
                </Jumbotron>
            </IonContent>
        </IonPage>
    )
}

export default Profile;