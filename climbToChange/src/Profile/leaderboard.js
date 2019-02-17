import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableOpacity, Alert } from "react-native";
import { Table, TableWrapper, Row, Cell } from "react-native-table-component";

export default class Leaderboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tableHead: ["Name", "City", "Score", "Profile"],
      tableData: [
        ["Susan Wojcicki", "San Bruno", "50", "d"],
        ["Scott Forstall", "Cupertino", "49", "d"],
        ["Mark Zuckerberg", "Menlo Park", "34", "d"],
        ["Larry Page", "Mountain View", "45", "d"],
        ["Sergey Brin", "Mountain View", "45", "d"],
        ["Winnie Wang ", "SF", "20", "4"],
        ["Chung Min Kim", "SF", "19", "d"],
        ["Kaycee Pham", "SF", "18", "4"],
        ["Nicole Chui", "SF", "17", "4"]
      ]
    };
  }

  _alertIndex(index) {
    Alert.alert(`This is row ${index + 1}`);
  }

  render() {
    const state = this.state;
    const element = (data, index) => (
      <TouchableOpacity onPress={() => this._alertIndex(index)}>
        <View style={styles.btn}>
          <Text style={styles.btnText}>BIO</Text>
        </View>
      </TouchableOpacity>
    );

    return (
      <View style={styles.container}>
        <Table borderStyle={{ borderColor: "transparent" }}>
          <Row
            data={state.tableHead}
            style={styles.head}
            textStyle={styles.text}
          />
          {state.tableData.map((rowData, index) => (
            <TableWrapper key={index} style={styles.row}>
              {rowData.map((cellData, cellIndex) => (
                <Cell
                  key={cellIndex}
                  data={cellIndex === 3 ? element(cellData, index) : cellData}
                  textStyle={styles.text}
                />
              ))}
            </TableWrapper>
          ))}
        </Table>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: "#fff" },
  head: { height: 40, backgroundColor: "#808B97" },
  text: { margin: 6 },
  row: { flexDirection: "row", backgroundColor: "#FFF1C1" },
  btn: { width: 58, height: 18, backgroundColor: "#78B7BB", borderRadius: 2 },
  btnText: { textAlign: "center", color: "#fff" }
});

// import { Platform } from "react-native";
// import { Icon } from "react-native-elements";
// import { StackNavigator, TabNavigator } from "react-navigation";
// import PropTypes from "prop-types";
//
// // import Profile1 from './screens/Profile1'
// // import Profile2 from './screens/Profile2'
// import Profile1 from "./screens/Profile1";
// // import Profile4 from './screens/Profile4'
//
// import Product1 from "./screens/Product1";
//
// import Options from "./screens/Profile3/Options";
//
// // const Profile1Stack = StackNavigator(
// //   {
//     profile: {
//       screen: Profile1,
//       path: '/',
//     },
//     options: {
//       screen: Options,
//       path: '/',
//     },
//   },
//   {
//     mode: 'card',
//   }
// )
//
// const Profile2Stack = StackNavigator(
//   {
//     profile: {
//       screen: Profile2,
//       path: '/',
//     },
//     options: {
//       screen: Options,
//       path: '/',
//     },
//   },
//   {
//     mode: 'card',
//   }
// )

// const Profile3Stack = StackNavigator(
//   {
//     profile: {
//       screen: Profile3,
//       path: "/"
//     },
//     options: {
//       screen: Options,
//       path: "/"
//     }
//   },
//   {
//     mode: "card"
//   }
// );

// const Profile4Stack = StackNavigator(
//   {
//     profile: {
//       screen: Profile4,
//       path: '/',
//     },
//     options: {
//       screen: Options,
//       path: '/',
//     },
//   },
//   {
//     mode: 'card',
//   }
// )

// const Product1Stack = StackNavigator(
//   {
//     profile: {
//       screen: Product1,
//       path: "/"
//     }
//   },
//   {
//     mode: "card"
//   }
// );
//
// const HomeIcon = ({ focused, tintColor }) => (
//   <Icon
//     name="circle"
//     type="entypo"
//     size={26}
//     color={focused ? tintColor : "gray"}
//   />
// );
//
// const RootTabs = TabNavigator(
//   {
//     // profile1: {
//     //   screen: Profile1Stack,
//     //   navigationOptions: {
//     //     tabBarLabel: 'Profile1',
//     //     tabBarIcon: HomeIcon,
//     //   },
//     // },
//     // profile2: {
//     //   screen: Profile2Stack,
//     //   navigationOptions: {
//     //     tabBarLabel: 'Profile2',
//     //     tabBarIcon: HomeIcon,
//     //   },
//     // },
//     profile1: {
//       screen: Profile3Stack,
//       navigationOptions: {
//         tabBarLabel: "Profile1",
//         tabBarIcon: HomeIcon
//       }
//     },
//     // profile4: {
//     //   screen: Profile4Stack,
//     //   navigationOptions: {
//     //     tabBarLabel: 'Profile4',
//     //     tabBarIcon: HomeIcon,
//     //   },
//     // },
//
//     // PRODUCT
//     product1: {
//       screen: Product1Stack,
//       navigationOptions: {
//         tabBarLabel: "Profile1",
//         tabBarIcon: HomeIcon,
//         tabBarVisible: false
//       }
//     }
//   },
//   {
//     tabBarPosition: "bottom",
//     initialRouteName: "profile1",
//     tabBarOptions: {
//       showLabel: false,
//       showIcon: true,
//       indicatorStyle: {
//         backgroundColor: "transparent"
//       }
//     },
//     labelStyle: {
//       fontSize: 12
//     },
//     iconStyle: {
//       width: 30,
//       height: 30
//     },
//     style: {
//       backgroundColor: "white",
//       justifyContent: "center"
//     }
//   }
// );
//
// // HomeIcon.propTypes = {
// //   focused: PropTypes.bool.isRequired,
// //   tintColor: PropTypes.string.isRequired,
// // }
// // }
//
// export default RootTabs;
