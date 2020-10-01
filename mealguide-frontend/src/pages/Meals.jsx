import React from 'react'
import { IonContent, IonPage, IonButton, IonIcon } from '@ionic/react';
import {chevronBackOutline} from 'ionicons/icons';
import LargeNavbar from '../components/Navbar/LargeNavbar';
import Highlight from '../components/Highlight/Highlight';
import FeedbackButtons from '../components/FeedbackButtons/FeedbackButtons';
import MealTable from '../components/MealTable/MealTable';
import { useHistory } from "react-router-dom";


const Meals = () => {
    const history = useHistory();
    const routeChange = () => {
        let path = `/suggestions`;
        history.push(path);
    }
    const id = window.location.pathname.split('/meals/')[1]
    return (
        <IonPage>
            <IonContent fullscreen>
                <LargeNavbar />
                <div style={{display:'inline-flex'}}>
                <IonButton fill='clear' href='/suggestions' style={{position: 'relative', margin:'15px 0 10px 20px'}} onClick={routeChange}>
                    <IonIcon color='dark' icon={chevronBackOutline} />
                </IonButton>
                <h3 style={{ marginLeft: '5px', marginTop: '20px', position: 'relative'}}>{id.toUpperCase()}</h3></div>
                <Highlight highlightsides='20px' height='6px' />
                <MealTable id={id}/>
                <FeedbackButtons />
            </IonContent>
        </IonPage>
    )
}

export default Meals;