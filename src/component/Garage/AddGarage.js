import React from "react";
import {TextField} from "@material-ui/core";
import {postGarage} from "../API/index";


class AddGarage extends React.Component{
    constructor(props) {
        super(props);
        this.renderTableHeader = this.props.renderTableHeader;
        this.state = {
            element : undefined}
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.props !== prevProps){
            this.setState({element:this.props.element});
        }
    }

    changeValue(event,column){
        let elemToSave = this.state.element;
        elemToSave[`${column}`] = event.target.value;
        this.setState({element:elemToSave});
    }
    render() {
        console.log(this.state.element);
        return(
            <div className="AddGarage">
                <h1 key={"title"}>Ajouter un garage</h1>
                {
                    this.renderTableHeader(this.state.element).map((column,index)=>{
                        if(column!=="id") {
                                return (
                                    <input
                                        key={index}
                                        type={"text"}
                                        name={this.state.element[`${column}`] ?? ""}
                                        onChange={(event) => this.changeValue(event)}
                                        required
                                    />
                                )

                        }
                    })
                }
                <button type={"submit"} onClick={()=>this.submit(this.state.name,this.state.address,this.state.phoneNumber,this.state.image)}>Add</button>
            </div>
        )
    }

}

export default AddGarage;