import React from "react";
import "../../style/GarageDetails.css";


class GarageDetails extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            isEditMode: true,
            image:"https://upload.wikimedia.org/wikipedia/commons/8/85/Ciney_JPG02.jpg"
        }
    }

    render() {
        return (
            <div className="GarageDetails">
                   <form className="">
                        <h1>{this.state.isEditMode ? "Modification" : "Ajout"} d'un garage</h1>

                        <div className="row g-4">
                            <div className="col-md-4 ">
                                <img alt="Illustration du garage" className={this.state.isEditMode  ? "rounded":"placeholder rounded"} src={this.state.image}></img>
                                <input className="col-md-8"></input>
                                <button type="submit" className="btn btn-primary col-md-4">Changer l'image</button>
                            </div>
                            

                            <div className="col-md-8">
                                <div className="row g-4">
                                    <div className="col-md-12">
                                        <label for="exampleInputEmail1" className="form-label">Nom: </label>
                                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
                                        {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
                                    </div>

                                    <div className="col-md-12">
                                        <label for="exampleInputEmail1" className="form-label">Numéro de téléphone: </label>
                                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
                                    </div>

                                    <div className="col-md-12">
                                        <label for="exampleInputEmail1" className="form-label">Address: </label>
                                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                        
                        <button type="submit" className="btn btn-primary col-md-12 submit">{this.state.isEditMode  ? "Modifier": "Ajouter"}</button>

                   </form>
            </div>
        )
    }
}

export default GarageDetails;