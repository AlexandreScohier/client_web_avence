import React from "react";
import "./connectionStyle.css";
import {login} from "../API";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";

class Connection extends React.Component{

    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password:'',
            errorMassage: false,
            isConnected: undefined};
        
    }
    

    async handleSubmit(event){
        event.preventDefault();
        try{
            const data = await login(this.state.email,this.state.password);
            if(data.user.userRecup.userType !== "mecano") {
                throw new Error("Un client ne peut pas se connecter à l'application!");
            }
            localStorage.setItem("Token",data.token)
            this.setState({isConnected:true});
            
        }catch (error) {
            this.setState({
                error : true,
                loading:false,
                loaded:true,
                errorMessage:error
            });
        }
    }

    

    userChange(evt){
        this.setState({email:evt.target.value});
    }
    passwordChange(evt){
        this.setState({password:evt.target.value});
    }


    render() {
            if(this.state.isConnected){
                return <Redirect to={"/"}/>
            }
            return (
                <div className="form">
                    <h1>Se connecter </h1>
                    <form className="row g-3">
                    <input
                     className="form-control"
                     type="text"
                     id="emailAdresse"
                     placeholder="Adresse mail"
                     value = {this.state.email}
                     onChange ={(event)=>this.userChange(event)}
                     autoFocus
                     required
                     ></input>

                    <input
                    className="form-control"
                    type="text"
                    id="password"
                    placeholder="Password"
                    value = {this.state.password}
                    onChange ={(event)=>this.passwordChange(event)}
                    required
                    ></input>
                    <button 
                    type="submit" 
                    className="btn btn-primary"
                    onClick ={(event)=>{
                        this.handleSubmit(event);
                    }}
                    >Connexion</button>
                    </form>
                </div>
            )


    }
}
const mapDispatchToProps = (dispatch)=>{
    return {
        login : (user)=>{
            dispatch({type:"login", payload:{userInfo:user}})
        }
    }
}
export default connect(undefined,mapDispatchToProps)(Connection);