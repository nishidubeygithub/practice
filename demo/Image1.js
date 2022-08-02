import React, {useState} from 'react';
import {View, Text, Image, StyleSheet, Button, Alert} from 'react-native';

const Image1 = () =>{
    const [imageError, setImageError] = useState(true);

    const [imageWidth, setWidth] = useState(300);
    const [imageHeight, setHeight] = useState(80);
 
  const onImageNotFound = () => {
    setImageError(false);
  }
  const onUpdateLayout = () => {
 
    Alert.alert('Welcome');
 
  }
 
  const updateWidthHeight = () => {
 
    setWidth(300);
 
    setHeight(80);
 
  }
  const onLoadFinish = () => {
 
    Alert.alert('onLoadEnd');
 
  }
  const startLoading = () => {
 
    Alert.alert('onLoadStart');
 
  }
  return(
    <View style = {styles.container}>
        <Image 
        resizeMode ='repeat'
        blurRadius={1}
        progressiveRenderingEnabled={true}
        source ={require('../Assets/sunset.webp')} style = {styles.image}
        // onLoadEnd={onLoadFinish}
        onLoadStart={startLoading}/>
        <Image source ={{uri: 'https://reactnative-examples.com/wp-content/uploads/2021/10/cosmos.jpg'}} style = {styles.back}
        // resizeMode='cover'
        capInsets={{ left: 40, right: 50, bottom: 70, top: 30 }}/>
        <Text style={styles.text}>Image eg</Text>
        <Image source={require('../Assets/grocery-1.png')} 
        style={{ width: imageWidth, height: imageHeight, resizeMode: 'cover', marginBottom: 30 }}
        onLayout={onUpdateLayout}
        // resizeMode="repeat"
        fadeDuration={1}/>
        <Image source={
        imageError ?
          { uri: 'https://reactnative-examples.com/wp-content/uploads/2022/02/earth.jpg' } 
          : { uri: 'https://reactnative-examples.com/wp-content/uploads/2022/02/error-image.png'}}
        // {require('../google-logo.png')}
        style={{ width: 300, height: 200, resizeMode: 'contain' }}
        onError={() => onImageNotFound()} />

        <Button onPress={updateWidthHeight} title='Submit' />
 
</View>
  )
}
const styles= StyleSheet.create({
    container:{
        paddingTop:20
    },
    image:{
        height:200,
        width:300,
        marginLeft:40,
        marginTop:50,
        margin:20
    },
    back:{
        height:200,
        width:300,
        marginLeft:20
    },
    grocery:{
        height:80,
        width:300,
        marginLeft:20,
        margin:20
        
        },
        text:{
            fontSize:20,
            textAlign:'center'
        }
})
export default Image1;