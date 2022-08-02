import React, {useState} from 'react';
import {View, Text, StyleSheet, Switch} from 'react-native';

const Switch1 = () => {
    const [isEnabled, setIsEnabled] = useState(true)
    const [location, setLocation] = useState(true)

    const toggleSwitch = () =>{
        setIsEnabled(previousState => !previousState)
    }
    const toggleLocation = () => {
        setLocation(previousState => !previousState)
    }
    return(
        <View style={styles.container}>
            <Text style={styles.text}>{isEnabled ? 'Switch is Off': 'Switch is ON'}</Text>
            <Switch
            trackColor={{false: 'red', true:'lightblue'}}
            thumbColor={isEnabled ? 'pink' : 'yellow'}
            ios_backgroundColor='grey'
            onValueChange={toggleSwitch}
            disabled={false}
            value={isEnabled}/>
            <Text style={styles.text}>{location ? 'Location is Off': 'Location is ON'}</Text>
            <Switch
            trackColor={{false: 'green', true:'pink'}}
            thumbColor={location ? 'brown' : 'black'}
            ios_backgroundColor='lightgreen'
            onValueChange={toggleLocation}
            disabled={false}
            value={location}/>
            </View>
            
    )
}
const styles = StyleSheet.create({
    container:{
    fontWeight:'bold',
    margin:20
    },
    text:{
        margin:5,
        padding:50,
        fontSize:20
    }
})
export default Switch1;

