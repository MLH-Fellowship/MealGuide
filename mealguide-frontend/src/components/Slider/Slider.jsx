import { IonList, IonItem, IonRange} from '@ionic/react';
import React from 'react';
import './Slider.css'

const Slider = ({ sliderTitle, sliderRangeMin, SliderRangeMax, sliderColor, defaultValue}) => {
    return (
        <ion-list>
            <ion-list-header class="sliderRange">
                {sliderTitle}
            </ion-list-header>
            <ion-item class="sliderRange">
                <ion-range class="sliderRange" min={sliderRangeMin} max={SliderRangeMax} value={defaultValue} pin color={sliderColor}>
                </ion-range>
            </ion-item>
        </ion-list>
    )
}

export default Slider;