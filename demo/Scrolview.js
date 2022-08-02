import React from "react";
import {StyleSheet, Text, View, ScrollView, SafeAreaView} from "react-native";

const Scrolview = () => {

return(
  <SafeAreaView style={styles.container}>
<ScrollView
// horizontal={true}
stickyHeaderIndices={[2]}
// alwaysBounceHorizontal={true}
// stickyHeaderHiddenOnScroll={false}
// zoomScale={10}
alwaysBounceVertical={true}
bounces={true}
indicatorStyle='black'
scrollIndicatorInsets={{top:10, bottom:20, left:20, right:10}}
// scrollEnabled={true}
// bouncesZoom={true}
// canCancelContentTouches={false}
// automaticallyAdjustContentInsets={true}
// automaticallyAdjustsScrollIndicatorInsets={true}
// automaticallyAdjustKeyboardInsets={true}
// scrollToOverflowEnabled={true}
// scrollsToTop={false}
// snapToAlignment='center'
showsHorizontalScrollIndicator={true}
showsVerticalScrollIndicator={true}
// centerContent={true}
// snapToEnd={true}
// snapToStart={true}
contentContainerStyle={styles.contentContainer}
// decelerationRate='normal'
// directionalLockEnabled={true}
// disableIntervalMomentun={false}
// disableScrollViewPanResponder={true}
// endFillColor='yellow'// Android
// contentOffset={{x:100, y:300}}
// fadingEdgeLength={1}
// invertStickyHeaders={true}
// keyboardDismissMode='on-drag'
// keyboardShouldPersistTaps='always'
// maximumZoomScale={1.0}
// minimumZoomScale={1.0}
// pagingEnabled={false}
// persistentScrolbar={false}
// pinchGestureEnabled={true}

// overScrollMode='always'
// nestedScrollEnabled={true}// Android
// contentInsetAdjustmentBehavior='always'
// contentInset={{top:20, bottom:90, left:5, right:20}}
StickyHeaderComponent={() =>{
  return(
    <View>
      <Text>Name</Text>
      </View>
  )
}}
>
  

<Text style={styles.text}>Ram</Text>
<Text style={styles.text}>Ravi</Text>
<Text style={styles.text}>Rohit</Text>
<Text style={styles.text}>Mani</Text>
<Text style={styles.text}>Mohit</Text>
<Text style={styles.text}>Monu</Text>
<Text style={styles.text}>Sumit</Text>
<Text style={styles.text}>Sonu</Text>

</ScrollView>

</SafeAreaView>

   ) 
   }
   const styles = StyleSheet.create({
    container:{
     
    },
    text:{
      fontSize:20,
      paddingTop:20,
      margin:20,
      borderWidth:1,
      textAlign:'center',
      backgroundColor:'lightgreen',
      borderRadius:2,
      padding:10
    },
    contentContainer:{
      padding:20
    }
   })
   export default Scrolview;
