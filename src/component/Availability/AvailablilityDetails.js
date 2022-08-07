import React from "react";
import "../../style/GarageDetails.css";
import { getByIdAsync, postAsync, updateAsync } from "../API/API";
import { withRouter} from 'react-router-dom';



class AvailabilityDetails extends React.Component{
     
    constructor(props) {
        super(props);
        this.state = {
            availability: {},
            model: this.props.model,
            isEditMode: this.props.isEditMode,
           
            
        }
    }

    async componentDidMount() {
        if(this.state.isEditMode){
            const id  = this.props.match.params.id;
            await getByIdAsync(this.state.model.apiRoute, id).then(response=>this.setState({availability:response})).catch(error=>console.error(error));
        }
    }

    async handlesubmit(event){
        if(this.state.availability.isBooked === undefined){
            this.state.availability.isBooked = false;
        }
        event.preventDefault();
        if(this.state.isEditMode){
            await updateAsync(this.state.model.apiRoute, this.state.availability).then(() => 
            this.props.history.push("/"+this.state.model.route)
            );
        }else{
            await postAsync(this.state.model.apiRoute, this.state.availability).then(() => 
            this.props.history.push("/"+this.state.model.route)
            );
        }
    }

    onChange(event){
        const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
        let elemToSave = this.state.availability;
        elemToSave[event.target.name]  = value;
        this.setState({[event.target.name] : value})
    }

    render() {
        return (
            <div className="GarageDetails">
                   <form>
                    <h1>{this.state.isEditMode ? "Modification" : "Ajout"} d'{this.state.model.determinative} {this.state.model.label}</h1>
                        
                        <div style={{ display:"inline-block"}}>
                            <div style={{paddingBottom:"20px"}}>
                                <label  className="form-label">Date: </label> 
                                <input className="form-control" type="datetime-local" name={"date"} id={"date"} defaultValue={this.state.availability.date} value={this.state.availability.date} onChange = {(event) => this.onChange(event)}></input> 
                            </div>
                            
                            <div className="form-check" style={{paddingBottom:"20px"}}>
                                <label className="form-check-label">Reservé</label>
                                <input className="form-check-input" type="checkbox" name={"isBooked"} checked={this.state.availability.isBooked} value={this.state.availability.isBooked} onChange = {(event) => this.onChange(event)}></input>
                            </div>
                            
                            <div>
                                <label  className="form-label">Numéro du mécanicien: </label>
                                <input type="text" className="form-control" name={"mecanicien_fk"} value={this.state.availability.mecanicien_fk} onChange = {(event) => this.onChange(event)}></input>
                            </div>

                            <div>
                                <label  className="form-label">Numéro de la réparation: </label>
                                <input type="text" className="form-control" name={"reparation_fk"} value={this.state.availability.reparation_fk} onChange = {(event) => this.onChange(event)}></input>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary col-md-12 submit" onClick={(event) => this.handlesubmit(event)}>{this.state.isEditMode  ? "Modifier": "Ajouter"}</button>

                   </form>
            </div>
        )
    }
}

export default withRouter(AvailabilityDetails);