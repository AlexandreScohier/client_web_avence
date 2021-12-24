import React from "react";
import {Button, TextField} from "@material-ui/core";

const RowReadGarage = ({element, handleEditClick,handleDeleteClick ,index,renderTableHeader}) =>{
    return(
        <tr>
            {
                 renderTableHeader(element).map((column,index)=>{
                    if(column !== "image") {
                        return <td key={index}>{element[`${column}`]}</td>;
                    }else{
                        return <td key={index}><img height={"60px"} width={"60px"} src={element[`${column}`]}/></td>;
                    }
                })
            }
            <td>
                <button type="button" onClick= {(event => handleEditClick(event,index))}>
                    edit
                </button>
                <button type="button" onClick={()=>handleDeleteClick(element.id)}>
                    delete
                </button>
            </td>
        </tr>
    );

}

export default RowReadGarage;