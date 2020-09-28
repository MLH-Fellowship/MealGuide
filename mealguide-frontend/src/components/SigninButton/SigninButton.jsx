import { IonItem, IonLabel, IonChip, IonIcon} from '@ionic/react';
import React from 'react';
import {logoGoogle} from "ionicons/icons"

const SigninButton = () => {
    return (
        <IonItem class="UserSignin">
            <IonChip>
                <IonIcon icon="{logoGoogle}"/>
                <IonLabel>SIGN IN WITH GOOGLE</IonLabel>
            </IonChip>
        </IonItem>
    )
}

export default SigninButton;