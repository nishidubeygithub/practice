import React, {useState} from 'react';
import {View, FlatList, StyleSheet, Text, Alert, Button, Pressable,TouchableHighlight, TouchableOpacity} from 'react-native';

const Flatlist = () => {

const DATA = [
{id:'1', name:'ravi'},
{id:'2', name:'ram'},
{id:'3', name:'mohit'},
{id:'4', name:'mani'},
{id:'5', name:'rohit'},
{id:'6', name:'jay'},
{id:'7', name:'sumit'},
{id:'8', name:'sahil'},
];



const ItemDivider = () => {
  return (
    <View
      style={styles.View}
        
      
    />
  );
}
const onEnd = () => {
  Alert.alert('You Have Reached To List End...');
}
// const onViewableCall = () => {
//   console.log('onViewableItemsChanged')
// }

    return(
     <View style={styles.container}>
     <FlatList
      data={DATA}
      renderItem={({item}) => <Text style ={styles.text}>{item.name}</Text>}
      ItemSeparatorComponent={ItemDivider}
      ListHeaderComponent={()=>(
        <View>
        <Text style={styles.txt}>Header</Text>
        </View>
      )}
      ListHeaderComponentStyle={styles.header}
        ListFooterComponent={()=>(
          <View>
          <Text style={styles.txt}>Footer</Text>
          </View>
      )}
      ListFooterComponentStyle={styles.header}
      inverted={false}
      // initialScrollIndex={1}
        getItemLayout={(data, index) => ({
          length: DATA.length,
          offset: DATA.length * index,
          index,})}
      // numColumns={3} 
      initialNumToRender={10} 
      keyExtractor={item => item.id}
      showsVerticalScrollIndicator={true}
      progressViewOffset={500}
      removeClippedSubviews ={true}
      // // horizontal
      // // showsHorizontalScrollIndicator={false}
      onEndReached={onEnd}
      onEndReachedThreshold={0.5}
      // onViewableItemsChanged={onViewableCall}
       onRefresh={() => {console.log("Data Refreshed")}}
       refreshing={false}/>
 
        </View>
    )}
    
    const styles = StyleSheet.create({
      container: {
        flex:1,
        backgroundColor:'white',
        paddingHorizontal:20,
        padding:40,
        alignItems:'center',
        justifyContent:'center',
        marginTop:50,
        },
        text:{
          fontSize:20,
          padding:20
        },
        buttonStyle:{
      marginBottom:0,
      marginTop:5,
      fontSize:20,
      backgroundColor:'pink',
      borderRadius:12,
      height:60,
      width:"100%",
      alignItems:'center'
    
    },
    textStyle:{
      fontSize:20,
      height:40,
      width:"10%",
      borderRadius:10,
      marginVertical: 10,
      marginHorizontal: 15,
      marginTop:12,
      
    },
    header:{
      height:50,
      width:"80%",
      marginBottom:20,
      marginTop:10,
      fontSize:20,
      backgroundColor:'blue',
      borderRadius:12,
      alignItems:'center'
    },
    txt:{
    fontSize:18,
      height:50,
      width:"30%",
      borderRadius:10,
      marginVertical: 10,
      marginHorizontal: 100,
      marginTop:12,
      color:'white'
    }
    
    });
    
    export default Flatlist;
    
    