import React, {Component} from 'react'
import { AppRegistry, Text, View } from 'react-native';
import { SearchBar } from 'react-native-elements';
import image from './ocean.jpg';

var styles = {
  backgroundImage: 'url('+image+')'
};

export default class Main extends React.Component {
  state = {
    search: '',
  };

  updateSearch = search => {
    this.setState({ search });
  };

  render() {
    const { search } = this.state;

    return (
      <View>
        <Text>This is the main menu.</Text>
      </View>
      <SearchBar
        placeholder = "Search"
        onChangeText = { this.updateSearch }
        value = { search }
      />
    );
  }
}

AppRegistry.registerComponent('Main', () => Main);
