import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form'
import { IonGrid, IonRow, IonCol, IonLabel, IonNote, IonItem } from '@ionic/react';
import './UserFacts.css'

const UserFacts = ({ FactLableOne, FactValueOne, FactLableTwo, FactValueTwo, FactLableThree, FactValueThree}) => {
    return (
        <IonGrid>
            <IonRow>
                <IonCol>
                    <IonItem className='iteminner'>
                        <IonLabel className='iteminner'>
                            {FactLableOne} : {FactValueOne}
                        </IonLabel>
                    </IonItem>
                </IonCol>
                <IonCol>
                    <IonItem className='iteminner'>
                        <IonLabel className='iteminner'>
                            {FactLableTwo} : {FactValueTwo}
                        </IonLabel>
                    </IonItem>
                </IonCol>
                <IonCol>
                    <IonItem className='iteminner'>
                        <IonLabel className='iteminner'>
                            {FactLableThree} : {FactValueThree}
                        </IonLabel>
                    </IonItem>
                </IonCol>
            </IonRow>
        </IonGrid>
    )
}

export default UserFacts;