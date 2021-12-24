import React from "react";
import {Button, TextField} from "@material-ui/core";

const RowReadGarage = ({element, handleEditClick ,index,renderTableHeader}) =>{
    return(
        <tr>
            {
                 renderTableHeader(element).map((column,index)=>{
                    if(column !== "image") {
                        return <td>{element[`${column}`]}</td>;
                    }else{
                        return <img height={"60px"} width={"60px"} src={element[`${column}`]}/>;
                    }
                })
            }
            <td>
                <button type="button" onClick= {(event => handleEditClick(event,index))}>
                    edit
                </button>
                <button type="button" onClick={()=>handleEditClick.delete(element.id)}>
                    delete
                </button>
            </td>
        </tr>
    );

}

export default RowReadGarage;