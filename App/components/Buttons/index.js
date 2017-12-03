import React, { Component } from 'react';
import { 
    Alert, 
    AppRegistry, 
    Platform, 
    StyleSheet, 
    Text, 
    TouchableHighlight, 
    TouchableOpacity, 
    TouchableNativeFeedback, 
    TouchableWithoutFeedback,
    Button,
    View
} from 'react-native';

import styles from './styles';
import renderIf from '../../src/renderIf';

export default class Buttons extends Component {
    _onPressButton() {
        Alert.alert('You tapped the button!')
    }

    _onLongPressButton() {
        Alert.alert('You long-pressed the button!')
    }

    render() {
        return (
            <View style={styles.container}>
                <TouchableHighlight onPress={this._onPressButton} underlayColor="white">
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>TouchableHighlight</Text>
                    </View>
                </TouchableHighlight>
                <TouchableOpacity onPress={this._onPressButton}>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>TouchableOpacity</Text>
                    </View>
                </TouchableOpacity>

                {
                    renderIf(
                        Platform.OS === 'android',
                        <TouchableNativeFeedback
                            onPress={this._onPressButton}
                            background={Platform.OS === 'android' ? TouchableNativeFeedback.SelectableBackground() : ''}>
                            <View style={styles.button}>
                                <Text style={styles.buttonText}>TouchableNativeFeedback</Text>
                            </View>
                        </TouchableNativeFeedback>
                    )
                }

                <TouchableWithoutFeedback
                    onPress={this._onPressButton}
                >
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>TouchableWithoutFeedback</Text>
                    </View>
                </TouchableWithoutFeedback>
                <TouchableHighlight onPress={this._onPressButton} onLongPress={this._onLongPressButton} underlayColor="white">
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>Touchable with Long Press</Text>
                    </View>
                </TouchableHighlight>
            </View>
        );
    }
}