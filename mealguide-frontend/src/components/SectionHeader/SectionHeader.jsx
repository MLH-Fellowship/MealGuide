import { IonLabel, IonItem } from '@ionic/react';
import React from 'react';
import './SectionHeader.css'

const SectionHeader = ({ SectionTitle }) => {
    return (
        <IonItem>
            <IonLabel class="sectionHeader">
                {SectionTitle}
            </IonLabel>
            <br />
        </IonItem>       
    )
}

export default SectionHeader;