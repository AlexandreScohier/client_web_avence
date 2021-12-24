import React, {Component} from "react";
import Select from 'react-select'
import "../../style/SelectMechanicsStyle.css"

class SelectMechanics extends React.Component {
    constructor() {
        super();
        this.state = {
            options: [
                {value: 1, label: "meca 1"},
                {value: 2, label: 'meca 2'},
                {value: 3, label: 'meca 3'}
            ],
            customStyles : {
                control: (base, state) => ({
                    ...base,
                    background: "#1A1A25",
                    borderRadius: state.isFocused ? "3px 3px 0 0" : "2px 3px 0 0",
                    borderColor:"white",
                    boxShadow: state.isFocused ? null : null,
                    "&:hover": {
                        borderColor: "white",
                    }
                }),
                option: (base, state) => ({
                    ...base,
                    background: "#1A1A25",
                    color: "white",
                    "&:hover": {
                        background: state.isFocused ? "#1F68FE" : "#1A1A25"
                    }
                }),
                menu: base => ({
                    ...base,
                    borderRadius: 0,
                    marginTop: 0
                }),
                menuList: base => ({
                    ...base,
                    padding: 0
                })
            }
        }
    }


    render() {
        return(
            <div className="SelectMechanics">
                <h1>Séléctionner un méchaniciens</h1>
                <Select styles={this.state.customStyles} options={this.state.options}/>
            </div>
        )
    }
}

export default SelectMechanics;