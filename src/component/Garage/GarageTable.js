import React,{Fragment, useState} from "react";
import AddGarage from "./AddGarage";
import RowReadGarage from "./RowReadGarage";
import RowEditGarage from "./RowEditGarage";
import "../../style/tableStyle.css";
import {getAllGarage} from "../API";

class TableauGarage extends React.Component{
    constructor() {
        super();
        this.getAllElements = this.getAllGarage.bind(this);
        this.deleteElement= this.deleteGarage.bind(this);
        this.state = {
            titles : [],
            elements: [],
            idEdit: null,
            idDelete: null,
        }

    }
    componentDidMount() {
        this.getAllElements().then(response=>this.setState({elements:response})).catch(error=>console.error(error));
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
                                this.renderTableHeader(this.state.elements[0]).map((title,index)=>{
                                        return <th>{title}</th>;

                                })
                            }
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.elements.map((garage,index)=>(
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