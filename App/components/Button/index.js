import React, { Component } from 'react';
import { 
    Alert,
    Platform,
    Text, 
    TouchableHighlight, 
    TouchableOpacity, 
    TouchableNativeFeedback, 
    TouchableWithoutFeedback,
    Button as ButtonEl,
    View
} from 'react-native';

import styles from './styles';
import renderIf from '../../src/renderIf';

export default class Button extends Component {

    _onPressButton() {
        Alert.alert('You tapped the button!')
    }

    _onLongPressButton() {
        Alert.alert('You long-pressed the button!')
    }

    render() {
        switch(this.props.type) {

            case 'TouchableHighlight':
                return(
                    <TouchableHighlight 
                        onPress={this._onPressButton}
                        {...this.props}
                        >
                        <View style={styles.button} >
                            <Text style={styles.buttonText} >
                                { this.props.children }
                            </Text>
                        </View>
                    </TouchableHighlight>
                );
                
                case 'TouchableOpacity':
                return(
                    <TouchableOpacity
                        onPress={this._onPressButton}
                        {...this.props}
                        >
                        <View style={styles.button} >
                            <Text style={styles.buttonText} >
                                {this.props.children}
                            </Text>
                        </View>
                    </TouchableOpacity>
                );
                
                case 'TouchableNativeFeedback':
                return(
                    <View>
                        {
                            renderIf(
                                Platform.OS === 'android',
                                <TouchableNativeFeedback
                                    {...this.props}
                                    onPress={this._onPressButton}
                                    background={Platform.OS === 'android' ? TouchableNativeFeedback.SelectableBackground() : ''}
                                    >
                                    <View style={styles.button} >
                                        <Text style={styles.buttonText} >
                                            {this.props.children}
                                        </Text>
                                    </View>
                                </TouchableNativeFeedback>
                            )
                        }
                    </View>
                );
                
                case 'TouchableWithoutFeedback':
                return(
                    <TouchableWithoutFeedback
                        {...this.props}
                        onPress={this._onPressButton}
                        >
                        <View style={styles.button} >
                            <Text style={styles.buttonText} >
                                {this.props.children}
                            </Text>
                        </View>
                    </TouchableWithoutFeedback>

                );

                case 'TouchableHighlightonLongPress':
                return(
                    <TouchableHighlight 
                        {...this.props}
                        onPress={this._onPressButton}
                        onLongPress={this._onLongPressButton}
                    >
                        <View style={styles.button} >
                            <Text style={styles.buttonText} >
                                {this.props.children}
                            </Text>
                        </View>
                    </TouchableHighlight>
                );
        }
    }
}