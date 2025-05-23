import { Component } from "react";

export default class UserInfo extends Component {
    constructor() {
        super();
        this.state = {
            name: "Damian",
            profession: "Student",
            luckyNumber: Math.floor(Math.random() * 100) + 1,
        };
    }

    generateNewLuckyNumber = () => {
        this.setState({ luckyNumber: Math.floor(Math.random() * 100) + 1 });
    }

    render() {
        return (
            <div>
                <h2>Name: {this.state.name}</h2>
                <h3>Profession: {this.state.profession}</h3>
                <p>Your lucky number is: { this.state.luckyNumber }</p>
                <button onClick={this.generateNewLuckyNumber}>Generate New Lucky Number</button>
                <button onClick={this.props.handleClick}>Show Alert</button>
            </div>
        );
    }
}