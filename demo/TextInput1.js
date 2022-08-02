import React, {useState} from "react";
import { View, StyleSheet, Text, TextInput, Button, Alert} from 'react-native';
 
const TextInput1 = () => {
    const [name, setName] = useState("");
    const [onPressInActive, SetOnPressInActive] = useState('green');
 
  const callOnPress = () => {
    Alert.alert('Pressable Called.....')
  }
 return (
    <View style= {styles.container}>
        <Text style={styles.text}>Email</Text>
        <TextInput style={styles.input}
        placeholder="email"
        activeUnderlineAndroid="green" 
        underlineColor="purple" 
        multiline={true}
        editable={true}
        autoCorrect={true}
        autoFocus={true}
        returnKeyType="go"
        // 
        onPressIn={() => { SetOnPressInActive('orange') }}
        onPressOut={() => { SetOnPressInActive('green') }}
        // allowFontScaling={true}
        autoCapitalize = 'sentences'
        keyboardAppearance='light'
        blurOnSubmit={true}
        numberOfLines={2}
        enablesReturnKeyAutomatically={true}
        selectionColor='green'
        selectTextOnFocus={true}
        spellCheck={true}
        textAlign ='center'
        scrollEnabled={true}
        value={name}
        onChangeText={(text) => setName(text)}
        onSubmitEditing={() => Alert.alert('welcome')}

        // dataDetectorTypes={'address'}
        caretHidden={false}
        // value="first example"
        keyboardType="default"/>
        {/* maxLength={6}/> */}
        
        <View style={styles.password}>
        <Text style={styles.text}>Password</Text>
        <TextInput style={styles.input}
        placeholder="Password"
        placeholderTextColor = "purple"
        secureTextEntry={false}
        activeUnderlineColor="green" 
        autoFocus={true}
        allowFontScaling={true}
        clearTextOnFocus={true}
        underlineColor="purple"
        clearButtonMode='never'
        blurOnSubmit={true}
        onBlur ={() => {}}
        autoCapitalize = 'words'
        keyboardAppearance='dark'
        keyboardType="numeric"/>
        
        <View style={styles.button}>
        <Button title = "Submit" onPress={callOnPress} color = "green"/>
        </View>
        </View>

        </View>
        )
        }

const styles = StyleSheet.create ({
    container:{
        flex:1,
       padding: 10,
       },
  
  input:{
    borderColor: "gray",
    width: 300,
    height:50,
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    marginTop:30,
    marginLeft:20
  },
  password:{
    padding:10,
    marginTop:20
  },

 text:{
        marginTop:80,
        fontSize:15,
        marginLeft:20,
        margin:5
    }
        })

export default TextInput1;