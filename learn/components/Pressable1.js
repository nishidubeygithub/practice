import React, { Component } from "react";
import {View, StyleSheet, Text, Alert, Image, TouchableOpacity, TouchableHighlight, TouchableWithoutFeedback, Pressable } from "react-native";

 class Pressable1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
       pressed: false
 };
}
  render(){
  return (
    <View style={styles.container}>

     <Pressable 
     style={({pressed}) => [
          {
            backgroundColor: pressed ? 'red' : 'yellow'
          },
          styles.button]}
          android_ripple={{ color: 'blue' }}
        //   android_ripple={{borderless:'false'}}
        //   android_ripple={{radius:'60'}}
        onPress={() => Alert.alert('Button Pressed!')}
        onPressIn={() => console.log('Press In')}
        onPressOut={() => Alert.alert('Press Out')}
        android_disableSound={false}
        >
        <Text style={styles.text}>Button</Text>
      </Pressable>
      </View>
    
    );
  }
  }
    
    
  
    
      
    
  
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      padding: 20,
      margin:30
    },
    button: {
      alignItems: "center",
      fontSize:30,
      padding:20,
      color:'black', 
      textAlign:'center'
    },
    text:{
        fontSize:20, 
        alignItems:'center', 
        textAlign:'center'
      }
    
  });
  
  export default Pressable1;       
  
