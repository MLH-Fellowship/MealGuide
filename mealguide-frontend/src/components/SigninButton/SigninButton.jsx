
import { IonLabel, IonChip, IonIcon} from '@ionic/react';
import React from 'react';
import {logoGoogle} from "ionicons/icons"
import './SigninButton.css';
import { useHistory } from "react-router-dom";

const SigninButton = () => {
    const history = useHistory();
    const routeChange = () => {
        let path = `/newUser`;
        history.push(path);
    }
    return (
        <IonChip style={{backgroundColor:'#A0E7E5'}} class="center SigninButton">
            <IonIcon color='textgreen' icon={logoGoogle} style={{marginLeft:'3px'}}/>
            <IonLabel color='textgreen'>
                <a class="signinLink" onClick={routeChange}>
                    SIGN IN WITH GOOGLE
                </a>
            </IonLabel>
        </IonChip>
    )
}

export default SigninButton;