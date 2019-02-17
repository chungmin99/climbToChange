import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

class Login extends React.Component {
  render() {
    console.log(this.props);
    return (
      <View>
        style=
        {{
          flex: 1,
          borderWidth: 1,
          justifyContent: "center",
          alignItems: "center"
        }}
        )> (
        <TouchableOpacity
          onPress={() => this.props.navigation.push("Tabs")}
          style={{
            height: 50,
            width: 100,
            backgroundColor: "yellow",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Text>Log in</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Login;
