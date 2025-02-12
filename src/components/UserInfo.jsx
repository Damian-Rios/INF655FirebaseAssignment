import { Component } from "react";

export default class UserInfo extends Component {
    constructor() {
        super();
        this.state = {
            name: "Damian",
            profession: "Student",
        };
    }

    render() {
        return (
            <div>
                <h2>Name: {this.state.name}</h2>
                <h3>Profession: {this.state.profession}</h3>
                <p>Your lucky number is {Math.floor(Math.random() * 100) + 1}.</p>
            </div>
        );
    }
}