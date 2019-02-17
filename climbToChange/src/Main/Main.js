import React from 'react';
import { StyleSheet, Text, View, ScrollView} from 'react-native';

import { Block } from './Block'
import Entries from './data.json'

export default class Main extends React.Component {
    render() {
        return ( 
            <ScrollView>
            <View>
            <Block box={Entries.box1}></Block>
            <Block box={Entries.box2}></Block>
            <Block box={Entries.box3}></Block>
            <Block box={Entries.box4}></Block>
            <Block box={Entries.box5}></Block>
            </View>
            </ScrollView>
        )
    }
}
