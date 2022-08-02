import React, { Component } from "react";
import {View, StyleSheet, Text, Alert, Image, TouchableHighlight, SafeAreaView } from "react-native";

 class Touchablehighlight extends React.Component {
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
  <TouchableHighlight 
      onPress= {() => Alert.alert ("Touchable Highlight")}
      activeOpacity={0.1}
      onHideUnderlay={() => {
        this.setState({ pressed: false  });
    }}
    onShowUnderlay={() => {
        this.setState({ pressed: true });
    }}

      underlayColor="green"
      style={styles.button}>
          <Text style={styles.text}>Click Here</Text>
        </TouchableHighlight>
      </View>
      </SafeAreaView>
    
      );
    }
    }
    const styles = StyleSheet.create({
      container:{
        backgroundColor:'lightblue',
        padding:10,
        margin:40
      },
      text:{
        fontSize:20, 
        alignItems:'center', 
        textAlign:'center'
      }
     
    });
    
    export default Touchablehighlight;  