import React from "react"
import { View, StyleSheet,ScrollView, Image, Text } from "react-native"
import { Feather } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
// import Images from "../assets/Images";
import { USERS } from "./Users";
function Post(){
    
    return(
        <>
            {USERS.map((profile,Index)=>(
            <View key={Index}>
            <View  style={styles.stor}>
            <View style={styles.body}>
                <Image source={profile.image} style={styles.imagestyle} />
            </View>
            <View style={{flex:0.9}}>  
                
                <Text style={styles.textstyle}>{profile.user}</Text>
            </View>

            <View>

                  <Feather name="more-vertical" size={24} color="black" style={{marginVertical:15,marginLeft:150}} />
                </View>
              </View>
              <View>
              <Image source={profile.post} style={{width:'100%', height:500}} />
              </View>
              <View style={styles.footpost}>
            <View style={styles.footpostaction}>
                <Feather style={{margin:6}} name="heart" size={30} color="black" />
                <FontAwesome style={{margin:6}} name="comment-o" size={30} color="black" />
                <Feather name="send" size={30} style={{margin:6}} color="black" />
            </View>  

            <View style={styles.footpost1}>
            <FontAwesome name="bookmark-o" size={30} color="black" />
            </View>
              </View>
            <View >
                <Text style={styles.textstyle1}>{Math.floor(Math.random() * 100)} Likes</Text>
            </View>
            <View style={{flexDirection:"row"}}>
                <Text style={styles.textstyle1} >
                    {profile.user}
                </Text>
                {/* <Text>Caption</Text> */}
            </View>

        </View>
            ))}
            </>)

}
const styles = StyleSheet.create({
    
    body:{
        // flexDirection:"row",
        height:50,
        width:50,
        borderRadius:50,
        // borderColor:'#FF0000',
        // backgroundColor:"#FF0000",
        // marginHorizontal: 5,
        shadowColor: '#470000',
        shadowOffset: {width: 0, height: 1},
        shadowOpacity: 0.2,
        elevation: 1,
        margin:5,
        
        flexDirection:"row"
        
    },
    stor:{
        flex:1,
        flexDirection:"row",
        alignContent:"space-around",
        // backgroundColor:'#FF0000',
        height:70
    },
    imagestyle:{
        width:40,
        height:40,
        borderRadius:50,
        margin:5,
        flexGrow:0.1,
    },
    textstyle:{
        flex:0.9,
        marginLeft:10,
        marginVertical:15,
        fontWeight:"bold"
    },
    textstyle1:{
        marginLeft:10,
        fontWeight:"bold"
    },
    footpost:{
        flex:1,
        flexDirection:"row",
        
    },
    footpostaction:{
        // backgroundColor:'#FF0000',
        
        flex:0.9,
        flexDirection:"row",
        alignContent:"space-around"
    },
    footpost1:{
        flex:0.1,
        flexDirection:"row",
        margin:5
    }
      
})
export default Post