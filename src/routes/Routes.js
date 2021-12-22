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
class Routes extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            user : undefined
        }
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.state.user === undefined){
            console.log("cc");
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
                        }

                        }/>
                        <Route path={"/"} render={()=>{
                           return this.state.user === undefined ? <Redirect to={"/login"}/> : (this.state.user.userType === "mecano") ? <Menu/> :  <Redirect to={"/login"}/>
                        }
                        }
                        />
                    </Switch>
                </Router>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    console.log(state.login.userStore);
    return {
        userStore: state.login.userStore,
    }
};
export default connect(mapStateToProps)(Routes);