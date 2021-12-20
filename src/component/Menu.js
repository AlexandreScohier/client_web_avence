import React, {useState} from "react";
import "../style/menuStyle.css"
import "../style/mainStyle.css"

class Menu extends React.Component{
    render() {
        return(
            <div className="menu">
                <button>Modifier las mécaniciens</button>
                <button>Modifier les garages</button>
                <button>Modifier les disponibilités des mécaniciens</button>
                <button>Modifier les réparations </button>
            </div>
        )
    }
}

export default Menu;