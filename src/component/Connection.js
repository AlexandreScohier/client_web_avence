import React, {useState} from "react";
import "../style/connectionStyle.css"

class Connection extends React.Component{

    constructor(props) {
        super(props);
        this.state = {email: '',password:''};

    }


    render() {
        return(
            <div className="formConnection">
                <h1>Avant tout veuillez vous connecter</h1>
                <form>
                    <label>email</label>
                    <input type="text" name="id" />

                    <label>password</label>
                    <input type="text" name="password"/>

                    <input type="submit" value="se connecter" />
                </form>
            </div>

        );
    }
}
export default Connection;