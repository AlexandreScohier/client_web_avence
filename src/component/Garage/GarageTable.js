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
            titles : [],
            garages: [],
            idEdit: null,
            idDelete: null,
        }

    }

    componentDidMount() {
        getAllGarage().then(response=>this.setState({garages:response})).catch(error=>console.error(error));
        console.log(this.state.garages);

    }

    handleEditClick = (event, index) => {
        event.preventDefault();
        this.setState({idEdit : index});
    }
    renderTableHeader(tab) {
        let titles = [];
        console.log(tab);
        for (let name in tab) {
            if (name !== "id") {
                titles.push(name);
            }
        }
        return titles;
    }
    render() {
        return (
            <div>
                <form>
                <table>
                    <thead>
                        <tr>
                            {
                                this.renderTableHeader(this.state.garages[0]).map((title,index)=>{
                                        return <th>{title}</th>;

                                })
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
                                    <RowReadGarage garage={garage} handleEditClick = {this.handleEditClick = {delete : deleteGarage}} index={index} renderTableHeader={this.renderTableHeader}/>
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