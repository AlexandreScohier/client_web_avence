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
            user : this.props.user
        }
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
    }

    render() {
        return(
            <div className="menu">
                <Button
                    variant={"contained"}
                    component={Link} to={"/garages"}>
                    Modifier les garages
                </Button>
                <Button
                    variant={"contained"}
                    component={Link} to={"/garages"}>
                    Modifier les mécaniciens
                </Button>
                <Button
                    variant={"contained"}
                    onClick={()=>{
                        console.log("Essaie")
                        return <Redirect to={"/garages"}/>}}>
                    Modifier les horaires
                </Button>
                <Button
                    variant={"contained"}
                    onClick={()=>{
                        console.log("Essaie")
                        return <Redirect to={"/garages"}/>}}>
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