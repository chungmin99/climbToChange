import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Button} from 'react-native';

import { color, theme } from '../theme';

const Block = ({box}) =>
    <View style={styles.container}>
        <TouchableOpacity
           style={{ height: 300, width: 300, backgroundColor: color.main }}>
            <Image 
                source={{ uri: `${box.img}` }}
                style={{ width: 300, height: 200 , alignItems: "center"}}
                resizeMode="contain"
            />
            <Text style={theme.header}>{box.title}</Text>
            <Text style={theme.subtitle}>{box.tags}</Text>
            <Text style={theme.content}>{box.description}</Text>
            <Button title="Click me!"
                color={color.sub}
            />
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
