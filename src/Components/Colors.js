import React from 'react'
import '../Styles/Colors.css'
import colorsImage from '../Images/colors.jpg'
export default function Colors() {
    return (
        <div id="colorsContainer" className="colorsContainer">
            <div className="colorsParagraph">
            
        <div className="colorsImage">
            <img src={colorsImage} />
        </div>
        <div className="colorsInformation">
            <h1>How do we see colors?</h1>
            <p>
                Newton observed that color is not inherent in objects. Rather, the surface of an object reflects some colors and absorbs all the others. We perceive only the reflected colors.
                <br/>
                accordingly, red isn't always "in" an apple. The surface of the apple is reflecting the wavelengths we see as red and soaking up all of the rest. An object seems white when it reflects all wavelengths and black while it absorbs them all.
                <br/>
                Red, green and blue are the additive primary colors of the color spectrum. Combining balanced amounts of red, green and blue lights also produces pure white. By varying the amount of red, green and blue light, all of the colors in the visible spectrum can be produced.
            </p>
        </div>
        </div>
        </div>
    )
}
