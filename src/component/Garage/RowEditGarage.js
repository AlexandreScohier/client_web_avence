import React from "react";
import {TextField} from "@material-ui/core";
import "../../style/tableStyle.css"

const RowEditGarage = ({handleEditClick, element, renderTableHeader}) =>{
    return(
        <tr>
            {
                renderTableHeader(element).map((column,index)=>{
                    return <td>
                            <input
                            type={"text"}
                            name={element[`${column}`]}
                            placeholder={element[`${column}`]}
                            value={element[`${column}`]}
                            required
                        >{element[`${column}`]}</input>
                        </td>;
                })
            }
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