import { IonLabel, IonChip, IonIcon} from '@ionic/react';
import React from 'react';
import {logoGoogle} from "ionicons/icons"

const SigninButton = () => {
    return (
            <IonChip style={{backgroundColor:'#A0E7E5'}}>
                <IonIcon color='textgreen' icon={logoGoogle}/>
                <IonLabel color='textgreen'>SIGN IN WITH GOOGLE</IonLabel>
            </IonChip>
    )
}

export default SigninButton;