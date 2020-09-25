import React from 'react';
import { IonHeader, IonImg, IonTitle, IonToolbar } from '@ionic/react';
import logo from '../../assets/logo.svg';
import './Navbar.css';


const Navbar = () => {
    return (
        <IonHeader>
            <IonToolbar className="item-inner-custom">
                {/* <IonItem className="item-inner-custom"> */}
                    <IonImg src={logo}  className='logo'/>
                    <IonTitle className='appname' size='large'>MealGuide</IonTitle>
                    <IonTitle className='slogan' size='small'>Be Fit, Be Free</IonTitle>
                {/* </IonItem> */}
            </IonToolbar>
        </IonHeader>
    )
}

export default Navbar;