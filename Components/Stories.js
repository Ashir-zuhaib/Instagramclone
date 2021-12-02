import React from "react"
import { View, StyleSheet,ScrollView, Image, Text } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import Images from '../assets/Images'
import { USERS } from "./Users"
// import { ScrollView } from "react-native-gesture-handler"

export default function Stories(){
    return(
        // <SafeAreaView style={styles.container} >
        
            <ScrollView
             horizontal={true}
             showsHorizontalScrollIndicator={false} 
             style={styles.stor} >
                {USERS.map((story, index)=>(
                   <View key={index}>
                       <Image source={story.image} style={styles.imagestyle}  />
                       <Text>{story.user}</Text>
                   </View>
                ))}
        {/* <View style={styles.body}><Image source={Images.profile} style={styles.imagestyle} /><Text style={{textAlign:"center"}}>Your Story</Text></View>
        <View style={styles.body}><Image source={Images.story1} style={styles.imagestyle} /><Text style={{textAlign:"center"}}>Ashir</Text></View>
        <View style={styles.body}><Image source={Images.story2} style={styles.imagestyle} /><Text style={{textAlign:"center"}}>Zuhaib</Text></View>
        <View style={styles.body}><Image source={Images.story3} style={styles.imagestyle} /><Text style={{textAlign:"center"}}>Bahadur</Text></View>
        <View style={styles.body}><Image source={Images.story4} style={styles.imagestyle} /><Text style={{textAlign:"center"}}>Ahmer</Text></View>
        <View style={styles.body}><Image source={Images.story5} style={styles.imagestyle} /><Text style={{textAlign:"center"}}>Uzair</Text></View>
        <View style={styles.body}><Image source={Images.story6} style={styles.imagestyle} /><Text style={{textAlign:"center"}}>Zubair</Text></View>
        <View style={styles.body}><Image source={Images.story7} style={styles.imagestyle} /><Text style={{textAlign:"center"}}>Raees</Text></View>
        <View style={styles.body}><Image source={Images.story8} style={styles.imagestyle} /><Text style={{textAlign:"center"}}>Amir</Text></View>
        <View style={styles.body}><Image source={Images.story9} style={styles.imagestyle} /><Text style={{textAlign:"center"}}>Ahsan</Text></View>         */}
        </ScrollView>
        
        
    )
}
const styles = StyleSheet.create({
    
    story:{
        // flexDirection:"row",
        height:80,
        width:80,
        borderRadius:50,
        borderColor:'#FF0000',
        // backgroundColor:"#FF0000",
        // marginHorizontal: 5,
        shadowColor: '#470000',
        shadowOffset: {width: 0, height: 1},
        shadowOpacity: 0.2,
        elevation: 1,
        margin:5,
    },
    stor:{
        flex:1,
        flexDirection:"row",
        // backgroundColor:'#FFA07A',
        marginTop:10,
        marginHorizontal:10,
        height:120
    },
    imagestyle:{
        width:70,
        height:70,
        borderRadius:50,
        margin:5,
        
    }
      
})