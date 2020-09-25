import React from 'react';
import { IonHeader, IonImg, IonTitle, IonToolbar } from '@ionic/react';
import logo from '../../assets/logo.svg';
import './Navbar.css';

const Navbar = () => {
    return (
        <IonHeader collapse='condense'>
            <IonToolbar className="item-inner-custom">
                <IonImg src={logo} className='logo' />
                <div className='in-line'>
                <IonTitle className='appname' size='large'>MealGuide</IonTitle>
                <IonTitle className='slogan' size='small'>Be Fit, Be Free</IonTitle>
                </div>
            </IonToolbar>
        </IonHeader>
    )
}

export default Navbar;