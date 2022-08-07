import React from "react";
import { getAsync, deleteAsync } from "../API/API";
import "../../style/GarageList.css";

class GarageList extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            elements: this.props.model.object,
            model: this.props.model,
        }
    }

    async componentDidMount() {
        await this.getElementsAsync();
    }

    async getElementsAsync(){
        await getAsync(this.state.model.apiRoute).then(response=>this.setState({elements:response})).catch(error=>console.error(error));
    }

    

    render() {
        return (
            <div className="GarageList">
                <div className="header">
                    <h1 className="col-md-10">{this.state.model.titleList}</h1>
                    <button type="button" className=" col-md-2 btn btn-primary" onClick={() => window.location.pathname = this.state.model.route+"/Add"}>Ajouter {this.state.model.determinative} {this.state.model.label}</button>
                </div>
                 <table className="table table-dark table table-hover">
                    <thead>
                        <tr>
                            {this.state.model.titles.map((title, index)=>{
                                return(
                                <th key={index} className="col-md-1">{title}</th>
                                )
                            })}
                            <th className="col-md-1"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.elements.map((element, index)=>{
                            return(
                                <tr key={index} className={"align-middle"}>
                                    {this.props.model.tableBody(element)}
                                    <td className="col-md-2">
                                        <button type="button" className="btn btn-primary" onClick={() => window.location.pathname = this.state.model.route+"/Edit/"+element.id}>Modifier</button>
                                        <button type="button" className="btn btn-danger"  onClick={async()=>  await deleteAsync(this.state.model.apiRoute+"/", element.id).then(() => {
                                            this.getElementsAsync();
                                        })}>Supprimer</button>
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