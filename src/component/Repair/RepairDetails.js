import React from "react";
import "../../style/GarageDetails.css";
import { getByIdAsync, postAsync, updateAsync } from "../API/API";
import { withRouter} from 'react-router-dom';



class RepairDetails extends React.Component{
     
    constructor(props) {
        super(props);
        this.state = {
            repair: {},
            model: this.props.model,
            isEditMode: this.props.isEditMode,
            
        }
    }
    async componentDidMount() {
        if(this.state.isEditMode){
            const id  = this.props.match.params.id;
            await getByIdAsync(this.state.model.apiRoute, id).then(response=>this.setState({repair:response})).catch(error=>console.error(error));
        }
    }

    async handlesubmit(event){
        event.preventDefault();
        console.log(this.state.repair);
        if(this.state.isEditMode){
            await updateAsync(this.state.model.apiRoute, this.state.repair).then(() => 
            this.props.history.push("/"+this.state.model.route)
            );
        }else{
            await postAsync(this.state.model.apiRoute, this.state.repair.nom,  this.state.repair.nom,  this.state.repair.adresse,  this.state.repair.numtel).then(() => 
            this.props.history.push("/"+this.state.model.route)
            );
        }
    }

    changeImage(event){
        event.preventDefault();
        this.setState({...this.state.repair, lienimage: this.state.imageLink});
    }


    onChange(event){
        let elemToSave = this.state.repair;
        elemToSave[event.target.name]  = event.target.value;
        this.setState({[event.target.name] : event.target.value})
    }

    render() {
        return (
            <div className="GarageDetails">
                   <form>
                    <h1>{this.state.isEditMode ? "Modification" : "Ajout"} d'{this.state.model.determinative} {this.state.model.label}</h1>

                    <div className="row">
                            <div className="col-md-4 ">
                                {this.state.repair.image ? <img alt="Lien est incorrect" className= "rounded" src={this.state.repair.lienimage} ></img> : <div className="noImage"></div> }
                                <input className="col-md-12 form-control" name={"lienimage"} value={this.state.repair.lienimage} onChange = {(event) => this.onChange(event)} placeholder="Ajouter le lien d'une image"></input>
                            </div>
                            

                            <div className="col-md-8">
                                <div className="row mb-3">
                                    <div className="col-md-6">
                                        <label  className="form-label">Libellé: </label>
                                        <input type="text" className="form-control" name={"libelle"} aria-describedby="emailHelp" value={this.state.repair.libelle}onChange = {(event) => this.onChange(event)}></input>
                                        {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
                                    </div>

                                    <div className="col-md-6" >
                                        <label  className="form-label">Durée en minutes: </label>
                                        <div style={{display: "flex"}}>
                                            <p style={{margin:"10px", width:"25px"}}>{this.state.repair.dureemoyenne ? this.state.repair.dureemoyenne : 0} </p>
                                            <input type="range" class="custom-range" min="0" max="480" step="30" name={"dureemoyenne"} value={this.state.repair.dureemoyenne} onChange = {(event) => this.onChange(event)}></input>
                                        </div>
                                        {/* <input type="text" className="form-control" name={"dureemoyenne"} value={this.state.repair.numdureemoyennetel} onChange = {(event) => this.onChange(event)}></input> */}
                                    </div>
                                </div>    
                                <div className="row">
                                    <div className="col-md-12">
                                        <label  className="form-label">Description: </label>
                                        <textarea  type="text" className="form-control" rows={8} name={"description"} value={this.state.repair.description} onChange = {(event) => this.onChange(event)}></textarea >
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

export default withRouter(RepairDetails);