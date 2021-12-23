import React,{Fragment, useState} from "react";
import {getAllGarage,deleteGarage} from "../API/index";
import AddGarage from "./AddGarage";
import RowReadGarage from "./RowReadGarage";
import RowEditGarage from "./RowEditGarage";
import "../../style/tableStyle.css";

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
        event.preventDefault();
        this.setState({idEdit : index});
    }
    renderTableHeader(){
        let header = Object.keys(this.state.garages[0]);
        return header.map((key,index)=>{
            return <th key={index}>{key}</th>
        })
    }


    render() {
        return (
            <div>
                <form>
                <table>
                    <thead>
                        <tr>
                            {
                                this.renderTableHeader()
                            }
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.garages.map((garage,index)=>(
                            <Fragment>
                                { this.state.idEdit === index ? (
                                    <RowEditGarage handleEditClick = {this.handleEditClick} garage={{garage}}/>
                                ) : (
                                    <RowReadGarage garage={garage} handleEditClick = {this.handleEditClick = {delete : deleteGarage}} index={index}/>
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