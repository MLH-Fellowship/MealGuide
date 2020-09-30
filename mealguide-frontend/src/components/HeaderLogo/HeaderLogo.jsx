import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { IonRow, IonGrid, IonCol } from '@ionic/react';
import logo from '../../assets/logo.svg';

const HeaderLogo = ({ heading, tagline}) => {
    return (

        <IonGrid>
            <IonRow>
                <IonCol>
                    <img src={logo} class="center HeaderLogoImg"/>
                    <h1 class="text-center">{heading}</h1>
                    <p  class="text-center">
                        {tagline}
                    </p>
                </IonCol>
            </IonRow>
        </IonGrid>
   
    )
}

export default HeaderLogo;