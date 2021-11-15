import React from 'react'
import '../Styles/Refleaction.css'
import refleactionImage from  '../Images/reflection-image.jpeg'
import smoothSerface from '../Images/smooth-surface.svg'
import ruf from '../Images/ruf.svg'
export default function Reflection() {
    return (
        <div id="ReflectionContainer" className="ReflectionContainer">
        <div className="reflectionParagraph1">
        <div className="reflectionInformation">
        <h1>
        What is Reflection?
        </h1>
        <p>
        All objects reflect some light. This means that light
        <br/><br/>
bounces off the objects. However, different objects
<br/><br/>
reflect light in different ways. Some objects allow you to see a reflection-or image of something. For example, when you look at a mirror or a pool of water, you can see a reflection of yourself.
<br/><br/>
Other objects do not do this. For example, when you look at a wool sweater or a painted wall, you see only the object itself. What you see when you look at an object depends on how its surface reflects light.
<br/><br/>
To show how light travels and reflects, we can use straight lines to represent light rays. When parallel rays of light hit a smooth, or even, surface, all the rays are reflected at the same angle. This is called regular reflection. For example, when you look at a mirror, you see your own reflection. The light rays from your body hit the smooth surface of the mirror and are reflected regularly.
        </p>
    </div>
    <div className="reflectionImage">
        <img src={refleactionImage}/>
    </div>
    </div>
    <div className="reflectionParagraph2">
        

    <div className="reflectionInformation2">

        <p>
        Visible light is the only part of the electromagnetic spectrum that people can see. Visible light is just a small part of the electromagnetic spectrum. It is located between infrared rays and ultraviolet rays. Visible light is a mixture of all the colors we can see in a rainbow: red, orange, yellow, green, blue, and violet. When our eyes take in different wavelengths of light, we see different colors. We see the longest wavelengths of visible light as red. We see the shortest wavelengths as violet.
        </p>
    </div>
        <div className="reflectionImage2">
        <img src={smoothSerface}/>
        <img src={ruf}/>
    </div>
    </div>
    </div>
    )
}
