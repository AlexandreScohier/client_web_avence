import React from "react";
import {TextField} from "@material-ui/core";

const RowEditGarage = ({handleEditClick}) =>{
    return(
        <tr>
            <td>
            <input
                type={"text"}
                name={"Nom"}
                placeholder={"Nom"}
                required
            />
            </td>
            <td>
            <input
                type={"text"}
                name={"adresse"}
                placeholder={"Adresse"}
                required
            />
            </td>
            <td>
            <input
                type={"text"}
                name={"Numéro de téléphone"}
                placeholder={"Numéro de téléphone"}
                required
            />
            </td>
            <td>
            <input
                type={"text"}
                name={"image"}
                placeholder={"Url de l'image"}
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