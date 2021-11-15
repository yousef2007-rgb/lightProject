import React from 'react'
import '../Styles/Travel.css'
import travelImage from '../Images/travel-image.jpeg'
import spectrumImage from '../Images/spectrum-image.jpeg';
export default function Travel() {
    return (
        <div id="TravelContainer" className="TravelContainer">
            <div className="travelParagraph1">
            <div className="travelInformation">
            <h1>
            How Does Light Travel?
            </h1>
            <p>
                Light travels from the sun to Earth in waves. These waves, called electromagnetic waves, áre a form of energy that can travel through space. We talk about electromagnetic waves in terms of the length
                of the wave, or wavelength.
                The electromagnetic spectrum is the name for the whole range of electromagnetic waves. It is organized by wavelength, from the longest electromagnetic waves to the shortest. The longest waves in the spectrum are radio waves. Then come microwaves, infrared rays, visible light, ultraviolet rays, X rays, and gamma rays.
                electromagnetic waves, waves that form when an electric field couples with a magnetic field; the waves that make up light
            </p>
        </div>
        <div className="travelImage">
            <img src={travelImage} />
        </div>
        </div>
        <div className="travelParagraph2">
            
        <div className="travelImage2">
            <img src={spectrumImage} />
        </div>
        <div className="travelInformation2">

            <p>
                visible light is the light that can be visible with the naked eye. it is one form of electromagnetic radiation, which ends up from the vibrations of electrical and magnetic fields. other types of mild that exist in the electromagnetic spectrum consist of
            </p>
            <ul>
                <li>Gamma rays</li>
                <li>X-rays</li>
                <li>Ultraviolet rays</li>
                <li>Infrared</li>
            </ul>
        </div>
        </div>
        </div>
    )
}
