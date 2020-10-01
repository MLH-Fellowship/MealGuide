import { IonAvatar, IonItem, IonLabel, IonChip} from '@ionic/react';
import React from 'react';
import './Avatar.css';
import { useHistory } from "react-router-dom";

const Avatar = ({username, imageURL}) => {
    const history = useHistory();
    const routeChange = () => {
        let path = `/editProfile`;
        history.push(path);
    }
    return (
        <IonItem class="UserProfile">
            <IonAvatar slot="start" class="userProfileImage">
                <img src={imageURL} alt="User Profile"/>
            </IonAvatar>
            <IonLabel>
                <h2 class="userProfileName">{username}</h2>
                <IonChip class="ion-margin-start userProfileLink">
                    <ion-label class="">
                        <a class="editProfileLink" onClick={routeChange}>
                            Edit Profile
                        </a>
                    </ion-label>
                </IonChip>
            </IonLabel>
        </IonItem>
    )
}

export default Avatar;