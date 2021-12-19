import React, {useState} from "react";

class Connection extends React.Component{

    constructor(props) {
        super(props);
        this.state = {id: '',password:''};

    }


    render() {
        return(
            <div>
                <h1>To connected</h1>
                <form>
                    <label>id
                    <input type="text" name="id" />
                    </label>
                    <label>password
                    <input type="text" name="password"/>
                    </label>
                    <input type="submit" value="Envoyer" />
                </form>
            </div>

        );
    }
}
export default Connection;