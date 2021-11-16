import React from 'react'
import '../Styles/Light.css'
import lightImage from '../Images/Light_dispersion_conceptual_waves.gif'
import spectrumImage from '../Images/spectrum-image.jpeg';
export default function light() {
    return (
        <div id="lightContainer" className="lightContainer">
            <div className="lightParagraph">
            <div className="lightInformation">
            <h1>
            What is Light defention?
            </h1>
            <p>
                to put it simply, light is a type of radiant power that we're capable of visually understand with our eyes. In other words, light is power that we can see! visible light is a small part of a big a part of what is referred to as the Electromagnetic Spectrum, which contains all the power sorts that tour through area in a wave-like manor. every day, light waves mirror off of objects and into our eyes, which allows us to look the objects. human beings via a ways have the exceptional visual machine structure - even better than a bird, who has to peer small gadgets from high above!
            </p>
        </div>
        <div className="lightImage">
            <img src={lightImage} />
        </div>
        </div>
        
        </div>
    )
}
