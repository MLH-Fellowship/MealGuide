import { IonContent } from '@ionic/react';
import React from 'react';
import './Highlight.css'

const Highlight = ({ highlightsides, highlighttop , highlightbottom, height}) => {
    return (
        <div className='highlight' style={{ marginLeft: highlightsides, marginRight: highlightsides, marginTop:highlighttop, marginBottom:highlightbottom, height:height }}></div>
    )
}

export default Highlight;