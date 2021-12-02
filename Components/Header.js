import React from "react";
import {StyleSheet, Text, SafeAreaView, View, Image } from "react-native";
import { FontAwesome5 } from '@expo/vector-icons';
import LogoText from '../assets/Images'
import { TouchableOpacity } from "react-native-gesture-handler";
export default function Header(){
    return(
      
        <View style={styles.Header}>
            <TouchableOpacity>
                <Image source={LogoText.logoText} style={styles.imagestyle} />
            </TouchableOpacity>
                <View>
                <FontAwesome5 name="facebook-messenger" size={30} color="black" />
                </View>
        </View>
        
    )
}
const styles = StyleSheet.create({
    imagestyle:{
        width:120,
        height:40,
    },
    Header: {
    flex:1,
    flexDirection:'row',
      justifyContent:"space-between",
    // backgroundColor:'#FF0000',
    paddingTop:30,
    // paddingBottom:20,
    marginHorizontal:20,

    // flexDirection:'row' ,
    // justifyContent:'space-between'

    }
})