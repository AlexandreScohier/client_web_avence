import React from "react";
import {TextField} from "@material-ui/core";
import {postGarage} from "../API/index";


class AddGarage extends React.Component{
    constructor(props) {
        super(props);
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
                <input
                    type={"text"}
                    name={"Nom"}
                    value={this.state.name}
                    placeholder={"Nom"}
                    onChange={(event)=>this.nameChange(event)}
                    required
                    />
                <input
                    type={"text"}
                    name={"adresse"}
                    placeholder={"Adresse"}
                    value={this.state.address}
                    onChange={(event => this.addressChange(event))}
                    required
                />
                <input
                    type={"text"}
                    name={"Numéro de téléphone"}
                    placeholder={"Numéro de téléphone"}
                    value={this.state.phoneNumber}
                    onChange={event => this.phoneNumberChange(event)}
                    required
                />
                <input
                    type={"text"}
                    name={"image"}
                    placeholder={"Url de l'image"}
                    value={this.state.image}
                    onChange={event => this.imageChange(event)}
                    required
                />
                <button type={"submit"} onClick={()=>this.submit(this.state.name,this.state.address,this.state.phoneNumber,this.state.image)}>Add</button>
            </div>
        )
    }

}

export default AddGarage;