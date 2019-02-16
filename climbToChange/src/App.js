import React from "react";
import * as firebase from "firebase";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

var app = firebase.initializeApp({
  apiKey: "AIzaSyAb_tU3K1VyoPKd6zxOfrY70on72Jj2RtU",
  authDomain: "climbtochange-6797f.firebaseapp.com",
  databaseURL: "https://climbtochange-6797f.firebaseio.com",
  projectId: "climbtochange-6797f",
  storageBucket: "climbtochange-6797f.appspot.com",
  messagingSenderId: "146545094917"
});
var db = firebase.database();

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      num: "a"
    };
    console.log("constructor");
  }

  render() {
    console.log("render");
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => this.updateThing(Math.random())}
          style={{ height: 200, width: 200, backgroundColor: "red" }}
        >
          <Text>ur app!</Text>
          <Text>{this.state.num}</Text>
        </TouchableOpacity>
      </View>
    );
  }

  componentDidMount() {
    console.log("componentDidMount");
    // firebase;
    this.testRef = db.ref("test");
    this.testRef.on("value", snapshot => {
      this.setState({ num: snapshot.val().num });
    });
  }

  updateThing = num => {
    this.testRef.update({ test: num });
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
