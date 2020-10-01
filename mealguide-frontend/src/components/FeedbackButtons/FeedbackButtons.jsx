import React from 'react';
import {IonButton, IonIcon, IonToolbar} from '@ionic/react';
import { thumbsUp, thumbsDown } from 'ionicons/icons';


const FeedbackButtons = () => {
    return (
        <>
            <h6 style={{textAlign:'center'}}>Did you like our suggestions?</h6>
        <IonToolbar style={{paddingLeft:'45%'}}>
            <IonButton fill='clear' style={{backgroundColor:'#ffb6c3', borderRadius:'5px'}} className='navbutton'>
                <IonIcon color='textgreen' icon={thumbsUp} />
            </IonButton>
            <IonButton fill='clear' style={{backgroundColor:'#ffb6c3', borderRadius:'5px'}} className='navbutton'>
                <IonIcon color='textgreen' icon={thumbsDown} />
            </IonButton>
        </IonToolbar>
        </>
    )
}

export default FeedbackButtons;