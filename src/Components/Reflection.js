import React from 'react'
import '../Styles/Refleaction.css'
import refleactionImage from  '../Images/reflection-image.jpeg'
import smoothSerface from '../Images/smooth-surface.svg'
import ruf from '../Images/ruf.svg'
export default function Reflection() {
    return (
        <div id="ReflectionContainer" className="ReflectionContainer">
        <div className="reflectionParagraph">
        <div className="reflectionInformation">
        <h1>
        Reflection
        </h1>
        <p>
       Reflection is when light bounces off an object. If the surface is smooth and shiny, like glass, water or polished metal, the light will reflect at the same angle as it hit the surface. This is called specular reflection.
        </p>
    </div>
    <div className="reflectionImage">
        <img src={smoothSerface}/>
    </div>
    </div>
    <div className="reflectionParagraph">
        

    <div className="reflectionInformation">
        <h1>
        Diffuse reflection 
        </h1>
        <p>
            is when light hits an object and reflects in lots of different directions. This happens when the surface is rough. Most of the things we see are because light from a source has reflected off it.
        </p>
    </div>
        <div className="reflectionImage">
        <img src={ruf}/>
    </div>
    </div>
    </div>
    )
}
