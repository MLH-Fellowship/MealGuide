import React, {componentDidMount, useState} from 'react';
import { IonContent, IonPage, IonLabel } from '@ionic/react';
// import SmallNavbar from '../components/Navbar/SmallNavbar';
import LargeNavbar from '../components/Navbar/LargeNavbar';
import Highlight from '../components/Highlight/Highlight';
import Avatar from '../components/Avatar/Avatar';
import Slider from '../components/Slider/Slider';
import SectionHeader from '../components/SectionHeader/SectionHeader';
import UserFact from '../components/UserFact/UserFact';
import UserFacts from '../components/UserFacts/UserFacts';
import axios from 'axios';
function calWeight(weight, height){
    const heightM = Math.pow((height / 100),2);
    return parseFloat(weight / heightM).toFixed(2)
}
const Profile = () => {
    const users = JSON.parse(localStorage.getItem('users')) || []
    return (
        <IonPage>
            {/* <SmallNavbar /> */}
            <IonContent fullscreen>
                <LargeNavbar />
                <Avatar username={users.firstname + " " + users.lastname} imageURL={users.imageURL}/>
                <UserFact FactLabel="Points" FactValue={users.points + " meals followed till date"}/>
                <Highlight highlightsides='20px' highlighttop='0' height='6px'/>
                <UserFacts FactLableOne="Weight" FactValueOne={users.weight} FactLableTwo="Height" FactValueTwo={users.height} FactLableThree="BMI" FactValueThree={calWeight(users.weight, users.height)} />
                <Highlight highlightsides='20px' highlighttop='0' height='6px'/>
                <UserFacts FactLableOne="Age" FactValueOne={users.age} FactLableTwo="Gender" FactValueTwo={users.gender} FactLableThree="Preference" FactValueThree={users.preference}/>
                <Highlight highlightsides='20px' highlighttop='0' height='6px'/>
                <UserFact FactLabel="College" FactValue={users.college}/>
                <Highlight highlightsides='20px' highlighttop='0' height='6px'/>
                <UserFact FactLabel="No of Meals per day:" FactValue={users.mealsPerDay} />
                <Highlight highlightsides='20px' highlighttop='0' height='6px'/>
                <UserFact FactLabel="Health Goal" FactValue={users.goal} />
                <Highlight highlightsides='20px' highlighttop='0' height='6px'/>
                <SectionHeader SectionTitle="Specifications:"/>
                <Slider sliderTitle='Carbohydrates:' sliderRangeMin='50' defaultValue={users.nutrient.carb} SliderRangeMax='2000' sliderColor="danger"/>
                <Slider sliderTitle='Proteins:' sliderRangeMin={(0.5*users.weight)*4} SliderRangeMax={(1.8*users.weight)*4}   defaultValue={users.nutrient.protein} sliderColor="secondary"/>
                <Slider sliderTitle='Fats:' sliderRangeMin='50' SliderRangeMax='2000' defaultValue={users.nutrient.fat} sliderColor="success"/>

            </IonContent>
        </IonPage>
    )
}

export default Profile;