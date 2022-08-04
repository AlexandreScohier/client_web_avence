import React from "react";
import "../../style/GarageDetails.css";
import { getGarageById } from "../API/API";
import { withRouter  } from 'react-router-dom';



class GarageDetails extends React.Component{
     
    constructor(props) {
        super(props);
        this.state = {
            garage: {
                image: undefined,
                nom: undefined,
                adresse: undefined,
                numtel: undefined,
            },
            isEditMode: this.props.isEditMode,
            
        }
    }

    async componentDidMount() {
        if(this.state.isEditMode){
            const id  = this.props.match.params.id;
            await getGarageById(id).then(response=>this.setState({garage:response})).catch(error=>console.error(error));
        }
    }

    changeImage(event){
        event.preventDefault();
        this.setState({...this.state.garage, image: this.state.imageLink});
    }

    imageLinkChange(evt){
        this.setState({imageLink:evt.target.value});
    }

    handlesubmit(event){
        event.preventDefault();
        if(this.state.isEditMode){

        }else{
        
        }
    }

    ImageInputChange(evt){
        let elemToSave = this.state.garage;
        elemToSave.image = evt.target.value;
        this.setState({garage:elemToSave});
    }
    nameInputChange(evt){
        let elemToSave = this.state.garage;
        elemToSave.nom = evt.target.value;
        this.setState({garage:elemToSave});
    }
    adresseInputChange(evt){
        let elemToSave = this.state.garage;
        elemToSave.adresse = evt.target.value;
        this.setState({garage:elemToSave});
    }
    phoneNumberInputChange(evt){
        let elemToSave = this.state.garage;
        elemToSave.numtel = evt.target.value;
        this.setState({garage:elemToSave});
    }

    render() {
        return (
            <div className="GarageDetails">
                   <form className="">
                        <h1>{this.state.isEditMode ? "Modification" : "Ajout"} d'un garage</h1>

                        <div className="row g-5">
                            <div className="col-md-4 ">
                                {this.state.garage.image ? <img alt="Lien de l'image incorrect" className= "rounded" src={this.state.garage.image} ></img> : <div className="noImage"></div> }
                                <input className="col-md-12 form-control" value={this.state.garage.image} onChange ={(event)=>this.ImageInputChange(event)} placeholder="Ajouter le lien d'une image"></input>
                            </div>
                            

                            <div className="col-md-8">
                                <div className="row g-5">
                                    <div className="col-md-12">
                                        <label  className="form-label">Nom: </label>
                                        <input type="text" className="form-control" aria-describedby="emailHelp" value={this.state.garage.nom} onChange ={(event)=>this.nameInputChange(event)}></input>
                                        {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
                                    </div>

                                    <div className="col-md-12">
                                        <label  className="form-label">Numéro de téléphone: </label>
                                        <input type="text" className="form-control"  value={this.state.garage.adresse} onChange ={(event)=>this.adresseInputChange(event)}></input>
                                    </div>

                                    <div className="col-md-12">
                                        <label  className="form-label">Address: </label>
                                        <input type="text" className="form-control" value={this.state.garage.numtel} onChange ={(event)=>this.phoneNumberInputChange(event)}></input>
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