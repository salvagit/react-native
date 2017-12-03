import React, { Component } from 'react';
import { Text, TextInput, View } from 'react-native';

export default class Input extends Component {

    constructor(props) {
        super(props);
        this.state = { text: '' };
    }

    render() {
        return (
            <View style={{ padding: 10 }}>
                <TextInput
                    style={ this.props.style }
                    placeholder={ this.props.placeholder }
                    onChangeText={ (text) => this.setState({ text }) }
                />
                <Text style={{ padding: 10, fontSize: 42 }}>
                    {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
                </Text>
            </View>
        );
    }
}
