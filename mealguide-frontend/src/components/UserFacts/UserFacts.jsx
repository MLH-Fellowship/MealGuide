import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form'
import { IonGrid, IonRow, IonCol, IonLabel, IonNote, IonItem } from '@ionic/react';


const UserFacts = ({ FactLableOne, FactValueOne, FactLableTwo, FactValueTwo, FactLableThree, FactValueThree}) => {
    return (
        <IonGrid>
            <IonRow>
                <IonCol>
                    <IonItem>
                        <IonLabel>
                            {FactLableOne} : {FactValueOne}
                        </IonLabel>
                    </IonItem>
                </IonCol>
                <IonCol>
                    <IonItem>
                        <IonLabel>
                            {FactLableTwo} : {FactValueTwo}
                        </IonLabel>
                    </IonItem>
                </IonCol>
                <IonCol>
                    <IonItem>
                        <IonLabel>
                            {FactLableThree} : {FactValueThree}
                        </IonLabel>
                    </IonItem>
                </IonCol>
            </IonRow>
        </IonGrid>
    )
}

export default UserFacts;