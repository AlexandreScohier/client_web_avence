import React, {useState} from "react";
import "../style/menuStyle.css";
import "../style/mainStyle.css";
import {
    Button,
    TextField,
    Grid,
    Paper,
    Typography
} from "@material-ui/core";
import {Link, Redirect} from "react-router-dom";
import {connect} from "react-redux";

class Menu extends React.Component{
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        console.log("cc");
        return(
            <div className="menu">
                <Button
                    variant={"contained"}
                    label={"Modifier les garages"}
                    onClick={()=>{
                        return <Redirect to={"/garage"}/>}}>
                    Modifier les garages
                </Button>
                <Button
                    variant={"contained"}
                    label={"Modifier les garages"}
                    onClick={()=>{
                        console.log("Essaie")
                        return <Redirect to={"/garage"}/>}}>
                    Modifier les mécaniciens
                </Button>
                <Button
                    variant={"contained"}
                    label={"Modifier les garages"}
                    onClick={()=>{
                        console.log("Essaie")
                        return <Redirect to={"/garage"}/>}}>
                    Modifier les horaires
                </Button>
                <Button
                    variant={"contained"}
                    label={"Modifier les garages"}
                    onClick={()=>{
                        console.log("Essaie")
                        return <Redirect to={"/garage"}/>}}>
                    Modifier les reparations
                </Button>
            </div>
        )
    }
}
const mapStateToProps = (state)=>{
    console.log("Matthys");
    return {
        user : state.userStore
    }
}
const dispatchToProps = (dispatch)=>{
    return {
        login : (user)=>{
            dispatch({type:"login", payload:{userInfo:user}})
        }
    }
}

export default connect(mapStateToProps,dispatchToProps)(Menu);