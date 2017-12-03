import React, { Component } from 'react';
import { Text } from 'react-native';

export default class Blink extends Component {
    constructor(props) {
        super(props);
        this.state = { showText: true };

        // Toggle the state every second
        setInterval(() => {
            this.setState( previousState => ({showText: !previousState.showText}) );
        }, 1000);
    }

    render() {
        let display = this.state.showText ? this.props.text : ' ';
        return (
            <Text style={this.props.style}>{display}</Text>
        );
    }
}