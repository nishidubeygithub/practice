import React, { Component } from "react";
import {View, StyleSheet, Text, Alert, Image, TouchableOpacity, SafeAreaView} from "react-native";

 class Touchableopacity extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
       pressed: false
 };
}
  render(){
  return (
    <SafeAreaView>
    <View style={styles.container}>
       <TouchableOpacity
      onPress= {() => Alert.alert ("Touchable Opacity")}
      activeOpacity={0.3}
      style={styles.button}
      disabled={false}>
          <Text style ={styles.text}>Press Here</Text>
          </TouchableOpacity>
      </View>
      </SafeAreaView>
    
  );
}
}
  const styles = StyleSheet.create({
  container:{
    backgroundColor:'pink',
    padding:20,
    margin:40
  },
  text:{
    fontSize:20, 
    alignItems:'center', 
    textAlign:'center'
  },
  
});

export default Touchableopacity;