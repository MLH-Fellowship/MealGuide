import React from 'react'
import { IonContent, IonPage } from '@ionic/react';
import LargeNavbar from '../components/Navbar/LargeNavbar';
import Highlight from '../components/Highlight/Highlight';
import MealTable from '../components/MealTable/MealTable';

const Meals = () => {
    return (
        <IonPage>
            <IonContent fullscreen>
                <LargeNavbar />
                <h3 style={{marginLeft:'25px', marginTop:'20px'}}>Breakfast</h3>
                <Highlight highlightsides='20px' height='6px'/>
                <MealTable />
            </IonContent>
        </IonPage>
    )
}

export default Meals;