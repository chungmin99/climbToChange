import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Tile } from 'react-native-elements';

export default class DisplayTile extends React.Component {
  render() {
    return (
      <Tile
        imageSrc={require('./nature.jpg')}
        height={640}
        title="Our Mission"
        featured
        caption="Build your knowledge. Change the world. Together, we can stop climate change."
      />
    ); 
  }
}
