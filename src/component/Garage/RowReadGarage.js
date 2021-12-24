import React from "react";


const RowReadGarage = ({garage, handleEditClick ,handleDeleteClick,index,renderTableHeader,id}) =>{
    return(
        <tr>
            {
                 renderTableHeader(garage).map((column,index)=>{
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