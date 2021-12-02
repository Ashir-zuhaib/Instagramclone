import React from "react"
import { View, StyleSheet, Image  } from "react-native";
import { ScrollView, TextInput } from "react-native-gesture-handler"
import { USERS } from "../Components/Users"
import dp from'../assets/images/pi.jpg'
import { EvilIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
export default function Search(){
    
    return(
        <ScrollView>
        <View style={styles.searchHead}>
            <View>
            <Image style={styles.profile} source={dp}/></View>
        <View style={styles.searchView}>
        <EvilIcons name="search" size={24} color="black" />
        <TextInput 
        placeholder='Search'
        style={{height:40,width:100, flex:1,borderWidth:1,borderRadius:30,borderColor:'#808080', }}
        />
        </View>
        <View>
        <AntDesign name="setting" size={24} color="black" /></View>
        </View>
        <View style={styles.searchjugar}>
        <View style={styles.img}>
            {USERS.map((searh,index)=>
            <View key={index}>
            <Image source={searh.post} style={styles.imagestyle}  />
        </View>)}
        </View>
        <View style={styles.img1}>
            {USERS.map((searh,index)=>
            <View key={index}>
            <Image source={searh.image} style={styles.imagestyle1}  />
        </View>)}
        </View>
        </View>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    searchHead:{
        flex:0.9,
        flexDirection:"row",
        justifyContent:"space-around",
        marginTop:40,
        marginBottom:20
    },
    profile:{
        height:30,
        width:30,
        borderRadius:50,

    },
    imagestyle:{
        width:'100%',
        height:200,
        borderWidth:3,
    borderColor:'#FF0000',
    },
    imagestyle1:{
        width:'100%',
        height:400,
        borderWidth:3,
    borderColor:'#FF0000',
    },
    searchView:{
        flex:0.7,
        // marginHorizontal:10,
        
        flexDirection:"row"
    },
    searchjugar:{
        flex:1,
        flexDirection:"row"
    },
    img:{
        flex: 1,
        
    // marginHorizontal:3,
    borderWidth:1,
    borderColor:'#FF0000',
},
    img1:{
        flex: 1,
        
    marginHorizontal:3,
    borderWidth:1,
    borderColor:'#FF0000',
}
})