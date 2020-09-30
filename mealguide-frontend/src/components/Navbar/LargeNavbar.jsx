import React from 'react';
import { IonButton, IonHeader, IonIcon, IonImg, IonTitle, IonToolbar } from '@ionic/react';
import { personSharp, readerOutline } from 'ionicons/icons'
import { useHistory } from "react-router-dom";
import logo from '../../assets/logo.svg';
import './Navbar.css';

const Navbar = () => {
    const history = useHistory();
    const routeChange1 = () => {
        let path = `/profile`;
        history.push(path);
    }
    const routeChange2 = () => {
        let path = `/suggestions`;
        history.push(path);
    }
    return (
        <IonHeader>
            <IonToolbar className="item-inner-custom">
                <IonImg src={logo} className='logo' />
                <div className='in-line'>
                    <IonTitle className='appname'>MealGuide</IonTitle>
                    <IonTitle className='slogan'>Be Fit, Be Free</IonTitle>
                </div>
                <IonButton fill='clear' slot='end' className='navbutton' onClick={routeChange1}>
                    <IonIcon color='dark' icon={personSharp} />
                </IonButton>
                <IonButton fill='clear' slot='end' className='navbutton' onClick={routeChange2}>
                    <IonIcon color='dark' icon={readerOutline} />
                </IonButton>
            </IonToolbar>
        </IonHeader>
    )
}

export default Navbar;