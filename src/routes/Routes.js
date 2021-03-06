import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import {connect} from "react-redux";
import Login from "../component/Connection";
import Menu from "../component/Menu";
import Tableau from "../component/Garage/GarageTable"
import MechanicTableSelected from "../component/Garage/MechanicTableSelected"
import {getAllGarage,deleteGarage,updateGarage,postGarage,getAllMecanicien,updateMecanicien,deleteMecanicien,postMecano,upDateDispo,deleteDispo,getAllDispo,postDispo} from "../component/API";
class Routes extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            user : undefined
        }
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.state.user === undefined){
            this.setState({user:this.props.userStore});
        }
    }


    render() {
        return (
            <div>
                <Router>
                    <Switch>
                        <Route path="/login" component={Login}/>

                        <Route path="/menu" render={()=>{
                            return this.state.user === undefined ? <Redirect to="/login"/>:
                                (this.state.user.userType === "mecano")? <Menu/> : <Redirect to={"/"}/>
                        }}/>

                        <Route path="/garages" render={()=>{
                        return this.state.user === undefined? <Redirect to={"/login"}/> : (this.state.user.userType === "mecano")?<Tableau getAllElements = {getAllGarage} deleteElement = {deleteGarage} updateGarage = {updateGarage} postGarage = {postGarage}/> : <Redirect to={'/login'}/>
                        }}/>

                        <Route path="/mecano" render={()=>{
                            return this.state.user === undefined? <Redirect to={"/login"}/> : (this.state.user.userType === "mecano")?<Tableau getAllElements = {getAllMecanicien} deleteElement = {deleteMecanicien} updateGarage = {updateMecanicien} postGarage = {postMecano}/> : <Redirect to={'/login'}/>
                        }}/>
                        <Route path="/dispos" render={()=>{
                            return this.state.user === undefined? <Redirect to={"/login"}/> : (this.state.user.userType === "mecano")?<Tableau getAllElements = {getAllDispo} deleteElement = {deleteDispo} updateGarage = {upDateDispo} postGarage = {postDispo}/> : <Redirect to={'/login'}/>

                        }}/>



                    </Switch>
                </Router>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        userStore: state.login.userStore,
    }
};
export default connect(mapStateToProps)(Routes);