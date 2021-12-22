import React from "react";
import {Button, TextField} from "@material-ui/core";

const RowRead = ({garage, handleEditClick ,index}) =>{
        return(
                <tr>
                    <td>{garage.nom}</td>
                    <td>{garage.adresse}</td>
                    <td>{garage.numtel}</td>
                    <td><img alt={""} width={"60px"} height={"60px"} src={garage.image}/></td>
                    <td>
                        <button type="button" onClick= {(event => handleEditClick(event,index))}>
                            edit
                        </button>
                        <button type="button">
                            delete
                        </button>
                    </td>
                </tr>
        )
}

export default RowRead;