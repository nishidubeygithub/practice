import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const View1 = () =>{
  return(
    <View>
      <TouchableOpacity
accessible={true}
// accessibilityLabel="hii"
// accessibilityHint="hii"
// onPress={() => {}}

accessibilityRole={'button'}>
<Text style={styles.text}>nishi</Text>

</TouchableOpacity>
</View>

);
}
const styles = StyleSheet.create ({
    text:{
        padding:70,
        fontSize:20
    }
})

export default View1;