import React from 'react'
import { IonContent, IonPage, IonButton, IonIcon } from '@ionic/react';
import {chevronBackOutline} from 'ionicons/icons';
import LargeNavbar from '../components/Navbar/LargeNavbar';
import Highlight from '../components/Highlight/Highlight';
import MealTable from '../components/MealTable/MealTable';
import meals from '../mealsdummy.json';

const Meals = () => {
    return (
        <IonPage>
            <IonContent fullscreen>
                <LargeNavbar />
                <div style={{display:'inline-flex'}}>
                <IonButton fill='clear' href='/suggestions' style={{position: 'relative', margin:'15px 0 10px 20px'}}>
                    <IonIcon color='dark' icon={chevronBackOutline} />
                </IonButton>
                <h3 style={{ marginLeft: '5px', marginTop: '20px', position: 'relative'}}>{window.location.pathname.split('/meals/')[1]}</h3></div>
                <Highlight highlightsides='20px' height='6px' />
                <MealTable mealsOffered={meals.mealsOffered}/>
            </IonContent>
        </IonPage>
    )
}

export default Meals;