import React from "react";
import {getAllGarage} from "./API";

class TableauGarage extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            value :""
        }

    }

    componentDidMount() {
        try{
            console.error("cc");
            const reponse = getAllGarage();
            console.log(reponse)
            this.setState({value : reponse
                });
        }catch(error){
            console.error(error);
        }
    }

    render() {
        return (
            <div>
                <p>ppp</p>
            </div>

        )
    }
}
export default TableauGarage;