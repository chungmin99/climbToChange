import React from 'react';
import { WebView, StyleSheet, Text, View } from 'react-native';

import { theme } from '../theme'

export default class Policies extends React.Component {
    render() {
        return ( 
            <View style={{flex:1}}>
               <WebView
                 automaticallyAdjustContentInsets={false}
                 source={{uri: 'https://www.climatechange.ca.gov/'}}
                 javaScriptEnabled={true}
                 domStorageEnabled={true}
                 decelerationRate="normal"
                 startInLoadingState={true}
               />
            </View>
        )
    }
}
