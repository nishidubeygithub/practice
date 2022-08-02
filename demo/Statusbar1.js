import React, {useState} from 'react';
import {View, Text, StyleSheet, SafeAreaView, StatusBar, Button} from 'react-native';


const Statusbar1 = () => {
  
return (
    <SafeAreaView style={styles.container}>
      <StatusBar 
       barStyle="dark-content" 
       animated={true}
       networkActivityIndicatorVisible={true}
       translucent={true}
       showHideTransition='fade'
       hidden={false}// to hide statusbar
       backgroundColor="green"/>
      <Text style={{padding:80, marginTop:10, color: "blue" }}>Demo</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
  },
});

export default Statusbar1;