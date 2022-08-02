import React, {useState } from "react";
import {View, StyleSheet, Text, Alert, TouchableWithoutFeedback, SafeAreaView } from "react-native";

 const Touchablewithoutfeedback = () => {
  const [onPressInActive, SetOnPressInActive] = useState('yellow');
  
 
  
const handlerLongClick = () => {
    alert('Button Long Pressed');
};
return (

    <SafeAreaView>
    <View style={styles.container}>
    <TouchableWithoutFeedback
      onPress= {() => Alert.alert("Touchable Without Feedback")}
      onPressIn={() => { SetOnPressInActive('yellow') }}
      onPressOut={() => { SetOnPressInActive('green') }}
      delayLongPress={2}
      delayPressIn={50}
      delayPressOut={10}
      touchSoundDisabled={true}// for Android
      onLongPress={handlerLongClick}
      hitSlop={{top: 20, bottom: 20, left: 50, right: 50}}
     disabled={false}>
       <View>
     <Text style={styles.text}>Touch Here</Text>
     </View>
          </TouchableWithoutFeedback>
          </View>
          </SafeAreaView>
   )}  
   
   const styles = StyleSheet.create ({
    container:{
      backgroundColor:'lightgreen',
      padding:20,
      margin:30
    },
    text:{
      fontSize:20, 
      alignItems:'center', 
      textAlign:'center'
    }
   })  
   export default Touchablewithoutfeedback;