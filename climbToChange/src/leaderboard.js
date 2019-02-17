import React from "react";
import { Text, View } from "react-native";
import { Climber, Badge, Icon, withBadge } from "react-native-elements";

import leaderboard from "react-native-leaderboard";

export default class Climber extends Component {
  state = {
    data: [
      {
        name: "Winnie",
        score: null
      },

      {
        name: "Chung Min",
        score: 244
      }
    ]
  };

  _alert = (title, body) => {
    Alert.alert(title, body, [{ text: "OK", onPress: () => {} }], {
      cancelable: false
    });
  };

  render() {
    const props = {
      labelBy: "name",
      sortBy: "score",
      data: this.state.data,
      icon: "iconUrl",
      onRowPress: (item, index) => {
        this._alert(item.name + " clicked", item.score + " points, wow!");
      },
      evenRowColor: "#edfcf9"
    };

    return (
      <View>
        <View
          style={{
            paddingTop: 50,
            backgroundColor: "blue",
            alignItems: "center"
          }}
        >
          <Text style={{ fontSize: 30, color: "white", paddingBottom: 10 }}>
            Leaderboard
          </Text>
        </View>
        <Leaderboard {...props} />
      </View>
    );
  }
}

// //...
// import Leaderboard from 'react-native-leaderboard';
// //...
// this.state = {
//     data: [
//         {userName: 'Joe', highScore: 52},
//         {userName: 'Jenny', highScore: 120},
//         //...
//     ] //can also be an object of objects!: data: {a:{}, b:{}}
// }
//
// render() {
//   return (
//       <Leaderboard
//         data={this.state.data}
//         sortBy='highScore'
//         labelBy='userName'/>)
// }
