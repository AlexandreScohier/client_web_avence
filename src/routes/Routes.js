import React, {Fragment} from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from "react-router-dom";

import SideBar from "../component/shared/Nav/SideBar"
import Connection from "../component/Login/Connection"
import ElementList from "../component/shared/ElementList"
import GarageDetails from "../component/Garage/GarageDetails"
import MechanicDetails from "../component/Mechanic/MechanicDetails"
import RepairDetails from "../component/Repair/RepairDetails"
import AvailabilityDetails from "../component/Availability/AvailablilityDetails"
import {connect} from "react-redux";
import Models from "../Models/Models";



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
                            <ElementList model={Models.garage} />
                            </Fragment>
                            :
                             <Redirect to="/login"/>
                        } />
                        <Route exact path="/Garage/Edit/:id" render={() =>
                            this.isConnected() ? 
                            <Fragment>
                            <SideBar />
                            <GarageDetails isEditMode={true} model={Models.garage}/>
                            </Fragment>
                            :
                             <Redirect to="/login"/>
                        } />
                        <Route exact path="/Garage/Add" render={() =>
                            this.isConnected() ? 
                            <Fragment>
                            <SideBar />
                            <GarageDetails isEditMode={false} model={Models.garage}/>
                            </Fragment>
                            :
                             <Redirect to="/login"/>
                        } />

                        <Route exact path="/Mechanic" render={() => 
                            this.isConnected() ?
                            <Fragment>
                            <SideBar />
                            <ElementList model={Models.mechanic} />
                            </Fragment>
                            :
                             <Redirect to="/login"/>
                        } />
                        <Route exact path="/Mechanic/Edit/:id" render={() =>
                            this.isConnected() ? 
                            <Fragment>
                            <SideBar />
                            <MechanicDetails isEditMode={true} model={Models.mechanic}/>
                            </Fragment>
                            :
                             <Redirect to="/login"/>
                        } />
                        <Route exact path="/Mechanic/Add" render={() =>
                            this.isConnected() ? 
                            <Fragment>
                            <SideBar />
                            <MechanicDetails isEditMode={false} model={Models.mechanic}/>
                            </Fragment>
                            :
                             <Redirect to="/login"/>
                        } />

                        <Route exact path="/Availability" render={() => 
                            this.isConnected() ?
                            <Fragment>
                            <SideBar />
                            <ElementList model={Models.availability} />
                            </Fragment>
                            :
                             <Redirect to="/login"/>
                        } />
                        <Route exact path="/Availability/Edit/:id" render={() =>
                            this.isConnected() ? 
                            <Fragment>
                            <SideBar />
                            <AvailabilityDetails isEditMode={true} model={Models.availability}/>
                            </Fragment>
                            :
                             <Redirect to="/login"/>
                        } />
                        <Route exact path="/Availability/Add" render={() =>
                            this.isConnected() ? 
                            <Fragment>
                            <SideBar />
                            <AvailabilityDetails isEditMode={false} model={Models.availability}/>
                            </Fragment>
                            :
                             <Redirect to="/login"/>
                        } />

                        <Route exact path="/Repair" render={() => 
                            this.isConnected() ?
                            <Fragment>
                            <SideBar />
                            <ElementList model={Models.repair} />
                            </Fragment>
                            :
                             <Redirect to="/login"/>
                        } />
                        <Route exact path="/Repair/Edit/:id" render={() =>
                            this.isConnected() ? 
                            <Fragment>
                            <SideBar />
                            <RepairDetails isEditMode={true} model={Models.repair}/>
                            </Fragment>
                            :
                             <Redirect to="/login"/>
                        } />
                        <Route exact path="/Repair/Add" render={() =>
                            this.isConnected() ? 
                            <Fragment>
                            <SideBar />
                            <RepairDetails isEditMode={false} model={Models.repair}/>
                            </Fragment>
                            :
                             <Redirect to="/login"/>
                        } />

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