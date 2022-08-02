import React from "react";
import { getAllGarage } from "../API/API";
import "../../style/GarageList.css";

class GarageList extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            elements: [],
        }
    }

    componentDidMount() {
        getAllGarage().then(response=>this.setState({elements:response})).catch(error=>console.error(error));
        console.log(this.state.elements);
    }

    render() {
        return (
            <div className="GarageList">
                <div className="header">
                    <h1 className="col-md-10">Garage</h1>
                    <button type="button" className=" col-md-2 btn btn-primary">Ajouter un garage</button>
                </div>
                 <table className="table table-dark table table-hover">
                    <thead>
                        <tr>
                            <th className="col-md-1"></th>
                            <th className="col-md-2">Nom</th>
                            <th className="col-md-5">Adresse</th>
                            <th className="col-md-2">Numéro de téléphone</th>
                            <th className="col-md-2"></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="col-md-1"></td>
                            <td className="col-md-2">L'épave</td>
                            <td className="col-md-5">Rue ddsdq</td>
                            <td className="col-md-2">0469521154</td>
                            <td className="col-md-2">
                                <button type="button" className="btn btn-primary">Modifier</button>
                                <button type="button" className="btn btn-danger">Supprimer</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}
export default GarageList;