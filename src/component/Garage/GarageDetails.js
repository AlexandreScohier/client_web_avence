import React from "react";
import "../../style/GarageDetails.css";
import { getByIdAsync, postAsync, updateAsync } from "../API/API";
import { withRouter} from 'react-router-dom';



class GarageDetails extends React.Component{
     
    constructor(props) {
        super(props);
        this.state = {
            garage: {},
            model: this.props.model,
            isEditMode: this.props.isEditMode,
            
        }
    }
    async componentDidMount() {
        if(this.state.isEditMode){
            const id  = this.props.match.params.id;
            await getByIdAsync(this.state.model.apiRoute, id).then(response=>this.setState({garage:response})).catch(error=>console.error(error));
        }
    }

    async handlesubmit(event){
        console.log(this.state.garage);
        event.preventDefault();
        if(this.state.isEditMode){
            await updateAsync(this.state.model.apiRoute, this.state.garage).then(() => 
            this.props.history.push("/"+this.state.model.route)
            );
        }else{
            await postAsync(this.state.model.apiRoute, this.state.garage).then(() => 
            this.props.history.push("/"+this.state.model.route)
            );
        }
    }

    changeImage(event){
        event.preventDefault();
        this.setState({...this.state.garage, image: this.state.imageLink});
    }


    onChange(event){
        let elemToSave = this.state.garage;
        elemToSave[event.target.name]  = event.target.value;
        this.setState({[event.target.name] : event.target.value})
    }

    render() {
        return (
            <div className="GarageDetails">
                   <form>
                    <h1>{this.state.isEditMode ? "Modification" : "Ajout"} d'{this.state.model.determinative} {this.state.model.label}</h1>

                    <div className="row g-5">
                            <div className="col-md-4 ">
                                {this.state.garage.image ? <img alt="Lien est incorrect" className= "rounded" src={this.state.garage.image} ></img> : <div className="noImage"></div> }
                                <input className="col-md-12 form-control" name={"image"} value={this.state.garage.image} onChange = {(event) => this.onChange(event)} placeholder="Ajouter le lien d'une image"></input>
                            </div>
                            

                            <div className="col-md-8">
                                <div className="row g-5">
                                    <div className="col-md-12">
                                        <label  className="form-label">Nom: </label>
                                        <input type="text" className="form-control" name={"nom"} aria-describedby="emailHelp" value={this.state.garage.nom}onChange = {(event) => this.onChange(event)}></input>
                                        {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
                                    </div>

                                    <div className="col-md-12">
                                        <label  className="form-label">Address: </label>
                                        <input type="text" className="form-control" name={"adresse"} value={this.state.garage.adresse} onChange = {(event) => this.onChange(event)}></input>
                                    </div>

                                    <div className="col-md-12">
                                        <label  className="form-label">Numéro de téléphone: </label>
                                        <input type="text" className="form-control" name={"numtel"} value={this.state.garage.numtel} onChange = {(event) => this.onChange(event)}></input>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                        
                        <button type="submit" className="btn btn-primary col-md-12 submit" onClick={(event) => this.handlesubmit(event)}>{this.state.isEditMode  ? "Modifier": "Ajouter"}</button>

                   </form>
            </div>
        )
    }
}

export default withRouter(GarageDetails);