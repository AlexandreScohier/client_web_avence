import React from "react";
import {Button, TextField} from "@material-ui/core";
import Redirect from "react-router-dom/es/Redirect";

const RowReadGarage = ({garage, handleEditClick ,handleDeleteClick,index,renderTableHeader,id}) =>{
    return(
        <tr>
            {
                 renderTableHeader(garage).map((column,index)=>{
                    console.log(garage);
                    if(column !== "image") {
                        return <td>{garage[`${column}`]}</td>;
                    }else{
                        return <img height={"60px"} width={"60px"} src={garage[`${column}`]}/>;
                    }
                })
            }
            <td>
                <button type="button" onClick= {(event => handleEditClick(event,index))}>
                    edit
                </button>
                <button type="button" onClick={(event)=>{handleDeleteClick(id)}}>
                    delete
                </button>
            </td>
        </tr>
    );

}

export default RowReadGarage;