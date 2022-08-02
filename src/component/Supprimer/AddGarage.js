import React from "react";
import {TextField} from "@material-ui/core";
import {postGarage} from "../API/index";


class AddGarage extends React.Component{
    constructor(props) {
        super(props);
        this.renderTableHeader = this.props.renderTableHeader;
        this.state = {
            name: "",
            address: "",
            phoneNumber: "",
            image: "",
            element : props.element}
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.props !== prevProps){
            this.setState({element:this.props.element});
        }
    }

    nameChange(evt){
        this.setState({name:evt.target.value});
    }
    addressChange(evt){
        this.setState({address:evt.target.value});
    }
    phoneNumberChange(evt){
        this.setState({phoneNumber:evt.target.value});
    }
    imageChange(evt){
        this.setState({image:evt.target.value});
    }
    submit(name,address,phoneNumber,image){
        const data = postGarage({name:name,address:address,phoneNumber: phoneNumber,image:image});
    }
    render() {
        console.log(this.state.element);
        return(
            <div className="AddGarage">
                <h1 key={"title"}>Ajouter un garage</h1>
                {
                    this.renderTableHeader(this.state.element).map((column,index)=>{
                        let functionName;
                        console.log(column);
                        switch(column){
                            case "nom" :  functionName = this.nameChange;
                            break;
                            case"numtel" : functionName = this.phoneNumberChange;
                            break;
                            case "adresse" : functionName = this.addressChange;
                            break;
                        }
                        if(column !== "image"){
                            return(
                                <input
                                    key={index}
                                    type={"text"}
                                    name={this.state.element[`${column}`] ?? ""}
                                    placeholder={this.state.element[`${column}`]}
                                    onChange={(event)=>functionName(event)}
                                    required
                               />
                                )}else {
                            return (
                                <input
                                    key={index}
                                    type={"text"}
                                    name={this.state.element[`${column}`]}
                                    placeholder={this.state.element[`${column}`]}
                                    onChange={event => this.imageChange(event)}
                                    required
                                />);
                        }
                    })
                }
                <button type={"submit"} onClick={()=>this.submit(this.state.name,this.state.address,this.state.phoneNumber,this.state.image)}>Add</button>
            </div>
        )
    }

}

export default AddGarage;