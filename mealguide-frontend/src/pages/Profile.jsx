import React from 'react';
import { IonContent, IonPage, IonLabel } from '@ionic/react';
// import SmallNavbar from '../components/Navbar/SmallNavbar';
import LargeNavbar from '../components/Navbar/LargeNavbar';
import Highlight from '../components/Highlight/Highlight';
import Avatar from '../components/Avatar/Avatar';
import Slider from '../components/Slider/Slider';
import SectionHeader from '../components/SectionHeader/SectionHeader';
import UserFact from '../components/UserFact/UserFact';
import UserFacts from '../components/UserFacts/UserFacts';

const Profile = () => {
    return (
        <IonPage>
            {/* <SmallNavbar /> */}
            <IonContent fullscreen>
                <LargeNavbar />
                <Avatar />
                <UserFact FactLabel="Points" FactValue="36 meals followed till date" />
                <Highlight highlightsides='20px' highlighttop='0'/>
                <UserFacts FactLableOne="Weight" FactValueOne="55 kg" FactLableTwo="Height"FactValueTwo="152 cm" FactLableThree="BMI" FactValueThree="20.24"/>
                <Highlight highlightsides='20px' highlighttop='0'/>
                <UserFacts FactLableOne="Age" FactValueOne="24" FactLableTwo="Gender"FactValueTwo="Female" FactLableThree="Preference" FactValueThree="Vegan"/>
                <Highlight highlightsides='20px' highlighttop='0'/>
                <UserFact FactLabel="College" FactValue="Harward University" />
                <Highlight highlightsides='20px' highlighttop='0'/>
                <UserFact FactLabel="No of Meals per day:" FactValue="Three" />
                <Highlight highlightsides='20px' highlighttop='0'/>
                <UserFact FactLabel="Health Goal" FactValue="Maintain Weight" />
                <Highlight highlightsides='20px' highlighttop='0'/>
                <SectionHeader SectionTitle="Specifications:"/>
                <Slider sliderTitle='Carbohydrates:' sliderRangeMin='20' SliderRangeMax='2000' sliderColor="danger"/>
                <Slider sliderTitle='Proteins:' sliderRangeMin='20' SliderRangeMax='2000' sliderColor="secondary"/>
                <Slider sliderTitle='Fats:' sliderRangeMin='20' SliderRangeMax='2000' sliderColor="success"/>
                
            </IonContent>
        </IonPage>
    )
}

export default Profile;