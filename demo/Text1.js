import React from "react";
import { View, StyleSheet, Text, Alert } from 'react-native';
 
const Text1 = () => {
    const updateLayout = () => {
 
        Alert.alert('onLayout Prop Called...');
     
      }
 return (
    <View>
        <Text style ={styles.text}
        accessible={true}
        selectable={false}
        suppressHighlighting={true}
        accessibilityLabel={'This View Component is Accessible Via TalkBack'}
        accessibilityComponentType={'button'}
        allowFontScaling={false}
        maxFontSizeMultiplier={1}
        minimumFontScale={1}
        // textBreakStrategy='simple'
        
        // disabled={true}
        
        // onPress={() => Linking.openURL('https://google.com')} 
        dataDetectorType='link'>
          Click Here To Open Google
       
        {/* adjustsFontSizeToFit={false}
        android_hyphenationFrequency='none'> */}
        </Text>
        <Text style={styles.text} 
        // onStartShouldSetResponderCapture={() => false}
        // onMoveShouldSetResponderCapture={() => true}
        // numberOfLines={1} 
        // ellipsizeMode={'head'}
        >Hello how are you</Text>
        <Text style={styles.text}
        onLayout={updateLayout}>
        Example of onLayout Prop on Text in React Native Name</Text>
        <Text style={styles.text}
        selectable={true}
        selectionColor='green'
        suppressHighlighting={true}
        onPress={() => {alert('welcome')}}
        onLongPress={()=>{alert("pressed")}}>Nishi</Text>
        </View>
 )
}

const styles = StyleSheet.create ({
    text:{
        padding:40,
        fontWeight:'bold',
        fontSize:20,
        textAlign:'center'
    }
})
export default Text1;
    

