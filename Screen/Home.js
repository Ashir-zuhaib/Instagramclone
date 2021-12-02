import React from "react"
import { View, StyleSheet, StatusBar, Text } from "react-native"
import { ScrollView } from "react-native-gesture-handler"
// import { SafeAreaView } from "react-native-safe-area-context"
import Header from "../Components/Header"
import Stories from "../Components/Stories"
// import Signin from "./Signin"
// import { Divider } from 'react-native-elements';
import Post from "../Components/Post"
export default function Home(){
    return(
    <View style={styles.Vw}>
        {/* <SafeAreaView style={styles.Headers} >
        </SafeAreaView> */}
        <ScrollView>
        <Header style={styles.Headers} />
        <Stories />
        <Post />
        
        </ScrollView>
        {/* <Text>
        <Divider /></Text>; */}
        </View>
    )
}
const styles = StyleSheet.create({
    Headers: {
        flex:0.1,
        // backgroundColor:'#FFA500',
        paddingTop: StatusBar.currentHeight,
        // position:fixed,
        // marginTop:30,

    },
    Stories:{
        flex:0.2,
        
        
    },
    Vw:{
        flex:1,
        // backgroundColor:'#FFFF00'
    }
})