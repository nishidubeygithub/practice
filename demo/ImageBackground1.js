import React from "react";
import { View, StyleSheet, Text, ImageBackground} from 'react-native';

const ImageBackground1 = () => {
    return(
        <View style={styles.container}>
            <ImageBackground source = {require('../Assets/sunset.webp')} style ={styles.image}>
            <Text>heeloo</Text>
            </ImageBackground>
            </View>
    )
}

const styles = StyleSheet.create ({
    container:{
        padding:90
    },
    image:{
        height:200,
        width:300
    }
})
export default ImageBackground1;
