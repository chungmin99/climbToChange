import React from 'react';

import { StyleSheet, Text, View, Image, TouchableOpacity, Button, Linking} from 'react-native';

import { color, theme } from '../theme';

const Block = ({box}) =>
    <View style={styles.container}>
        <TouchableOpacity
           style={{ height: 400, width: 300, backgroundColor: color.main }}>
            <Image 
                source={{ uri: `${box.img}` }}
                style={{ width: 300, height: 200 , alignItems: "center"}}
                resizeMode="cover"
            />
            <Text style={theme.header}>{box.title}</Text>
            <Text style={theme.subtitle}>{box.tags}</Text>
            <Text style={theme.content}>{box.description}</Text>
            <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between'}}>
            <Button 
                onPress={ () => {Linking.openURL(`${box.sourceurl}`)} }
                title="About Source"
                color={color.point}
            />
            <Button 
                onPress={ () => {Linking.openURL(`${box.articleurl}`)} }
                title="Go to Article"
                color={color.point}
            />
            </View>
        </TouchableOpacity>
    </View>

const styles = StyleSheet.create({
   container: {
     flex: 1,
     backgroundColor: "#fff",
     alignItems: "center",
     margin: 20,
     justifyContent: "center"
   }
})

export {
    Block
}
