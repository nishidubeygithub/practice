import React from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";

const ActivityIndicator1 = () => (
  <View style={styles.container}>
   <ActivityIndicator
   animating={true} 
   hidesWhenStopped={false}
   size="large" color = 'red'/>
   <View style={styles.text}>
   <ActivityIndicator hidesWhenStopped={true} size="small" color = 'blue' />
   <View style={styles.container}>
   <ActivityIndicator animating={true} 
   size="large" color = 'pink'/>
   <View style={styles.active}>
   <ActivityIndicator size="small" color = 'green' />
   
  </View>
   </View>
   </View>
   </View>

);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding:70,
    marginTop:80
  },
  view:{
    marginTop:40,
    justifyContent: "space-around",
    padding: 0,
   
  },
  text: {
    flexDirection:'row',
    marginTop:40,
    justifyContent: "space-around",
    padding: 20,
    marginLeft:50,
    marginBottom:40
  },
  active:{
    marginTop:40,
    justifyContent: "space-around",
    padding: 20,
    marginRight:50
   
  }
});

export default ActivityIndicator1;