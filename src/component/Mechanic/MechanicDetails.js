import React from "react";
import "../../style/GarageDetails.css";
import { getByIdAsync, postAsync, updateAsync } from "../API/API";
import { withRouter} from 'react-router-dom';



class MechanicDetails extends React.Component{
     
    constructor(props) {
        super(props);
        this.state = {
            mechanic: {},
            model: this.props.model,
            isEditMode: this.props.isEditMode,
            
        }
    }

    async componentDidMount() {
        if(this.state.isEditMode){
            const id  = this.props.match.params.id;
            await getByIdAsync(this.state.model.apiRoute, id).then(response=>this.setState({mechanic:response})).catch(error=>console.error(error));
        }
        this.setState({estadmin: false})
    }

    async handlesubmit(event){
        event.preventDefault();
        console.log(this.state.mechanic);
        if(this.state.isEditMode){
            await updateAsync(this.state.model.apiRoute, this.state.mechanic).then(() => 
            this.props.history.push("/"+this.state.model.route)
            );
        }else{
            await postAsync(this.state.model.apiRoute, this.state.mechanic).then(() => 
            this.props.history.push("/"+this.state.model.route)
            );
        }
    }

    onChange(event){
        const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
        let elemToSave = this.state.mechanic;
        elemToSave[event.target.name]  = value;
        this.setState({[event.target.name] : value})
    }

    render() {
        return (
            <div className="GarageDetails">
                   <form>
                    <h1>{this.state.isEditMode ? "Modification" : "Ajout"} d'{this.state.model.determinative} {this.state.model.label}</h1>
                    
                    <div className="row mb-5">
                        <div className="col">
                                <label  className="form-label">Nom: </label>
                                <input type="text" className="form-control" name="nom" value={this.state.mechanic.nom} onChange = {(event) => this.onChange(event)}></input>
                        </div>
                        <div className="col">        
                                <label  className="form-label">Prénom: </label>
                                <input type="text" className="form-control" name="prenom" value={this.state.mechanic.prenom} onChange = {(event) => this.onChange(event)}></input>
                        </div>
                        <div className="col">        
                                <label  className="form-label">Mot de passe: </label>
                                <input type={this.state.isEditMode ? "text" : "password"} className="form-control" name="password" value={this.state.mechanic.password} onChange = {(event) => this.onChange(event)}></input>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6">
                                <label  className="form-label">Adresse e-mail: </label>
                                <input type="text" className="form-control" name="adressemail" value={this.state.mechanic.adressemail} onChange = {(event) => this.onChange(event)}></input>
                        </div>
                        <div className="col-4">        
                                <label  className="form-label">Numéro du garage: </label>
                                <input type="text" className="form-control" name="garage_fk" value={this.state.mechanic.garage_fk} onChange = {(event) => this.onChange(event)}></input>
                        </div>
                        <div class="form-check col-2" style={{paddingTop:"40px", paddingLeft:"50px"}}>
                                <label class="form-check-label">Admin</label>
                                <input class="form-check-input" type="checkbox" name="estadmin" checked={this.state.mechanic.estadmin} value={this.state.mechanic.estadmin} onChange = {(event) => this.onChange(event)}></input>
                            </div>
                    </div>        

                        <button type="submit" className="btn btn-primary col-md-12 submit" onClick={(event) => this.handlesubmit(event)}>{this.state.isEditMode  ? "Modifier": "Ajouter"}</button>

                   </form>
            </div>
        )
    }
}

export default withRouter(MechanicDetails);