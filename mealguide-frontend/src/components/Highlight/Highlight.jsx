import { IonContent } from '@ionic/react';
import React from 'react';
import './Highlight.css'

const Highlight = ({ highlightsides, highlighttop , highlightbottom}) => {
    return (
        <IonContent>
            <div className='highlight' style={{ marginLeft: highlightsides, marginRight: highlightsides, marginTop:highlighttop, marginBottom:highlightbottom }}></div>
        </IonContent>
    )
}

export default Highlight;