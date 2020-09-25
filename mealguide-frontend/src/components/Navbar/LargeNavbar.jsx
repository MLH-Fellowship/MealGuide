import React from 'react';
import { IonButton, IonHeader, IonIcon, IonImg, IonTitle, IonToolbar } from '@ionic/react';
import { personSharp, readerOutline } from 'ionicons/icons'
import logo from '../../assets/logo.svg';
import './Navbar.css';

const Navbar = () => {
    return (
        <IonHeader>
            <IonToolbar className="item-inner-custom">
                <IonImg src={logo} className='logo' />
                <div className='in-line'>
                    <IonTitle className='appname'>MealGuide</IonTitle>
                    <IonTitle className='slogan'>Be Fit, Be Free</IonTitle>
                </div>
                <IonButton fill='clear' slot='end' className='navbutton' href='/profile'>
                    <IonIcon color='dark' icon={personSharp} />
                </IonButton>
                <IonButton fill='clear' slot='end' className='navbutton' href='/suggestions'>
                    <IonIcon color='dark' icon={readerOutline} />
                </IonButton>
            </IonToolbar>
        </IonHeader>
    )
}

export default Navbar;