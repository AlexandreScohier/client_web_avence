import React, {useState} from "react";
import "../style/menuStyle.css"
import "../style/mainStyle.css"

class Menu extends React.Component{
    render() {
        return(
            <div className="menu">
                <button>Modifier las mécaniciens</button>
                <button>Modifier les garages</button>
                <button>Modifier la table disponibilité</button>
                <button>Modifier les réparation </button>
            </div>
        )
    }
}

export default Menu;