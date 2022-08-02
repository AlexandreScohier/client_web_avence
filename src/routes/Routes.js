import React, {Fragment} from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from "react-router-dom";

import SideBar from "../component/Nav/SideBar"
import Connection from "../component/Login/Connection"
import GarageList from "../component/Garage/GarageList"
import GarageDetails from "../component/Garage/GarageDetails"
import {connect} from "react-redux";



class Routes extends React.Component{
    constructor(props){
        super(props);
        this.state = {isConnected :undefined}
    }

    componentDidUpdate() {
        if(this.state.user === undefined){
            this.setState({user:this.props.userStore});
        }
        
    }

    
    render() {
        
        const HomeComponent = () => this.state.isConnected ? <SideBar/> : <Redirect to={"/Login"}/>
        const LoginComponent = () => this.state.isConnected ? <Redirect to={"/"}/> : <Connection/>

        return (
            <div >
                <Router>
                    <Switch>
                        <Route exact path="/Login" component={LoginComponent}/>
                        <Route exact path="/" component={HomeComponent}/>
                        <Route exact path="/Logout" onEnter={() => this.props.login(undefined)}/>
                        <Route exact path="/Garage" render={() =>
                            this.state.user === undefined ? <Redirect to="/login"/>:
                            <Fragment>
                            <SideBar />
                            <GarageList />
                            </Fragment>
                        } />
                        <Route exact path="/Garage/details" render={() =>
                            this.state.user === undefined ? <Redirect to="/login"/>:
                            <Fragment>
                            <SideBar />
                            <GarageDetails />
                            </Fragment>
                        } />
                        {/* <Route path="/login" component={Login}/> */}

                        {/* <Route path="/menu" render={()=>{
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

                        }}/> */}



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