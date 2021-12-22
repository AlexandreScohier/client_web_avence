import React from "react";
import {getAllGarage} from "./API";

class TableauGarage extends React.Component{
    constructor() {
        super();
        this.state = {
            garageTitle: {
                name: "Nom",
                address: "adresse",
                phoneNumber: "Numéro de téléphone",
                image: "image"
            },
            garages: []
        }

    }

    componentDidMount() {
        getAllGarage().then(response=>this.setState({garages:response})).catch(error=>console.error(error));
    }



    render() {
        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>{this.state.garageTitle.name}</th>
                            <th>{this.state.garageTitle.address}</th>
                            <th>{this.state.garageTitle.phoneNumber}</th>
                            <th>{this.state.garageTitle.image}</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.garages.map((garage,index)=>{
                            return(
                                <tr key={index}>
                                    <td>{garage.nom}</td>
                                    <td>{garage.adresse}</td>
                                    <td>{garage.numtel}</td>
                                    <td><img alt={"cc"} width={"60px"} height={"60px"} src={garage.image}/></td>
                                </tr>

                            )
                        })
                    }
                    </tbody>
                </table>
            </div>

        )
    }
}
export default TableauGarage;