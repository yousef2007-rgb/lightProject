import React,{useState} from 'react'
import '../Styles/Objects.css'
import objectsImage from '../Images/Objects-image.jpeg'
import simulatorThumnail from '../Images/thumnail.jpg'
import close from '../Images/icon-close.svg'
export default function Objects() {
    const [display2, setDisplay2] = useState("dontshowSim");
    return (
        <div id="ObjectsContainer">
            <div className="objectInformation">
            <div>
            <h1>What Happens When Light strikes objects?</h1>
            <p>
            The material that objects are made of affects the way light behaves when it hits them.
            </p>
            <ul>
                <li><b>Transparent</b> materials are see-through and they let light travel through them.</li>
                <li>If you can only see a glow of light through a material and not a full ray of light, the material is <b>translucent</b>.</li>
                <li><b>Opaque</b> objects do not let light any travel through them.</li>
            </ul>
            <p>
                Glass is an example of a transparent object, Wood or metal is opaque.
                and you can see that with <a href="#"onClick={()=> setDisplay2("showSim")}><b style={{color:'rgb(251, 176, 59)'}}>this game</b></a> 
            </p>
            </div>
            <div>
            <img src={objectsImage} />
            </div>
            </div>
            
              
            <div id={display2}>
            <div className="simulator">
            <a onClick={()=>setDisplay2("dontshowSim")} href="#"><img src={close}/></a>
            <iframe src="https://light-reflection-simulator.netlify.app/" width="1000" height="600" frameborder="0"  scrolling="no"></iframe>
            </div>
            </div>
        </div>
    )
}
