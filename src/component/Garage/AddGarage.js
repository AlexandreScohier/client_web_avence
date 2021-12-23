import React from "react";
import {TextField} from "@material-ui/core";

class AddGarage extends React.Component{
    constructor() {
        super();
        this.state = {
            name: "",
            address: "",
            phoneNumber: "",
            image: ""}
    }
    render() {
        return(
            <div>
                <h2>Ajouter un garage</h2>
                <input
                    type={"text"}
                    name={"Nom"}
                    value={this.state.name}
                    placeholder={"Nom"}
                    required
                    />
                <input
                    type={"text"}
                    name={"adresse"}
                    placeholder={"Adresse"}
                    value={this.state.adress}
                    required
                />
                <input
                    type={"text"}
                    name={"Numéro de téléphone"}
                    placeholder={"Numéro de téléphone"}
                    value={this.state.phoneNumber}
                    required
                />
                <input
                    type={"text"}
                    name={"image"}
                    placeholder={"Url de l'image"}
                    value={this.state.image}
                    required
                />
                <button type={"submit"}>Add</button>
            </div>
        )
    }

}

export default AddGarage;