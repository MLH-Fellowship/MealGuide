import { IonAvatar, IonItem, IonLabel, IonChip} from '@ionic/react';
import React from 'react';
import './Avatar.css'

const Avatar = ({username}) => {
    return (
        <IonItem class="UserProfile">
            <IonAvatar slot="start" class="userProfileImage">
                <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" alt="User Profile"/>
            </IonAvatar>
            <IonLabel>
                <h2 class="userProfileName">{username}</h2>
                <IonChip class="ion-margin-start userProfileLink">
                    <ion-label class="">Edit Profile</ion-label>
                </IonChip>
            </IonLabel>
        </IonItem>
    )
}

export default Avatar;