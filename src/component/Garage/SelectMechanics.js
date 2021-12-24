import React, {Component} from "react";
import Select from 'react-select'
import "../../style/SelectMechanicsStyle.css"

class SelectMechanics extends React.Component {
    constructor() {
        super();
        this.state = {value : ""};
    }
    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
    }


    render() {
        return(
            <form onSubmit={this.handleSubmit} className="SelectMechanics">
                <label>
                    Choisissez un mécanicien :
                    <select value={this.state.value} onChange={this.handleChange}>
                        <option value="X">X</option>
                    </select>
                </label>
                <input type="submit" value="Envoyer" />
            </form>
        )
    }
}

export default SelectMechanics;