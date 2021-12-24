import React,{Fragment, useState} from "react";
import AddGarage from "./AddGarage";
import RowReadGarage from "./RowReadGarage";
import RowEditGarage from "./RowEditGarage";
import "../../style/tableStyle.css";
import {getAllGarage} from "../API";

class TableauGarage extends React.Component{
    constructor(props) {
        super(props);
        this.getAllElements = this.props.getAllElements;
        this.deleteElement = this.props.deleteElement;
        this.updateGarage = this.props.updateGarage;
        this.postGarage = this.props.postGarage;
        this.state = {
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
                        this.state.elements.map((element,index)=>(
                            <Fragment>
                                { this.state.idEdit === index ? (
                                    <RowEditGarage handleEditClick = {this.handleEditClick} element={element} renderTableHeader={this.renderTableHeader}/>
                                ) : (
                                    <RowReadGarage element={element} handleEditClick = {this.handleEditClick = {delete : this.deleteGarage}} index={index} renderTableHeader={this.renderTableHeader}/>
                                )}
                            </Fragment>
                            ))}
                    </tbody>
                </table>
                </form>
                <AddGarage renderTableHeader={this.renderTableHeader()} element = {this.state.elements[0]}/>
            </div>

        )
    }
}
export default TableauGarage;