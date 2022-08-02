import React from 'react';
import "./SideBar.css";
import Logo from "../../image/logo.jpg"

class SideBar extends React.Component{
 render() {
    return (
        <div className="SidBar">
            <img src={Logo} alt="logo"></img>
            <ul>
                <li 
                onClick={() => window.location.pathname = "/Garage"}
                id={window.location.pathname === "/Garage" ? "active" : ""}
                >
                    Garage
                </li>
           
                <li 
                onClick={() => window.location.pathname = "/Mecano"}
                id={window.location.pathname === "/Mecano" ? "active" : ""}
                >
                    Mecano
                </li>
  
                <li 
                onClick={() => window.location.pathname = "/Dispos"}
                id={window.location.pathname === "/Dispos" ? "active" : ""}
                >
                    Dispos
                </li>

                <li 
                onClick={() => window.location.pathname = "/Logout"}
                id={window.location.pathname === "/Logout" ? "active" : ""}
                >
                    Logout
                </li>
            </ul>

        </div>
    )
}
}
export default SideBar
