import React, {useState} from "react";
import "../style/connectionStyle.css";
import {login} from "./API";
import {
    Button,
    TextField,
    Grid,
    Paper,
    Typography
} from "@material-ui/core";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";



class Connection extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password:'',
            loaded:false,
            loading:false,
        errorMassage:false,
        connected:false};

    }
    dissmisError(){
        this.setState({error:""});
    }
    async handleSubmit(){
        this.setState({error:false,
        errorMessage:"",
        loading:true,
        loaded:false});
        try{
            const data = await login(this.state.email,this.state.password);
            if(data.user.userRecup.userType !== "mecano") {
                throw new Error("Un client ne peut pas se connecter à l'application!");
            }
            this.props.login(data.user.userRecup);
            this.setState({
                connected:true});
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
            if(this.state.connected){
                return <Redirect to={"/"}/>
            }
            let contentMessage;
            if(!this.state.loaded)
                contentMessage = null;
            else if(this.state.loading){
                contentMessage = <Grid item><Typography component={"h6"} color={"error"}>Chargement en cours</Typography> </Grid>;
            }else if(this.state.error){
                contentMessage = <Grid item><Typography component={"h6"} color={"error"}>{this.state.errorMassage}</Typography> </Grid>
            }
            return (
                <div className="gridConnection">
                <Grid container  justify={"center"} direction={"row"}>
                    <Grid item>
                        <Grid container direction={"column"} justify={"center"} className={"login-form"}>
                            <Grid item>
                                <Typography component={"h1"}>Se connecter</Typography>
                            </Grid>
                            <Grid item>
                                <Grid container direction={"column"} spacing={3}>
                                    <Grid item>
                                        <TextField
                                        type={"text"}
                                        label={"Adresse mail"}
                                        value={this.state.email}
                                        onChange={(event)=>this.userChange(event)} required={true} autoFocus
                                        />
                                    </Grid>
                                    <Grid item>
                                        <TextField
                                        type={"password"}
                                        label={"Mot de passe"}
                                        value={this.state.password}
                                        onChange={(event)=>this.passwordChange(event)}
                                        onKeyPress={(event)=>{
                                            if(event.code === "Enter" || event.code === "NumpadEnter") {
                                                this.dissmisError();
                                                this.handleSubmit().then();
                                            }
                                        }}
                                        required
                                        />
                                    </Grid>
                                    <Grid item>
                                        <Button
                                            variant={"contained"}
                                            type={"submit"}
                                            className={"button-block"}
                                            onClick={()=>{
                                                this.dissmisError();
                                                this.handleSubmit();
                                            }}>
                                            Connexion
                                        </Button>
                                    </Grid>
                                    {contentMessage && contentMessage}
                                </Grid>
                            </Grid>

                        </Grid>
                    </Grid>
                </Grid>
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