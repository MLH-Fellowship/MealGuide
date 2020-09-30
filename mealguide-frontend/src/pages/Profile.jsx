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
import users from '../usersdummy.json';
import { square } from 'ionicons/icons';
console.log(users)
console.log(Math.pow((users.height / 100),2));
function calWeight(weight, height){
    const heightM = Math.pow((height / 100),2);
    return parseFloat(weight / heightM).toFixed(2)
}
const Profile = () => {
    return (
        <IonPage>
            {/* <SmallNavbar /> */}
            <IonContent fullscreen>
                <LargeNavbar />
                <Avatar username={users.firstname + " " + users.lastname}/>
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
                <Slider sliderTitle='Carbohydrates:' sliderRangeMin='20' SliderRangeMax='2000' sliderColor="danger"/>
                <Slider sliderTitle='Proteins:' sliderRangeMin='20' SliderRangeMax='2000' sliderColor="secondary"/>
                <Slider sliderTitle='Fats:' sliderRangeMin='20' SliderRangeMax='2000' sliderColor="success"/>

            </IonContent>
        </IonPage>
    )
}

export default Profile;