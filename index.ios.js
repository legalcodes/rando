/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from "react-native";

export default class rando extends Component {
    render() {
        return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to Rando!
        </Text>
        <Text style={styles.instructions}>
          To get started, select your contacts, greetings, and set the frequency for texting each contact
        </Text>
      </View>
        );
    }
}

const bgWhite = "#F5FCFF";
const black = "#333333";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: bgWhite
    },
    welcome: {
        fontSize: 20,
        textAlign: "center",
        margin: 10
    },
    instructions: {
        textAlign: "center",
        color: black,
        marginBottom: 5
    }
});

AppRegistry.registerComponent("rando", () => rando);
