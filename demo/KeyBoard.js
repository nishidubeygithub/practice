import React from 'react';
import { View, KeyboardAvoidingView, TextInput, StyleSheet, Text, Platform, TouchableWithoutFeedback, Button, Keyboard  } from 'react-native';

const KeyBoard = () => {
  return (
    <KeyboardAvoidingView
    behavior = 'height'
    // behavior = 'position'
    keyboardVerticalOffset={20}
    enabled={true}
    contentContainerStyle={{fontSize:0, marginLeft:10}}
    style={styles.container}
     >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.inner}>
          <Text style={styles.header}>Header</Text>
          <TextInput placeholder="Username" style={styles.textInput} />
          <View style={styles.btnContainer}>
            <Button title="Submit" color ='black'/>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  inner: {
    padding: 10,
    flex: 1,
    justifyContent: "space-around"
  },
  header: {
    fontSize: 36,
    marginBottom: 48
  },
  textInput: {
    height: 300,
    borderColor: "green",
    borderBottomWidth: 1,
    marginBottom: 10,
    paddingTop:270,
    padding:10
  },
  btnContainer: {
    backgroundColor: "green",
    marginTop: 10
  }
});

export default KeyBoard;