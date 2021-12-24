import React from "react";
import {TextField} from "@material-ui/core";
import {postGarage} from "../API/index";


class AddGarage extends React.Component{
    constructor(props) {
        super(props);
        this.renderTableHeader = this.renderTableHeader.bind(this);
        this.element = this.element.bind(this)
        this.state = {
            name: "",
            address: "",
            phoneNumber: "",
            image: ""}
    }
    nameChange(evt){
        this.setState({name:evt.target.value});
    }
    addressChange(evt){
        this.setState({address:evt.target.value});
    }
    phoneNumberChange(evt){
        this.setState({phoneNumber:evt.target.value});
    }
    imageChange(evt){
        this.setState({image:evt.target.value});
    }
    submit(name,address,phoneNumber,image){

        const data = postGarage({name:name,address:address,phoneNumber: phoneNumber,image:image});
    }
    render() {
        return(
            <div className="AddGarage">
                <h1>Ajouter un garage</h1>
                {
                    this.renderTableHeader(this.element).map((column,index)=>{
                            if(column !== "image"){
                                return(
                                <input
                                    type={"text"}
                                    name={this.element[`${column}`]}
                                    placeholder={this.element[`${column}`]}
                                    value={this.element[`${column}`]}
                                    onChange={(event)=>this.nameChange(event)}
                                    required
                                >
                                    {this.element[`${column}`]}
                                </input>)}
                                    return(
                                    <input
                                        type={"text"}
                                        name={this.element[`${column}`]}
                                        placeholder={this.element[`${column}`]}
                                        value={this.element[`${column}`]}
                                        onChange={event => this.imageChange(event)}
                                        required
                                    >
                                        {this.element[`${column}`]}
                                    </input>);
                    })
                }
                <button type={"submit"} onClick={()=>this.submit(this.state.name,this.state.address,this.state.phoneNumber,this.state.image)}>Add</button>
            </div>
        )
    }

}

export default AddGarage;