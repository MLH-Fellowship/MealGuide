import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form'
import { IonGrid, IonCol, IonRow, IonItem, IonLabel } from '@ionic/react';
import './UserFact.css'


const UserFact = ({ FactLabel, FactValue }) => {
    return (
        <IonGrid>
            <IonRow>
                <IonCol class="UserFacts">
                    <IonItem>
                        <IonLabel>
                            {FactLabel} : {FactValue}
                        </IonLabel>
                    </IonItem>
                </IonCol>
            </IonRow>
        </IonGrid>
    )
}

export default UserFact;