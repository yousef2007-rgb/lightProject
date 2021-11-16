import React,{useState} from 'react'
import '../Styles/Footer.css'
import logo from '../Images/logo192.png'
export default function footer() {
    return (
        <div className="FooterContainer">
            
            
            
            <a href="https://github.com/hamzalegend" target="_blank">HamzaAbdelal</a>   
            <a href="https://github.com/yousef2007-rgb" target="_blank">yousef2007-rgb</a>
            <a href="#" className="Logo"><img src={logo} width="35"/></a>   
            <a href="https://github.com/yousef2007-rgb/lightProject" target="blank">Code</a>
            <a>Email:light.project@yahoo.com</a>
            
        </div>
    )
}
