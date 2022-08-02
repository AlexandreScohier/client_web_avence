import React, {Component} from "react";
import "../../style/SelectMechanicsStyle.css"

class SelectMechanics extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value : null};
        this.handleSelection = this.props.handleSelection
    }
    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        this.handleSelection(event, this.state.value);
    }


    render() {
        return(
            <form onSubmit={this.handleSubmit} className="SelectMechanics">
                <label>
                    Choisissez un mécanicien :
                    <select value={this.state.value} onChange={this.handleChange}>
                        <option value="X">X</option>
                        <option value="X">X</option>
                    </select>
                </label>
                <input type="submit" value="Envoyer" />
            </form>
        )
    }
}

export default SelectMechanics;