/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  ScrollView,
  Image,
  ViewPagerAndroid,
  View
} from 'react-native';

import PizzaTranslator from './components/PizzaTranslator';
import Buttons from './components/Buttons';
import List from './components/List';

import renderIf from './src/renderIf';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component {
  render() {
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    return (
      <ScrollView style={styles.container}>
        <Image source={pic} style={{ width: 193, height: 110 }} />

        <Text
          style={styles.welcome}
          >
          Welcome to React Native!
        </Text>

        <PizzaTranslator />

        <Buttons />

        <List
          elements={[
            { key: 'Devin' },
            { key: 'Jackson' },
            { key: 'James' },
            { key: 'Joel' },
            { key: 'John' },
            { key: 'Jillian' },
            { key: 'Jimmy' },
            { key: 'Julie' },
          ]} />

        <View>

          {
            renderIf( Platform.OS === 'android',
              <ViewPagerAndroid
              style={styles.viewPager}
              initialPage={0}>
                  <View style={styles.pageStyle} key="1">
                    <Text>First page</Text>
                  </View>
                  <View style={styles.pageStyle} key="2">
                    <Text>Second page</Text>
                  </View>
              </ViewPagerAndroid>
          )}
        
        </View>


        <Text style={styles.instructions}>
          To get started, edit App.js
        </Text>

        <Text style={styles.instructions}>
          {instructions}
        </Text>

      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
    viewPager: {
    flex: 1
  },
  pageStyle: {
    alignItems: 'center',
    padding: 20,
  },
});
