import React from 'react';
import { IonButton, IonHeader, IonIcon, IonImg, IonTitle, IonToolbar } from '@ionic/react';
import { personSharp, readerOutline } from 'ionicons/icons'
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
                <IonButton fill='clear' slot='end' href='/profile'>
                    <IonIcon color='dark' size='large' icon={personSharp} />
                </IonButton>
                <IonButton fill='clear' slot='end' href='/suggestions'>
                    <IonIcon color='dark' size='large' icon={readerOutline} />
                </IonButton>
            </IonToolbar>
        </IonHeader>
    )
}

export default Navbar;