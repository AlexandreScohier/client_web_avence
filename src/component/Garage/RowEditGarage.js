import React from "react";
import {TextField} from "@material-ui/core";
import "../../style/tableStyle.css"

class RowEditGarage extends React.Component {//= ({handleEditClick, handleSaveEditClick,element, renderTableHeader}) =>{
    constructor(props) {
        super(props);
        this.handleEditClick = this.props.handleEditClick;
        this.handSaveEditClick = this.props.handleSaveEditClick;
        this.renderTableHeader = this.props.renderTableHeader;
        this.state = {
            element : this.props.element
        }
    }
    changeValue(event,column){
        let elemToSave = this.state.element;
        elemToSave[`${column}`] = event.target.value;
        this.setState({element:elemToSave});
    }


    render(){
        return(
            <tr>
                {
                    this.renderTableHeader(this.state.element).map((column,index)=>{
                        return (
                            <td key={index}>
                                <input key={index}
                                       type={"text"}
                                       name={this.state.element[`${column}`]}
                                       value={this.state.element[`${column}`]}
                                       onChange={(event)=>{this.changeValue(event,column)}}
                                       required
                                /></td>
                        );
                    })
                }
                <td>
                    <button type="button" onClick={event=> this.handSaveEditClick(event,this.state.element)}>
                        save
                    </button>
                    <button type="button" onClick= {(event => this.handleEditClick(event,null))}>
                        cancel
                    </button>
                </td>
            </tr>
        )
    }
}





export default RowEditGarage;