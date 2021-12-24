import React from "react";
import {TextField} from "@material-ui/core";
import "../../style/tableStyle.css"

const RowEditGarage = ({handleEditClick, garage}) =>{
    return(
        <tr>
            <td>
                <input
                    type={"text"}
                    name={"Nom"}
                    placeholder={"Nom"}
                    value={garage.nom}
                    required
                >{garage.nom}</input>
            </td>
            <td>
                <input
                    type={"text"}
                    name={"adresse"}
                    placeholder={"Adresse"}
                    value={garage.adresse}
                    required
                >{garage.adresse}</input>
            </td>
            <td>
                <input
                    type={"text"}
                    name={"Numéro de téléphone"}
                    placeholder={"Numéro de téléphone"}
                    value={garage.numtel}
                    required
                >{garage.numtel}</input>
            </td>
            <td>
                <input
                    type={"text"}
                    name={"image"}
                    placeholder={"Url de l'image"}
                    value={garage.image}
                    required
                >{garage.image}</input>
            </td>
            <td>
                <button type="button">
                    save
                </button>
                <button type="button" onClick= {(event => handleEditClick(event,null))}>
                    cancel
                </button>
            </td>
        </tr>
    );
};

export default RowEditGarage;