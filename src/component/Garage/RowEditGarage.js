import React from "react";
import {TextField} from "@material-ui/core";

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
                />
            </td>
            <td>
                <input
                    type={"text"}
                    name={"adresse"}
                    placeholder={"Adresse"}
                    value={garage.adresse}
                    required
                />
            </td>
            <td>
                <input
                    type={"text"}
                    name={"Numéro de téléphone"}
                    placeholder={"Numéro de téléphone"}
                    value={garage.numtel}
                    required
                />
            </td>
            <td>
                <input
                    type={"text"}
                    name={"image"}
                    placeholder={"Url de l'image"}
                    value={garage.image}
                    required
                />
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