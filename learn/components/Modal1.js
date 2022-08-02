import React, { useState } from "react";
import {View, StyleSheet, Text, Button, Modal, Image, Alert, TouchableOpacity} from 'react-native';

const Modal1 = () => {
const [isVisible, setVisible] = useState(false);
const tempFunction = () => {
Alert.alert('onShow');
 }
const callDismiss_iOS = () => {
console.log('onDismiss');
 
  }
 
  const Modal_Component = () => (
    <View style={{height:0}}>
      <Modal
        animationType={"slide"}
        transparent={false}
        visible={isVisible}
        onDismiss={callDismiss_iOS}
        presentationStyle={"FullScreen"}
        supportedOrientations={['portrait']}
        onOrientationChange={['landscape']}
        onShow={tempFunction}
        hardwareAccelerated={false}
        onRequestClose={() => {
          console.log("closed.");
        }}>
        <View style={styles.container}>
          <View style={styles.modalContainer}>

           
           <Text style={styles.text}>hardwareAccelerated Modal</Text>
           <Text style={styles.text}>hardwareAccelerated Modal</Text>
           <TouchableOpacity style={styles.button}>
            <Button title='Hide Modal' onPress={() => setVisible(!isVisible)} />
            </TouchableOpacity>
         </View>
        </View>
      </Modal>
    
    </View>
    
  
  );
 
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.MainContainer}>
        <Modal_Component/>
         <Text style={styles.text}>Click now to open modal</Text>
         <TouchableOpacity style={styles.button}>
        <Button onPress={() => setVisible(true)} title='Show Modal' />
        </TouchableOpacity>
       </View>
      </View>
  );
}
 
const styles = StyleSheet.create({
  container:{
    flex:1, 
    backgroundColor:'white',
    borderColor:"white",
    borderWidth:2,
    borderRadius:20,
    margin:20,
    padding:10,
    shadowOpacity:10,
    shadowRadius:10,
    elevation:10, 
    justifyContent:'center',
    alignItems:'center'
  },
 
  MainContainer: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  modalContainer: {
    width: 300,
    height: 300,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'white'
  },
  text: {
    fontSize: 28,
    textAlign: 'center',
    color: 'blue',
    padding: 10
  },
  image: {
    marginTop: 100,
    marginBottom: 10,
    width: '90%',
    height: 200,
  },
  button: {
    borderRadius:6,
    backgroundColor:'lightgreen',
    shadowColor:'pink',
    shadowRadius: 25,
    marginTop:100,
    borderRadius:20,
    height:50,
    width:150
  }
 
});
export default Modal1;