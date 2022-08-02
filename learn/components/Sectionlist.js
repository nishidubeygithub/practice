import React from 'react';
import {View, Text, StyleSheet, SafeAreaView, SectionList} from 'react-native';


const Sectionlist = () => {
const DATA = [
        {
          title: "Fruits",
          data: ["Mango", "Grapes", "Apple"]
        },
        {
          title: "Vegetables",
          data: ["Brinjal", "Potato", "Cabbage"]
        },
        {
          title: "Drinks",
          data: ["Water", "Milk", "Juice"]
        },
        {
          title: "Furniture",
          data: ["Table", "SofaSet"]
        }
      ];
      
      const Item = ({title}) => (
        <View style={styles.item}>
          <Text style={styles.title}>{title}</Text>
        </View>
      );
      const ItemDivider = () => {
        return (
          <View style={styles.view}/>
        );
      }
      // const EmptyComponent = ({title}) => (
      //   <View style={styles.empty}>
      //     <Text style={styles.emptyText}>{title}</Text>
      //   </View>
      // );
      const onViewableCall = () => {
        console.log('onView')
      }
      // const Seperator = () => {
      //   return (
      //     <View style={styles.view}/>
      //   );

      
      
      return(
        <View style={styles.container}>
          <SectionList
            sections={DATA}
            keyExtractor={(item, index) => item + index}
            extraData={DATA}
            inverted={false}
            stickyHeaderIndices={2}
            stickySectionHeadersEnabled={true}
            // ListEmptyComponent={
            //   <EmptyComponent title="Blank" />}
            ItemSeparatorComponent={ItemDivider}
            onRefresh={() => {console.log ('Data Refreshed')}}
            refreshing={true}
            initialNumToRender={5}
            // removeClippedSubviews={true}
            // onEndReachedThreshold={10}
            // SectionSeparatorComponent={Separator}
            onViewableItemsChanged={onViewableCall}
            renderItem={({item}) => <Item title={item} />}
            renderSectionHeader={({section: {title} }) => (
             <Text style={styles.header}>{title}</Text>
            )}
            // renderSectionFooter={({section: {title} }) => (
            //    <Text style={styles.header}>{title}</Text>
            //   )}
            ListHeaderComponent={()=>(
              <View style={styles.head}>
              <Text style={styles.text}>Header</Text>
              </View>
            )}
              ListFooterComponent={()=>(
                <View style={styles.head}>
                <Text style={styles.text}>Footer</Text>
                </View>
            )}
          />
        </View>
      );
            }
          
      
      const styles = StyleSheet.create({
        container: {
          flex: 1,
          paddingTop:20,
          marginHorizontal: 15
        },
        item: {
          backgroundColor: "pink",
          padding: 10,
          borderWidth:1,
          borderRadius:2,
          marginVertical: 8
        },
        view:{
         height: 1,
         width: "100%",
         backgroundColor: "purple",
        },
        head:{
        fontSize:30,
        alignItems:'center',
        backgroundColor:'orange',
        height:40,
        width:100,
        padding:10,
        marginVertical:10,
        marginLeft:120
        },
        text:{
          textAlign:'center',
          
        },
        header: {
          fontSize: 20,
          backgroundColor: "lightblue",
          borderWidth:1,
          padding:10
        },
        title: {
          fontSize: 15
        },
        empty: {
          alignItems: 'center',
          justifyContent: 'center',
        },
        emptyText: {
          fontSize: 30,
        },
      });
      
export default Sectionlist;