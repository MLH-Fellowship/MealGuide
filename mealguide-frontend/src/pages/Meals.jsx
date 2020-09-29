import React from 'react'
import { IonContent, IonPage } from '@ionic/react';
import LargeNavbar from '../components/Navbar/LargeNavbar';
import Highlight from '../components/Highlight/Highlight';
import MealTable from '../components/MealTable/MealTable';
import meals from '../mealsdummy.json';

const Meals = () => {
    console.log(meals.mealsOffered)
    console.log(window.location.pathname.split('/meals/')[1])
    return (
        <IonPage>
            <IonContent fullscreen>
                <LargeNavbar />
                <h3 style={{ marginLeft: '25px', marginTop: '20px' }}>{window.location.pathname.split('/meals/')[1]}</h3>
                <Highlight highlightsides='20px' height='6px' />
                <MealTable />
            </IonContent>
        </IonPage>
    )
}

export default Meals;