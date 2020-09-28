import React from 'react';

import { IonItemGroup, IonItemDivider, IonLabel, IonItem, IonItemSliding, IonItemOptions, IonItemOption } from '@ionic/react';

const List = ({dish}) => (
    <>
        <IonItemGroup>
            <IonItem>
                <IonLabel>{dish}</IonLabel>
            </IonItem>
        </IonItemGroup>
    </>
);

export default List;
