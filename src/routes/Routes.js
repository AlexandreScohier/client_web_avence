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
    constructor(props) {
        super(props);

        this.state = {
            userStore : undefined,
        
    };
}
    isConnected(){
        return localStorage.getItem("Token");
    }
    

    render() {
        
        const HomeComponent = () => this.isConnected()? <SideBar/> : <Redirect to={"/Login"}/>
        const LoginComponent = () => this.isConnected() ? <Redirect to={"/"}/> : <Connection/>
       
        return (
            <div >
                <Router>
                    <Switch>
                        <Route exact path="/Login" component={LoginComponent}/>
                        <Route exact path="/" component={HomeComponent}/>
                        <Route exact path="/Garage" render={() => 
                            this.isConnected() ?
                            <Fragment>
                            <SideBar />
                            <GarageList />
                            </Fragment>
                            :
                             <Redirect to="/login"/>
                        } />
                        <Route exact path="/Garage/Edit/:id" render={() =>
                            this.isConnected() ? 
                            <Fragment>
                            <SideBar />
                            <GarageDetails isEditMode={true} />
                            </Fragment>
                            :
                             <Redirect to="/login"/>
                        } />
                        <Route exact path="/Garage/Add" render={() =>
                            this.isConnected() ? 
                            <Fragment>
                            <SideBar />
                            <GarageDetails isEditMode={false} />
                            </Fragment>
                            :
                             <Redirect to="/login"/>
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