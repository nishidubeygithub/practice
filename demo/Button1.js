import React from "react";
import { View, StyleSheet, Text, TextInput, Button} from 'react-native';

const Button1 = () => {
    return(
        <View> 
            <View style={styles.container}>
            <Button title='Press me'
            color='black' onPress={() => alert('welcome')}
            />
            </View>
            <Text style={styles.text}>Name</Text>
            <View style={styles.btn}>
                
          <Button title='Submit'
           disabled={true}/>
         </View>   
        </View>
        
    )
}

const styles= StyleSheet.create ({
    container:{
    backgroundColor: "green",
    marginTop: 100,
    height:40,
    width:100,
    marginLeft:140,
 },
 text:{
    fontSize:20,
    padding:20,
    marginTop:20
 },
 btn:{
    // padding:10,
    backgroundColor:'blue',
    marginTop:20,
    height:40,
    width:100,
    marginLeft:140,
    marginRight:0
 }
})

export default Button1;