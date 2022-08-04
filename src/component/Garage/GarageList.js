import React from "react";
import { deleteGarage, getAllGarage } from "../API/API";
import "../../style/GarageList.css";

class GarageList extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            garages: [],
        }
    }

    async componentDidMount() {
        await getAllGarage().then(response=>this.setState({garages:response})).catch(error=>console.error(error));
    }

    

    render() {
        return (
            <div className="GarageList">
                <div className="header">
                    <h1 className="col-md-10">Garage</h1>
                    <button type="button" className=" col-md-2 btn btn-primary" onClick={() => window.location.pathname = "Garage/Add"}>Ajouter un garage</button>
                </div>
                 <table className="table table-dark table table-hover">
                    <thead>
                        <tr>
                            <th className="col-md-1"></th>
                            <th className="col-md-2">Nom</th>
                            <th className="col-md-4">Adresse</th>
                            <th className="col-md-2">Numéro de téléphone</th>
                            <th className="col-md-2"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.garages.map((garage, index)=>{
                            return(
                                <tr key={index} className="align-middle">
                                    <td className="col-md-1"><img alt="Illustration du garage" className="rounded col-md-12" src={garage.image} ></img></td>
                                    <td className="col-md-2">{garage.nom}</td>
                                    <td className="col-md-4">{garage.adresse}</td>
                                    <td className="col-md-2">{garage.numtel}</td>
                                    <td className="col-md-2">
                                        <button type="button" className="btn btn-primary" onClick={() => window.location.pathname = "Garage/Edit/"+garage.id}>Modifier</button>
                                        <button type="button" className="btn btn-danger"  onClick={async()=>  await deleteGarage(garage.id).then().catch(error=>console.error(error))}>Supprimer</button>
                                    </td>
                            </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}
export default GarageList;