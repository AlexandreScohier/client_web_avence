import React from 'react';
import "./SideBar.css";
import Logo from "../../../image/logo.jpg"

class SideBar extends React.Component{

    disconnect(){
        localStorage.clear();
        window.location.reload();
    }


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
                onClick={() => window.location.pathname = "/Mechanic"}
                id={window.location.pathname === "/Mechanic" ? "active" : ""}
                >
                    Mécanicien
                </li>
  
                <li 
                onClick={() => window.location.pathname = "/Availability"}
                id={window.location.pathname === "/Availability" ? "active" : ""}
                >
                    Disponibilité
                </li>

                <li 
                onClick={() => window.location.pathname = "/Repair"}
                id={window.location.pathname === "/Repair" ? "active" : ""}
                >
                    Réparation
                </li>

                <li 
                onClick={() => this.disconnect()}
                >
                    Se déconnecté
                </li>
            </ul>

        </div>
    )
}
}
export default SideBar
