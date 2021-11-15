import React,{useState} from 'react'
import '../Styles/Header.css'
import menu from '../Images/icon-menu.svg'
import close from '../Images/icon-close.svg'
import logo from '../Images/logo192.png'
export default function Header() {
    const [display, setDisplay] = useState("dontshow");
    return (
        <div className="HeaderContainer">
            <a href="#" className="Logo"><img src={logo} width="35"/></a>
            <nav>
            <a href="#TravelContainer">Travel</a>    
            <a href="#ObjectsContainer">Object</a>
            <a href="#ReflectionContainer">Reflection</a>
            <a href="#">Mirors</a>
            </nav>
            <a href="#" className="Menu" onClick={
                () => setDisplay("show")
            }><img src={menu}/></a>
            <div id={display} className="nav2">
            <a onClick={()=>setDisplay("dontshow")} href="#"><img src={close}/></a>
            <a onClick={()=>setDisplay("dontshow")} href="#TravelContainer">Travel</a>    
            <a onClick={()=>setDisplay("dontshow")} href="#ObjectsContainer">Object</a>
            <a onClick={()=>setDisplay("dontshow")} href="#ReflectionContainer">Reflection</a>
            <a onClick={()=>setDisplay("dontshow")} href="#">Mirors</a>
            </div>
        </div>
    )
}
