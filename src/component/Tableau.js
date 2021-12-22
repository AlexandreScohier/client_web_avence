import React,{Fragment, useState} from "react";
import {getAllGarage} from "./API";
import AddGarage from "./AddGarage";
import RowRead from "./RowRead";
import RowEdit from "./RowEdit";

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
            garages: [],
            idEdit: null,
            idDelete: null,
        }

    }

    componentDidMount() {
        getAllGarage().then(response=>this.setState({garages:response})).catch(error=>console.error(error));
    }

    handleEditClick = (event, index) => {
        console.log("slt")
        event.preventDefault();
        this.setState({idEdit : index});
    }



    render() {
        return (
            <div>
                <form>
                <table>
                    <thead>
                        <tr>
                            <th>{this.state.garageTitle.name}</th>
                            <th>{this.state.garageTitle.address}</th>
                            <th>{this.state.garageTitle.phoneNumber}</th>
                            <th>{this.state.garageTitle.image}</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.garages.map((garage,index)=>(
                            <Fragment>
                                { this.state.idEdit === index ? (
                                    <RowEdit handleEditClick = {this.handleEditClick}/>
                                ) : (
                                    <RowRead garage={garage} handleEditClick = {this.handleEditClick} index={index}/>
                                )}
                            </Fragment>
                            ))}
                    </tbody>
                </table>
                </form>
                <AddGarage/>
            </div>

        )
    }
}
export default TableauGarage;