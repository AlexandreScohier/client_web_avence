import React from "react";
import SelectMechanics from "./SelectMechanics";
import GarageTable from "./GarageTable";

class MechanicTableSelected extends React.Component{
    constructor(props) {
        super(props);
        this.state = {mechanic: null}
    }

    handleSelection = (event, mechanic) =>{
        event.preventDefault();
        this.state.setState({mechanic: mechanic})
    }

    render() {
        return(
            <div>
                <SelectMechanics handleSelection = {this.handleSelection}/>
                <GarageTable/>
            </div>
        )
    }
}
export default MechanicTableSelected;