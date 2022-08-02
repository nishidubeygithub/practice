import React, {useState} from "react";
import { View, StyleSheet, Text, RefreshControl, ScrollView, SafeAreaView} from 'react-native';

const RefreshControl1 = () => {
  const [refresh, setRefresh] = useState(true)

  const Pull = () =>{
    setRefresh(true)
  }
     
  return(
    <View style={styles.container}>
      <ScrollView style={styles.text}
      refreshControl={
        <RefreshControl
        refreshing={refresh}
        onRefresh={() =>Pull()}
        size = "large"
        color="lightblue"
        enabled={true}
        progressBackgroundColor='yellow'
        tintColor='red'
        progressViewOffset={8}
        title='Control'
        titleColor="blue"
        
        />
      }
      > 
        <Text>Refresh</Text>
        </ScrollView> 
        </View>
  )
    }

  const styles = StyleSheet.create({
    container:{
      flex:1,
      padding:20,
      marginTop:40,
      backgroundColor:'lightblue'
    }
  })

  export default RefreshControl1;
  
  