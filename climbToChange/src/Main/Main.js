import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView
} from 'react-native';

import {
  theme
} from '../theme.js'
import image from './ocean.jpg';


var styles = {
  backgroundImage: 'url(' + image + ')'
};

export default class Main extends React.Component {
    render() {
      state = {
        search: '',
      };

      updateSearch = search => {
        this.setState({
          search
        });
      };

      render() {
        return ( <
          ScrollView >
          <
          View >
          <
          Text style = {
            theme.header
          } >
          Main <
          /Text> <
          Text style = {
            theme.subtitle
          } >
          'Main page for user' <
          /Text> <
          Text style = {
            theme.content
          } >
          Did you know that climate change exists.. ? ? ? ? I cannot believe it!Did you know that climate change exists.. ? ? ? ? I cannot believe it!Did you know that climate change exists.. ? ? ? ? I cannot believe it!Did you know that climate change exists.. ? ? ? ? I cannot believe it!Did you know that climate change exists.. ? ? ? ? I cannot believe it!The earth is dying and nobody knew that ? ? ?

          Did you know that climate change exists.. ? ? ? ? I cannot believe it!Did you know that climate change exists.. ? ? ? ? I cannot believe it!Did you know that climate change exists.. ? ? ? ? I cannot believe it!Did you know that climate change exists.. ? ? ? ? I cannot believe it!Did you know that climate change exists.. ? ? ? ? I cannot believe it!The earth is dying and nobody knew that ? ? ?
          Did you know that climate change exists.. ? ? ? ? I cannot believe it!Did you know that climate change exists.. ? ? ? ? I cannot believe it!Did you know that climate change exists.. ? ? ? ? I cannot believe it!Did you know that climate change exists.. ? ? ? ? I cannot believe it!Did you know that climate change exists.. ? ? ? ? I cannot believe it!The earth is dying and nobody knew that ? ? ?
          Did you know that climate change exists.. ? ? ? ? I cannot believe it!Did you know that climate change exists.. ? ? ? ? I cannot believe it!Did you know that climate change exists.. ? ? ? ? I cannot believe it!Did you know that climate change exists.. ? ? ? ? I cannot believe it!Did you know that climate change exists.. ? ? ? ? I cannot believe it!The earth is dying and nobody knew that ? ? ?
          Did you know that climate change exists.. ? ? ? ? I cannot believe it!Did you know that climate change exists.. ? ? ? ? I cannot believe it!Did you know that climate change exists.. ? ? ? ? I cannot believe it!Did you know that climate change exists.. ? ? ? ? I cannot believe it!Did you know that climate change exists.. ? ? ? ? I cannot believe it!The earth is dying and nobody knew that ? ? ?
          Did you know that climate change exists.. ? ? ? ? I cannot believe it!Did you know that climate change exists.. ? ? ? ? I cannot believe it!Did you know that climate change exists.. ? ? ? ? I cannot believe it!Did you know that climate change exists.. ? ? ? ? I cannot believe it!Did you know that climate change exists.. ? ? ? ? I cannot believe it!The earth is dying and nobody knew that ? ? ?
          Did you know that climate change exists.. ? ? ? ? I cannot believe it!Did you know that climate change exists.. ? ? ? ? I cannot believe it!Did you know that climate change exists.. ? ? ? ? I cannot believe it!Did you know that climate change exists.. ? ? ? ? I cannot believe it!Did you know that climate change exists.. ? ? ? ? I cannot believe it!The earth is dying and nobody knew that ? ? ?
          Did you know that climate change exists.. ? ? ? ? I cannot believe it!Did you know that climate change exists.. ? ? ? ? I cannot believe it!Did you know that climate change exists.. ? ? ? ? I cannot believe it!Did you know that climate change exists.. ? ? ? ? I cannot believe it!Did you know that climate change exists.. ? ? ? ? I cannot believe it!The earth is dying and nobody knew that ? ? ?
          Did you know that climate change exists.. ? ? ? ? I cannot believe it!Did you know that climate change exists.. ? ? ? ? I cannot believe it!Did you know that climate change exists.. ? ? ? ? I cannot believe it!Did you know that climate change exists.. ? ? ? ? I cannot believe it!Did you know that climate change exists.. ? ? ? ? I cannot believe it!The earth is dying and nobody knew that ? ? ?
          Did you know that climate change exists.. ? ? ? ? I cannot believe it!Did you know that climate change exists.. ? ? ? ? I cannot believe it!Did you know that climate change exists.. ? ? ? ? I cannot believe it!Did you know that climate change exists.. ? ? ? ? I cannot believe it!Did you know that climate change exists.. ? ? ? ? I cannot believe it!The earth is dying and nobody knew that ? ? ?
          Did you know that climate change exists.. ? ? ? ? I cannot believe it!Did you know that climate change exists.. ? ? ? ? I cannot believe it!Did you know that climate change exists.. ? ? ? ? I cannot believe it!Did you know that climate change exists.. ? ? ? ? I cannot believe it!Did you know that climate change exists.. ? ? ? ? I cannot believe it!The earth is dying and nobody knew that ? ? ?
          </Text>
          </View>
          </ScrollView>
        )
      }
    }
