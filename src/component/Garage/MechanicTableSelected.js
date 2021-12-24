import React from "react";
import SelectMechanics from "./SelectMechanics";
import GarageTable from "./GarageTable";

class MechanicTableSelected extends React.Component{

    render() {
        return(
            <div>
                <SelectMechanics/>
                <GarageTable/>
            </div>
        )
    }
}
export default MechanicTableSelected;